import classNames from 'classnames';
import { genericMemoComponent } from 'shared/lib/genericMemoComponent/genericMemoComponent';
import { TabItem, TabItemTheme } from './TabItem/TabItem';
import styles from './Tabs.module.scss';

interface TabsProps<T extends string> {
  className?: string;
  tabsList: T[];
  value: T;
  onTabClick: (value: T) => void;
}

export const Tabs = genericMemoComponent(
  <T extends string>({
    className,
    tabsList,
    value,
    onTabClick,
  }: TabsProps<T>) => {
    return (
      <div className={classNames(styles.tabs, className)}>
        {tabsList.map((item) => (
          <TabItem<T>
            item={item}
            key={item}
            theme={value === item ? TabItemTheme.NORMAL : TabItemTheme.OUTLINE}
            onClick={() => onTabClick(item as T)}
          />
        ))}
      </div>
    );
  },
);
