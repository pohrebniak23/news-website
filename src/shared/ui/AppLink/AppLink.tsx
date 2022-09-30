import { FC } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => (
  <Link
    to={to}
    className={classNames(styles.applink, className, styles[theme])}
    {...otherProps}
  >
    {children}
  </Link>
);
