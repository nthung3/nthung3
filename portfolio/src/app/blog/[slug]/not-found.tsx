import Link from 'next/link';
import { Container } from '@/components/ui/container';

export default function BlogNotFound() {
  return (
    <main className="min-h-screen py-20">
      <Container>
        <div className="neo-container p-8 md:p-12 !bg-neo-orange text-black w-full mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">BLOG POST NOT FOUND</h1>
          <p className="mb-8 text-lg">
            Sorry, we couldn't find the blog post you're looking for. It may have been removed or the URL might be incorrect.
          </p>
          <Link href="/blog">
            <button className="neo-button bg-white text-black inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              BACK TO BLOG
            </button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
