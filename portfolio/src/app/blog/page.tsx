import { BlogHeading } from "@/components/blog/blog-heading";
import { SearchInput } from "@/components/blog/search-input";
import { BlogTagList } from "@/components/blog/blog-tag-list";
import { BlogPostGrid } from "@/components/blog/blog-post-grid";
import { Container } from "@/components/ui/container";
import { getAllTags, blogPosts } from "@/lib/blog-data";

// Use static data for export
export default function BlogPage() {
  const tags = getAllTags();
  
  return (
    <main className="min-h-screen py-10">
      <Container>
        <BlogHeading />
        
        <div className="mb-8">
          <SearchInput />
        </div>
        
        <div className="mb-8">
          <BlogTagList tags={tags} />
        </div>
        
        <section>
          <BlogPostGrid posts={blogPosts} />
        </section>
      </Container>
    </main>
  );
}
