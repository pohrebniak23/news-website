import { ArticleDetails } from 'entities/Article';
import { ArticleDetailsComments } from 'features/ArticleDetailsComments';
import { ArticlePageRecomendations } from 'features/ArticlePageRecomendations';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams();

  if (!id) {
    return (
      <PageWrapper>
        <div className={styles.ariclesDetailsPage}>
          <Text>{t('Article is not found')}</Text>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className={styles.ariclesDetailsPage}>
        <ArticleDetails id={id} />

        <ArticlePageRecomendations />

        <ArticleDetailsComments className={styles.comments} id={id} />
      </div>
    </PageWrapper>
  );
};

export default memo(ArticlesDetailsPage);
