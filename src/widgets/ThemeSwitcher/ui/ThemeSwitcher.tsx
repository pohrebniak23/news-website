import { useTheme } from "shared/contexts";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import DarkIcon from "../assets/icons/dark-switch-icon.svg";
import LightIcon from "../assets/icons/light-switch-icon.svg";
import { Theme } from "shared/contexts/themeContext/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={classNames(styles.themeSwitcher, { [styles.themeSwitcher_dark]: theme === Theme.DARK }, [className])}>
      <div
        className={classNames(
          styles.circle,
          { [styles.circle_dark]: theme === Theme.DARK },
        )}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </div>
    </button>
  );
};
