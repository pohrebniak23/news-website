import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      className={classNames(styles.applink, {}, [className, styles[theme]])}
     {...otherProps}
    >
      {children}
    </Link>
  );
};
