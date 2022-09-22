import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(styles.button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
