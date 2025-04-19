import { forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cn } from '@/lib/utils';
import { getRatio } from './utils';

// ----------------------------------------------------------------------

interface ImageProps extends React.ComponentPropsWithoutRef<typeof LazyLoadImage> {
  ratio?: '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';
  overlay?: boolean;
  disabledEffect?: boolean;
  effect?: 'blur' | 'opacity' | 'black-and-white';
  className?: string;
}

const Image = forwardRef<HTMLSpanElement, ImageProps>(
  (
    {
      ratio,
      overlay,
      disabledEffect = false,
      className,
      alt,
      src,
      afterLoad,
      delayTime,
      threshold,
      beforeLoad,
      delayMethod,
      placeholder,
      wrapperProps,
      scrollPosition,
      effect = 'blur',
      visibleByDefault,
      wrapperClassName,
      useIntersectionObserver,
      ...other
    },
    ref
  ) => {
    const content = (
      <LazyLoadImage
        alt={alt}
        src={src}
        afterLoad={afterLoad}
        delayTime={delayTime}
        threshold={threshold}
        beforeLoad={beforeLoad}
        delayMethod={delayMethod}
        placeholder={placeholder}
        wrapperProps={wrapperProps}
        scrollPosition={scrollPosition}
        visibleByDefault={visibleByDefault}
        effect={disabledEffect ? undefined : effect}
        useIntersectionObserver={useIntersectionObserver}
        wrapperClassName={cn('component-image-wrapper', wrapperClassName)}
        placeholderSrc={disabledEffect ? '/assets/transparent.png' : '/assets/placeholder.svg'}
        className={cn('w-full h-full object-cover align-bottom', ratio && 'absolute top-0 left-0')}
      />
    );

    return (
      <span
        ref={ref}
        className={cn(
          'component-image inline-block overflow-hidden relative align-bottom',
          ratio && 'w-full',
          overlay &&
            'before:content-[""] before:absolute before:inset-0 before:z-10 before:bg-black/50',
          className
        )}
        {...other}
      >
        <span
          className={cn(
            'component-image-wrapper inline-block w-full h-full align-bottom bg-cover',
            ratio && `pt-[${getRatio(ratio)}]`
          )}
        >
          {content}
        </span>
      </span>
    );
  }
);

Image.displayName = 'Image';

export default Image;
