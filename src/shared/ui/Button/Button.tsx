import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...otherProps
}) => (
  <button
    {...otherProps}
    type="button"
    className={classNames(styles.button, {}, [className, styles[theme]])}
  >
    {children}
  </button>
);
