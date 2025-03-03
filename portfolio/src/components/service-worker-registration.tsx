'use client';

import { useEffect, useState } from 'react';

export default function ServiceWorkerRegistration() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' && 
      'serviceWorker' in navigator && 
      window.location.hostname !== 'localhost'
    ) {
      // Register the service worker
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (!newWorker) return;
            
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, user needs to refresh
                setUpdateAvailable(true);
              }
            });
          });
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
      
      // Handle controller change
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          // Avoid multiple refreshes
          refreshing = true;
          window.location.reload();
        }
      });
    }
  }, []);

  const handleUpdate = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      // Send a message to the service worker to skip waiting
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-md shadow-lg z-50 max-w-xs">
      <p className="font-medium mb-2">New version available!</p>
      <p className="text-sm mb-3">Refresh to see the latest updates.</p>
      <button 
        onClick={handleUpdate}
        className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
      >
        Update Now
      </button>
    </div>
  );
}
