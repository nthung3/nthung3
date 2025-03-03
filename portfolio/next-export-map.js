// Export path map for static export
// This file is used to control which paths are generated for static export

// Define the paths to include in the static export
module.exports = async function() {
  return {
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/blog': { page: '/blog' },
    '/projects': { page: '/projects' },
    '/contact': { page: '/contact' },
    // Add blog posts with static paths
    '/blog/data-fetching-and-caching': { page: '/blog/[slug]', query: { slug: 'data-fetching-and-caching' } },
    '/blog/neo-brutalism-web-design': { page: '/blog/[slug]', query: { slug: 'neo-brutalism-web-design' } },
    '/blog/animation-principles-frontend': { page: '/blog/[slug]', query: { slug: 'animation-principles-frontend' } },
    '/blog/getting-started-nextjs-13': { page: '/blog/[slug]', query: { slug: 'getting-started-nextjs-13' } },
    '/blog/typescript-tips-tricks': { page: '/blog/[slug]', query: { slug: 'typescript-tips-tricks' } },
  };
};
