'use client';

// Performance monitoring utilities
import { useReportWebVitals } from 'next/web-vitals';
import { useEffect } from 'react';

type WebVitalMetric = {
  id: string;
  name: string;
  startTime: number;
  value: number;
  label: 'web-vital' | 'custom';
};

/**
 * Hook to report Web Vitals metrics
 * @param onPerfEntry Optional callback for performance entries
 */
export function useWebVitals(onPerfEntry?: (metric: WebVitalMetric) => void) {
  useReportWebVitals((metric) => {
    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.info(`Web Vital: ${metric.name} - ${metric.value}`);
    }
    
    // Send to analytics if in production
    if (process.env.NODE_ENV === 'production' && onPerfEntry) {
      onPerfEntry(metric);
    }
  });
}

/**
 * Optimize fonts loading - prevent layout shift
 */
export function useFontOptimization() {
  useEffect(() => {
    // Add font optimization logic
    document.documentElement.classList.add('fonts-optimized');
    
    // Implement font loading strategy - optional fontfaceobserver integration
    // Example: new FontFaceObserver('Font Name').load().then(() => {...})
  }, []);
}

/**
 * Prefetch resources for improved user experience
 * @param paths Array of paths to prefetch
 */
export function usePrefetchResources(paths: string[]) {
  useEffect(() => {
    // Don't prefetch in development - saves bandwidth
    if (process.env.NODE_ENV === 'development') return;
    
    // Wait until idle to start prefetching
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      window.requestIdleCallback(() => {
        paths.forEach(path => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = path;
          link.as = path.endsWith('.js') ? 'script' : 
                     path.endsWith('.css') ? 'style' : 
                     path.match(/\.(jpg|jpeg|png|gif|webp|avif)$/) ? 'image' : 
                     'fetch';
          document.head.appendChild(link);
        });
      });
    }
  }, [paths]);
}

/**
 * Image optimization helper - generates proper sizes attribute
 * @param breakpoints Array of breakpoint widths
 * @returns String for sizes attribute
 */
export function generateImageSizes(breakpoints: {width: number, size: string}[]): string {
  return breakpoints
    .sort((a, b) => b.width - a.width) // Sort breakpoints descending
    .map(bp => `(min-width: ${bp.width}px) ${bp.size}`)
    .join(', ') + ', 100vw';
}

/**
 * Helper to use native lazy loading with fallback
 */
export function getImageLoadingStrategy(priority: boolean): 'eager' | 'lazy' {
  return priority ? 'eager' : 'lazy';
}

/**
 * Resource hints management
 * Add preconnect for external domains the app will connect to
 */
export const PRECONNECT_DOMAINS = [
  'www.notion.so',
  'images.unsplash.com',
];

/**
 * Generate optimized image parameters for next/image
 */
export function getOptimizedImageProps(width: number, priority = false) {
  return {
    width,
    height: Math.round(width / (16/9)), // Default aspect ratio
    sizes: generateImageSizes([
      { width: 1920, size: '100vw' },
      { width: 1280, size: '100vw' },
      { width: 768, size: '100vw' },
      { width: 640, size: '95vw' },
    ]),
    loading: getImageLoadingStrategy(priority),
    quality: 85, // Balance between quality and file size
  };
}
