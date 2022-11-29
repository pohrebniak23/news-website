import classNames from 'classnames';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOptions {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  value?: string;
  options: SelectOptions[];
  onChange?: (value: string) => void;
}

export const Select = memo(
  ({ className, value, options, onChange }: SelectProps) => {
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

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

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
