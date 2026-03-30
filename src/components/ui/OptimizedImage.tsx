import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils/cn';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  layout?: 'full' | 'half' | 'third' | 'square' | 'wide';
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
}

const SHIMMER_GOLD = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMUEyMjM2Ii8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0M5QTg0QyIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+`;

export default function OptimizedImage({
  layout = 'full',
  aspectRatio,
  className,
  imageClassName,
  priority = false,
  alt,
  src,
  ...props
}: OptimizedImageProps) {
  // Define responsive sizes based on layout intent
  const sizesMap = {
    full: '100vw',
    half: '(max-width: 768px) 100vw, 50vw',
    third: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    square: '(max-width: 768px) 50vw, 25vw',
    wide: '100vw',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[var(--color-bg-secondary)]',
        className
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        decoding="async"
        sizes={props.sizes || sizesMap[layout]}
        placeholder="blur"
        blurDataURL={SHIMMER_GOLD}
        className={cn(
          'object-cover transition-opacity duration-500',
          imageClassName
        )}
        {...props}
      />
    </div>
  );
}
