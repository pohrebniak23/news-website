import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import DownArrow from '../../assets/down-arrow.svg';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  label: string;
  available?: boolean;
}

interface SelectProps<T extends string> {
  className?: string;
  value: T;
  label: string;
  onChange?: (value: T) => void;
  options: SelectOption<T>[];
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { options, value, label, className, onChange } = props;

  return (
    <div className={classNames(className, styles.wrapper)}>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Button className={styles.currentValue}>
              {label}
              <DownArrow
                className={classNames(styles.arrow, {
                  [styles.arrowRotate]: open,
                })}
              />
            </Listbox.Button>

            <Transition
              enterFrom={`${styles['enter-from']}`}
              enterTo={`${styles['enter-to']}`}
              leaveFrom={`${styles['leave-to']}`}
              leaveTo={`${styles['leave-to']}`}
            >
              <Listbox.Options className={styles.options}>
                {options.map((item) => (
                  <Listbox.Option
                    key={item.value}
                    value={item.value}
                    disabled={item.available}
                  >
                    {({ active }) => (
                      <li
                        className={classNames(styles.item, {
                          [styles.activeOption]: active,
                        })}
                      >
                        {item.label}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
};
