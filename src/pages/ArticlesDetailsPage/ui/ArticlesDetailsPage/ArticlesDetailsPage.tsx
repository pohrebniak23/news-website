import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div className={styles.ariclesDetailsPage}>
      {t('Articles details page')}
    </div>
  );
};

export default memo(ArticlesDetailsPage);
