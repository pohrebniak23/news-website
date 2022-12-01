import classNames from 'classnames';
import { memo } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
  return <Svg className={classNames(styles.icon, className)} />;
});
