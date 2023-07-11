import classNames from 'classnames';
import { ReactNode, HTMLAttributes } from 'react';
import styles from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between' | 'around';
export type FlexAlign = 'center' | 'start' | 'end';
export type FlexDirection = 'column' | 'row';
export type FlexGap = 'none' | '4' | '8' | '16' | '32' | '48';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  wrap?: boolean;
  w100?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
  center: styles.justifyCenter,
  start: styles.justifyStart,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
  around: styles.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  center: styles.alignCenter,
  start: styles.alignStart,
  end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  none: styles.gapNone,
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
  48: styles.gap48,
};

export const Flex = ({
  children,
  className,
  justify = 'start',
  align = 'start',
  direction = 'row',
  gap = 'none',
  w100 = true,
  wrap = false,
  ...otherProps
}: FlexProps) => {
  return (
    <div
      className={classNames(
        className,
        styles.flex,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap],
        w100 && styles.w100,
        { [styles.wrap]: wrap },
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
