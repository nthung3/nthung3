import { Container } from "@/components/ui/container";

export default function BlogPostLoading() {
  return (
    <Container>
      <div className="py-20 min-h-screen">
        {/* Back button skeleton */}
        <div className="mb-6">
          <div className="w-32 h-10 bg-gray-200 rounded neo-container"></div>
        </div>
        
        {/* Post content skeleton */}
        <div className="neo-container p-8 animate-pulse">
          {/* Title */}
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
          
          {/* Tags */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded"></div>
            ))}
          </div>
          
          {/* Date */}
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-10"></div>
          
          {/* Share buttons */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-4 w-12 bg-gray-200 rounded"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-10 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          
          {/* Content paragraphs */}
          <div className="space-y-6 mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
          
          {/* Author section */}
          <div className="pt-8 border-t-2 border-gray-200 mt-12">
            <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
            <div className="flex items-center">
              <div className="h-16 w-16 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-48"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related posts skeleton */}
        <div className="mt-16">
          <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="neo-container p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-gray-200 rounded"></div>
                  <div className="h-6 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter section skeleton */}
        <div className="mt-20 neo-container p-8">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="h-12 bg-gray-200 rounded flex-grow"></div>
            <div className="h-12 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
