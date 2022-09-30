import classNames from 'classnames';
import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import Arrow from '../assets/icons/down-arrow.svg';
import styles from './LangSwitcher.module.scss';

interface ILangList {
  lang: string;
  text: string;
}

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const langList: ILangList[] = [
    {
      lang: 'en',
      text: 'English',
    },
    {
      lang: 'ua',
      text: 'Українська',
    },
  ];

  const toggleLangList = () => {
    setIsOpen(!isOpen);
  };

  const switchLang = (lang: string) => {
    i18next.changeLanguage(lang);
    toggleLangList();
  };

  const currentLang =
    langList.find((item) => item.lang === i18n.language) || null;
  const currentLangText = currentLang ? currentLang.text : null;

  return (
    currentLang && (
      <div className={classNames(styles.langSwitcher, className)}>
        <Button
          theme="clear"
          className={styles.langNav}
          onClick={toggleLangList}
        >
          <span className={styles.langText}>{currentLangText}</span>
          <Arrow
            className={classNames(styles.arrow, {
              [styles.arrowRotate]: isOpen,
            })}
          />
        </Button>

        <div
          className={classNames(styles.list, {
            [styles.listOpen]: isOpen,
          })}
        >
          {langList.map((item) => (
            <button
              type="button"
              key={item.lang}
              className={styles.item}
              onClick={() => switchLang(item.lang)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    )
  );
};
