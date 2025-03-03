'use client';

import Image, { ImageProps } from 'next/image';
import { getOptimizedImageProps } from '@/lib/performance';
import { useState, useEffect } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError' | 'loading' | 'sizes'> {
  fallbackSrc?: string;
  aspectRatio?: number;
  containerClassName?: string;
  enableLazyLoading?: boolean;
}

/**
 * Optimized image component with best practices built-in
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = '/images/placeholder.webp',
  aspectRatio = 16/9,
  priority = false,
  className = '',
  containerClassName = '',
  enableLazyLoading = true,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
  }, [src]);
  
  // Calculate optimal width and height based on provided values
  const finalWidth = width || 800; // Default width if not provided
  const finalHeight = height || Math.round(finalWidth / aspectRatio);
  
  // Get standard optimized image props
  const optimizedProps = getOptimizedImageProps(finalWidth, priority);
  
  // Handle image load error
  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };
  
  // Handle image load success
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div 
      className={`relative overflow-hidden ${containerClassName}`}
      style={{aspectRatio: `${aspectRatio}`}}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority || !enableLazyLoading ? 'eager' : 'lazy'}
        sizes={optimizedProps.sizes}
        quality={optimizedProps.quality}
        {...props}
      />
      
      {/* Skeleton loader while image is loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
