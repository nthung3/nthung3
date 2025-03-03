# Notion CMS Setup Guide

This guide explains how to set up and configure Notion as a CMS for the portfolio blog.

## Required Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
# Notion API
NOTION_API_KEY=your_notion_api_key_here
NOTION_BLOG_DATABASE_ID=your_notion_database_id_here

# Revalidation (for triggering manual updates)
REVALIDATION_TOKEN=your_secret_token_here
```

## Setting Up Notion

### 1. Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name your integration (e.g., "Portfolio Blog CMS")
4. Select the workspace where your blog content will live
5. Set the capabilities needed (Read content is required)
6. Complete the creation process and copy your "Internal Integration Token" - this is your `NOTION_API_KEY`

### 2. Create a Blog Database in Notion

Create a new database in Notion with the following properties:

| Property Name | Property Type | Description |
|--------------|--------------|-------------|
| Title | Title | The blog post title |
| Slug | Text | URL-friendly version of the title (e.g., "my-blog-post") |
| Date | Date | Publication date |
| Excerpt | Text | Short summary of the post |
| Tags | Multi-select | Categories/tags for the post |
| Color | Select | Visual theme color (options: blue, red, yellow, green, purple) |
| Published | Checkbox | Whether the post is published |

### 3. Share Database with Integration

1. Navigate to your blog database in Notion
2. Click the "..." menu in the top right
3. Click "Add connections"
4. Select your integration from the list
5. Your integration now has access to the database

### 4. Get Your Database ID

The database ID is in the URL when you're viewing the database in Notion:
```
https://www.notion.so/{workspace_name}/{database_id}?v={view_id}
```

Copy the `database_id` portion and set it as your `NOTION_BLOG_DATABASE_ID` environment variable.

## Content Structure

### Blog Post Content

The actual content of your blog posts should be written in the Notion page associated with each database entry. The content will be converted from Notion blocks to Markdown and rendered in your blog.

Supported Notion blocks include:
- Paragraphs
- Headings (H1, H2, H3)
- Bulleted lists
- Numbered lists
- To-do lists
- Toggle lists
- Code blocks
- Quotes
- Dividers
- Images

## Revalidation

To refresh your blog content after making changes in Notion, use the revalidation endpoint:

```
POST /api/revalidate
{
  "path": "/blog",
  "token": "your_revalidation_token"
}
```

You can automate this using Notion's automation features or with external tools like Zapier or n8n.

## Troubleshooting

If your blog posts are not displaying:

1. Check that your environment variables are set correctly
2. Verify that your Notion integration has access to the database
3. Ensure your database has the correct property structure
4. Check the server logs for any API errors
5. Verify that blog posts have the "Published" checkbox checked

## Performance Optimizations

This implementation includes several performance optimizations:

1. Incremental Static Regeneration (ISR) with a 60-second cache
2. React `cache()` function for data fetching
3. Suspense for improved loading states
4. Markdown sanitization for security
5. Proper error handling and fallback data

These ensure your blog loads quickly and provides a smooth user experience.
