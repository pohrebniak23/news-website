import { MutableRefObject, useLayoutEffect } from 'react';

export interface UseInfiniteScrollOptions {
  wrapperRef: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLDivElement>;
  callback?: () => void;
}

export const useInfiniteScroll = ({
  wrapperRef,
  triggerRef,
  callback,
}: UseInfiniteScrollOptions) => {
  useLayoutEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          console.log('is intersectiong');
          callback();
        }
      }, options);

      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
