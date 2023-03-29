import classNames from 'classnames';
import { memo, ReactNode, HTMLAttributes } from 'react';
import styles from './Text.module.scss';

export type TextTheme = 'default' | 'error' | 'modal';

export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  theme?: TextTheme;
  size?: TextSize;
  children: ReactNode;
}

export const Text = memo(
  ({
    className,
    theme = 'default',
    size = 's',
    children,
    ...otherProps
  }: TextProps) => {
    return (
      <p
        className={classNames(
          className,
          styles.text,
          styles[theme],
          styles[size],
        )}
        {...otherProps}
      >
        {children}
      </p>
    );
  },
);
