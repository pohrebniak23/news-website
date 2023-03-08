import classNames from 'classnames';
import { genericMemoComponent } from 'shared/lib/genericMemoComponent/genericMemoComponent';
import { TabItem, TabItemData, TabItemTheme } from './TabItem/TabItem';
import styles from './Tabs.module.scss';

interface TabsProps<T extends string> {
  className?: string;
  tabsList: TabItemData[];
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
    // const tabClickHandler = useCallback(
    //   (tabValue: T) => {
    //     return () => {
    //       onTabClick(tabValue);
    //     };
    //   },
    //   [onTabClick],
    // );

    return (
      <div className={classNames(styles.tabs, className)}>
        {tabsList.map((item: TabItemData) => (
          <TabItem
            item={item}
            key={item.value}
            theme={
              value === item.value ? TabItemTheme.NORMAL : TabItemTheme.OUTLINE
            }
            onClick={() => onTabClick(item.value as T)}
          />
        ))}
      </div>
    );
  },
);
