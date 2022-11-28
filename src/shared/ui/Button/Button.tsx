import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { Loader } from '../Loader/Loader';
import styles from './Button.module.scss';

export type ButtonTheme =
  | 'modal'
  | 'clear'
  | 'outline'
  | 'outline-error'
  | 'square';

export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = '',
    size = 'small',
    children,
    disabled = false,
    isLoading = false,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(
        styles.button,
        className,
        styles[theme],
        styles[size],
        {
          [styles.loading]: isLoading,
        },
      )}
      disabled={disabled}
    >
      {isLoading ? (
        <Loader
          className={styles.btnLoader}
          blockSize={22}
          spinnerSize={22}
          borderDepth={3}
        />
      ) : (
        children
      )}
    </button>
  );
});
