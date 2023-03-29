import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { Text } from '../Text';
import styles from './TagItem.module.scss';

interface TagItemProps<T extends string>
  extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  text: T;
  variant?: 'light' | 'dark';
  onClickHandler?: (value: T) => void;
}

export const TagItem = <T extends string>({
  className,
  text,
  variant = 'light',
  onClickHandler,
  ...otherProps
}: TagItemProps<T>) => {
  return (
    <Text
      size="s"
      className={classNames(className, styles.tag, styles[variant])}
      {...otherProps}
    >
      {text}
    </Text>
  );
};
