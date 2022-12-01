import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styles from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams();

  if (!id) {
    return (
      <div className={styles.ariclesDetailsPage}>
        {t('Article is not found')}
      </div>
    );
  }

  return (
    <div className={styles.ariclesDetailsPage}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticlesDetailsPage);
