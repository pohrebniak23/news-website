import classNames from 'classnames';
import { InputHTMLAttributes, memo, useRef, useEffect } from 'react';
import styles from './Input.module.scss';

type HTMLInput = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInput {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    autofocus,
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
      if (autofocus) {
        ref.current.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(styles.input, className)}
        {...otherProps}
      />
    );
  },
);
