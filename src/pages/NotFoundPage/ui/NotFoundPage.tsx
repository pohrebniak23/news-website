import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.notfoundpage)}>{t('Page not found')}</div>
  );
};
