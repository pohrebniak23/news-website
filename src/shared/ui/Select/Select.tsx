import classNames from 'classnames';
import { ChangeEvent, memo, useMemo, useCallback } from 'react';
import styles from './Select.module.scss';

export interface SelectOptions {
  value: string;
  label: string;
}

interface SelectProps<T> {
  className?: string;
  value?: string;
  options: SelectOptions[];
  onChange?: (value: T) => void;
}

const genericMemo: <T>(component: T) => T = memo;

export const Select = genericMemo(<T extends string>(props: SelectProps<T>) => {
  const { className, value, options, onChange } = props;

  const optionsList = useMemo(() => {
    return options?.map((optItem) => (
      <option
        key={optItem.value}
        className={styles.option}
        value={optItem.value}
      >
        {optItem.label}
      </option>
    ));
  }, [options]);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value as T);
    },
    [onChange],
  );

  return (
    <select
      className={classNames(styles.select, className)}
      value={value}
      onChange={onChangeHandler}
    >
      {optionsList}
    </select>
  );
});
