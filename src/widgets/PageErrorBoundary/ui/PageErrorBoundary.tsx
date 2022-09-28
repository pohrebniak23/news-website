import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './PageErrorBoundary.module.scss';

export const PageErrorBoundary = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.pageErrorBoundary)}>
      <h1 className={styles.title}>{t('Error, somtething went wrong')}</h1>
      <button type="button" onClick={reloadPage} className={styles.button}>
        {t('Reload page')}
      </button>
    </div>
  );
};
