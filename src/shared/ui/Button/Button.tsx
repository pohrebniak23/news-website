import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = '',
  children,
  ...otherProps
}) => (
  <button
    {...otherProps}
    type="button"
    className={classNames(styles.button, className, styles[theme])}
  >
    {children}
  </button>
);
