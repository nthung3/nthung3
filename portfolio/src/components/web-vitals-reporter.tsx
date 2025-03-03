'use client';

import { useWebVitals } from '@/lib/performance';

/**
 * Component that reports Web Vitals metrics
 * Handles performance reporting without affecting the UI
 */
export default function WebVitalsReporter() {
  // Setup web vitals reporting
  useWebVitals((metric) => {
    // In a real-world app, send to analytics service
    // Example: Analytics service implementation
    const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    
    if (analyticsId) {
      // This would be your analytics service call
      console.log(`[Analytics] ${metric.name}: ${metric.value}`);
      
      // Example of what you might send to an analytics service
      const body = {
        dsn: analyticsId,
        event: 'web-vital',
        name: metric.name,
        value: metric.value,
        id: metric.id,
        page: window.location.pathname,
      };
      
      // Send using Beacon API if available, falling back to fetch
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });
        navigator.sendBeacon('/api/analytics', blob);
      } else {
        fetch('/api/analytics', {
          body: JSON.stringify(body),
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' }
        }).catch(console.error);
      }
    }
  });

  // This component doesn't render anything
  return null;
}
