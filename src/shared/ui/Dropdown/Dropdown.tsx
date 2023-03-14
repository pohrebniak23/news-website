import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { UIDirections } from '../../types/UIDirections';
import { AppLink } from '../AppLink/AppLink';
import styles from './Dropdown.module.scss';

export interface DropdownItem {
  content: ReactNode;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  className?: string;
  listItems: DropdownItem[];
  triggerContent: ReactNode;
  direction?: UIDirections;
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    listItems,
    triggerContent,
    direction = 'bottom-left',
  } = props;

  return (
    <div className={classNames(className, styles.wrapper)}>
      <Menu>
        <Menu.Button className={classNames(styles.triggerBtn)}>
          {triggerContent}
        </Menu.Button>

        <Transition
          enterFrom={`${styles['enter-from']}`}
          enterTo={`${styles['enter-to']}`}
          leaveFrom={`${styles['leave-to']}`}
          leaveTo={`${styles['leave-to']}`}
        >
          <Menu.Items className={classNames(styles.options, styles[direction])}>
            {listItems.map((item, index) => {
              if (item.href) {
                return (
                  <Menu.Item
                    key={index}
                    className={styles.item}
                    as={AppLink}
                    to={item.href}
                    onClick={item.onClick}
                  >
                    {item.content}
                  </Menu.Item>
                );
              }

              return (
                <Menu.Item
                  key={index}
                  className={styles.item}
                  as="div"
                  onClick={item.onClick}
                >
                  {item.content}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
