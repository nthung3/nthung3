// Dynamic import wrapper components for code splitting
'use client';

import dynamic from 'next/dynamic';
import { ReactNode, Suspense } from 'react';

// Loading fallbacks
const DefaultLoadingFallback = () => (
  <div className="w-full h-48 animate-pulse bg-gray-200 rounded-md"></div>
);

const PostCardLoadingFallback = () => (
  <div className="w-full h-80 animate-pulse bg-gray-200 rounded-md border-2 border-black p-4">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3 mb-6"></div>
    <div className="h-40 bg-gray-300 rounded w-full mb-4"></div>
    <div className="flex gap-2">
      <div className="h-6 bg-gray-300 rounded w-20"></div>
      <div className="h-6 bg-gray-300 rounded w-20"></div>
    </div>
  </div>
);

// Dynamically imported components with Suspense
export const DynamicBlogPosts = dynamic(
  () => import('./blog-posts').then(mod => mod.BlogPosts),
  {
    loading: () => <PostCardLoadingFallback />,
    ssr: true,
  }
);

export const DynamicShareButtons = dynamic(
  () => import('@/app/blog/[slug]/share-buttons').then(mod => mod.default),
  {
    loading: () => (
      <div className="flex gap-2 animate-pulse">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    ),
    ssr: false, // No need to SSR these interactive components
  }
);

export const DynamicNewsletterSignup = dynamic(
  () => import('./newsletter-signup').then(mod => mod.NewsletterSignup),
  {
    loading: () => (
      <div className="w-full h-32 animate-pulse bg-gray-200 rounded-md p-4">
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    ),
    ssr: false, // Client-side only
  }
);

// Generic dynamic component loader with suspense
export function DynamicComponentLoader<T>({
  importFunc,
  fallback = <DefaultLoadingFallback />,
  props = {} as T,
}: {
  importFunc: () => Promise<any>;
  fallback?: ReactNode;
  props?: T;
}) {
  const DynamicComponent = dynamic(importFunc, {
    loading: () => <>{fallback}</>,
  });

  return (
    <Suspense fallback={fallback}>
      <DynamicComponent {...props} />
    </Suspense>
  );
}
