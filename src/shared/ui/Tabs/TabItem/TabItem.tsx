import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './TabItem.module.scss';

export enum TabItemTheme {
  NORMAL = 'NORMAL',
  OUTLINE = 'OUTLINE',
}

export interface TabItemProps<T extends string>
  extends HTMLAttributes<HTMLDivElement> {
  item: T;
  theme: TabItemTheme;
}

export const TabItem = <T extends string>({
  item,
  theme,
  ...otherProps
}: TabItemProps<T>) => {
  return (
    <div className={classNames(styles.tabItem, styles[theme])} {...otherProps}>
      {item}
    </div>
  );
};
