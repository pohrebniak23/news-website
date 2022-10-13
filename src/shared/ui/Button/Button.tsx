import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonTheme {
  MODAL = 'modal',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  SQUARE = 'square',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = '',
  size,
  children,
  ...otherProps
}) => (
  <button
    {...otherProps}
    type="button"
    className={classNames(
      styles.button,
      className,
      styles[theme],
      styles[size],
    )}
  >
    {children}
  </button>
);
