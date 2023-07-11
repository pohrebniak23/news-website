import classNames from 'classnames';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import styles from './PageWrapper.module.scss';
import { useInfiniteScroll } from '../../shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
  endOfPageCallback?: () => void;
}

export const PageWrapper = memo(
  ({ className, children, endOfPageCallback }: PageWrapperProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: endOfPageCallback,
    });

    return (
      <section
        ref={wrapperRef}
        className={classNames(className, styles.pageWrapper)}
      >
        {children}
        <div
          style={{
            height: '10px',
            background: 'black',
          }}
          ref={triggerRef}
        />
      </section>
    );
  },
);
