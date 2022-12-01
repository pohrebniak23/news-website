import classNames from 'classnames';
import { CSSProperties, memo } from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width: string;
  height: string;
  borderRadius?: string;
}

export const Skeleton = memo(
  ({ className, width, height, borderRadius = '0' }: SkeletonProps) => {
    const style: CSSProperties = {
      width,
      height,
      borderRadius,
    };

    return (
      <div style={style} className={classNames(className, styles.skeleton)} />
    );
  },
);
