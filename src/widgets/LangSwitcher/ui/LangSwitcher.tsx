import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Arrow from '../assets/icons/down-arrow.svg';
import styles from './LangSwitcher.module.scss';

interface ILangList {
  lang: string;
  text: string;
}

interface LangSwitcherProps {
  className?: string;
}

const langList: ILangList[] = [
  {
    lang: 'ru',
    text: 'Русский',
  },
  {
    lang: 'en',
    text: 'English',
  },
  {
    lang: 'ua',
    text: 'Українська',
  },
];

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const toggleLangList = () => {
    setIsOpen(!isOpen);
  };

  const switchLang = (lang: string) => {
    i18next.changeLanguage(lang);
    toggleLangList();
  };

  const currentLangText = langList.find(
    (item) => item.lang === i18n.language,
  ).text;

  return (
    <div className={classNames(styles.langSwitcher, {}, [className])}>
      <button type="submit" className={styles.langNav} onClick={toggleLangList}>
        <span className={styles.langText}>{currentLangText}</span>
        <Arrow
          className={classNames(styles.arrow, {
            [styles.arrow_rotate]: isOpen,
          })}
        />
      </button>

      <div
        className={classNames(styles.langList, {
          [styles.langList_open]: isOpen,
        })}
      >
        {langList.map((item) => (
          <button
            type="button"
            key={item.lang}
            className={styles.langItem}
            onClick={() => switchLang(item.lang)}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};
