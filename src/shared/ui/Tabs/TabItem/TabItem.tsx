import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';
import styles from './TabItem.module.scss';

export enum TabItemTheme {
  NORMAL = 'NORMAL',
  OUTLINE = 'OUTLINE',
}

export interface TabItemData {
  value: string;
  content: ReactNode;
}

export interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
  item: TabItemData;
  theme: TabItemTheme;
}

export const TabItem = ({ item, theme, ...otherProps }: TabItemProps) => {
  return (
    <div className={classNames(styles.tabItem, styles[theme])} {...otherProps}>
      {item.content}
    </div>
  );
};
