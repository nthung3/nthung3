import { Client } from '@notionhq/client';
import { NOTION_API_KEY } from './config';

const notion = new Client({ auth: NOTION_API_KEY });

type MdBlock = {
  type: string;
  content: string;
  children?: MdBlock[];
};

export class NotionToMarkdown {
  async pageToMarkdown(pageId: string): Promise<MdBlock[]> {
    try {
      const blocks = await this.getBlockChildren(pageId);
      const markdown = await this.blocksToMarkdown(blocks);
      return markdown;
    } catch (error) {
      console.error('Error converting Notion page to Markdown:', error);
      return [];
    }
  }

  async getBlockChildren(blockId: string): Promise<any[]> {
    try {
      const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 100,
      });
      
      return response.results;
    } catch (error) {
      console.error(`Error getting block children for block ${blockId}:`, error);
      return [];
    }
  }

  async blocksToMarkdown(blocks: any[]): Promise<MdBlock[]> {
    const result: MdBlock[] = [];
    
    for (const block of blocks) {
      const mdBlock = await this.blockToMarkdown(block);
      if (mdBlock) {
        result.push(mdBlock);
      }
    }
    
    return result;
  }

  async blockToMarkdown(block: any): Promise<MdBlock | null> {
    const { type, id } = block;
    
    if (!block[type]) {
      return null;
    }
    
    let content = '';
    const mdBlock: MdBlock = { type, content, children: [] };
    
    switch (type) {
      case 'paragraph':
        content = this.richTextToMarkdown(block.paragraph.rich_text);
        break;
      case 'heading_1':
        content = `# ${this.richTextToMarkdown(block.heading_1.rich_text)}`;
        break;
      case 'heading_2':
        content = `## ${this.richTextToMarkdown(block.heading_2.rich_text)}`;
        break;
      case 'heading_3':
        content = `### ${this.richTextToMarkdown(block.heading_3.rich_text)}`;
        break;
      case 'bulleted_list_item':
        content = `* ${this.richTextToMarkdown(block.bulleted_list_item.rich_text)}`;
        break;
      case 'numbered_list_item':
        content = `1. ${this.richTextToMarkdown(block.numbered_list_item.rich_text)}`;
        break;
      case 'to_do':
        const checked = block.to_do.checked ? '[x]' : '[ ]';
        content = `${checked} ${this.richTextToMarkdown(block.to_do.rich_text)}`;
        break;
      case 'toggle':
        content = `<details><summary>${this.richTextToMarkdown(block.toggle.rich_text)}</summary>`;
        break;
      case 'code':
        const language = block.code.language || '';
        content = `\`\`\`${language}\n${this.richTextToMarkdown(block.code.rich_text)}\n\`\`\``;
        break;
      case 'quote':
        content = `> ${this.richTextToMarkdown(block.quote.rich_text)}`;
        break;
      case 'divider':
        content = '---';
        break;
      case 'image':
        const imageUrl = block.image.type === 'external' 
          ? block.image.external.url 
          : block.image.file?.url || '';
        
        if (imageUrl) {
          const caption = block.image.caption?.length 
            ? this.richTextToMarkdown(block.image.caption) 
            : 'Image';
          
          content = `![${caption}](${imageUrl})`;
        }
        break;
      default:
        content = `Unsupported block type: ${type}`;
    }
    
    mdBlock.content = content;
    
    // Handle blocks with children
    if (block.has_children) {
      const children = await this.getBlockChildren(id);
      mdBlock.children = await this.blocksToMarkdown(children);
    }
    
    return mdBlock;
  }

  richTextToMarkdown(richText: any[]): string {
    if (!richText || !richText.length) {
      return '';
    }
    
    return richText.map(text => {
      let content = text.plain_text || '';
      
      if (text.annotations.bold) {
        content = `**${content}**`;
      }
      if (text.annotations.italic) {
        content = `*${content}*`;
      }
      if (text.annotations.strikethrough) {
        content = `~~${content}~~`;
      }
      if (text.annotations.code) {
        content = `\`${content}\``;
      }
      if (text.href) {
        content = `[${content}](${text.href})`;
      }
      
      return content;
    }).join('');
  }

  toMarkdownString(blocks: MdBlock[]): string {
    return blocks.map(block => {
      let content = block.content;
      
      if (block.children && block.children.length > 0) {
        if (block.type === 'toggle') {
          content += this.toMarkdownString(block.children);
          content += '</details>';
        } else {
          content += '\n' + this.toMarkdownString(block.children);
        }
      }
      
      return content;
    }).join('\n\n');
  }
}
