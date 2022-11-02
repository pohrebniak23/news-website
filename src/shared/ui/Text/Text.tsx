import classNames from 'classnames';
import { FC } from 'react';
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
}

export const Text: FC<TextProps> = ({
  className,
  theme = TextTheme.DEFAULT,
  size = TextSize.MEDIUM,
  children,
}) => {
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
};
