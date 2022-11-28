import classNames from 'classnames';
import {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import styles from './Input.module.scss';

type HTMLInput = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

type InputTheme = 'edit-data';

interface InputProps extends HTMLInput {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    theme = '',
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autofocus) {
      ref?.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={classNames(styles.input, className, styles[theme])}
      {...otherProps}
    />
  );
});
