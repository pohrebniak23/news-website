import { MutableRefObject, useRef, useCallback } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay = 300,
) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
