import classNames from 'classnames';
import { CSSProperties, memo, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  widthSize?: string;
  heightSize?: string;
  radius?: string;
  src: string;
  alt?: string;
}

export const Avatar = memo(
  ({
    className,
    widthSize = '50px',
    heightSize = '50px',
    radius = '0px',
    src,
    alt,
  }: AvatarProps) => {
    const propStyles = useMemo<CSSProperties>(
      () => ({
        width: widthSize,
        height: heightSize,
        borderRadius: radius,
      }),
      [widthSize, heightSize, radius],
    );

    return (
      <img
        className={classNames(className, styles.avatar)}
        style={propStyles}
        src={src}
        alt={alt}
      />
    );
  },
);
