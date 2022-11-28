import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  ERROR = 'error',
  DEFAULT = 'default',
  MODAL = 'modal',
}

export enum TextSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface TextProps {
  className?: string;
  theme?: TextTheme;
  size?: TextSize;
  children: ReactNode;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = TextTheme.DEFAULT,
    size = TextSize.SMALL,
    children,
  } = props;

  return (
    <p
      className={classNames(
        className,
        styles.text,
        styles[theme],
        styles[size],
      )}
    >
      {children}
    </p>
  );
});
