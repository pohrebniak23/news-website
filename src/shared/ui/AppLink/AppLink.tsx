import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
}

export const AppLink = memo(
  ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  }: AppLinkProps) => (
    <Link
      to={to}
      className={classNames(styles.applink, className, styles[theme])}
      {...otherProps}
    >
      {children}
    </Link>
  ),
);
