import classNames from 'classnames';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { genericMemoComponent } from 'shared/lib/genericMemoComponent/genericMemoComponent';
import styles from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string> {
  className?: string;
  value?: T;
  options: SelectOptions<T>[];
  onChange?: (value: T) => void;
}

export const Select = genericMemoComponent(
  <T extends string>(props: SelectProps<T>) => {
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
  },
);
