import { Popover as HeadlessPopover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { UIDirections } from '../../types/UIDirections';
import styles from './Popover.module.scss';

interface PopoverProps {
  triggerContentClassName?: string;
  popoverClassName?: string;
  contentClassName?: string;
  triggerContent: ReactNode;
  children: ReactNode;
  direction?: UIDirections;
}

export const Popover = ({
  triggerContentClassName,
  popoverClassName,
  contentClassName,
  triggerContent,
  children,
  direction = 'bottom-left',
}: PopoverProps) => {
  return (
    <HeadlessPopover className={(styles.wrapper, popoverClassName)}>
      <HeadlessPopover.Button className={triggerContentClassName}>
        {triggerContent}
      </HeadlessPopover.Button>

      <Transition
        enterFrom={`${styles['enter-from']}`}
        enterTo={`${styles['enter-to']}`}
        leaveFrom={`${styles['leave-to']}`}
        leaveTo={`${styles['leave-to']}`}
      >
        <HeadlessPopover.Panel
          className={classNames(
            styles.options,
            styles[direction],
            contentClassName,
          )}
        >
          {children}
        </HeadlessPopover.Panel>
      </Transition>
    </HeadlessPopover>
  );
};
