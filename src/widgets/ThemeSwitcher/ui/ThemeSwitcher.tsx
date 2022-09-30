import classNames from 'classnames';
import { useTheme } from 'shared/contexts';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Button } from 'shared/ui/Button/Button';
import DarkIcon from '../assets/icons/dark-switch-icon.svg';
import LightIcon from '../assets/icons/light-switch-icon.svg';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames(
        styles.themeSwitcher,
        { [styles.themeSwitcher_dark]: theme === Theme.DARK },
        className,
      )}
    >
      <Button
        theme="clear"
        className={classNames(styles.circle, {
          [styles.circle_dark]: theme === Theme.DARK,
        })}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
