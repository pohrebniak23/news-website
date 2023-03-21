import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import styles from './Title.module.scss';

export type TitleTheme = 'default' | 'error' | 'modal';
export type TitleSize = 'extra-small' | 'small' | 'medium' | 'large';
export type TitleVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  className?: string;
  theme?: TitleTheme;
  size?: TitleSize;
  children: ReactNode;
  variant?: TitleVariant;
}

export const Title = memo((props: TitleProps) => {
  const {
    className,
    theme = 'default',
    size = 'small',
    variant: Variant = 'h1',
    children,
  } = props;

  return (
    <Variant
      className={classNames(
        className,
        styles.title,
        styles[theme],
        styles[size],
      )}
    >
      {children}
    </Variant>
  );
});