import { ArticleDetails } from 'entities/Article';
import { fetchCommentByArticleId } from 'features/ArticleDetailsComments/model/services/fetchCommentsByArticleId';
import { AddNewCommentReducer } from 'features/ArticleDetailsComments/model/slices/addNewCommentSlice';
import { ArticleDetailsCommentsReducer } from 'features/ArticleDetailsComments/model/slices/articleDetailsCommentsSlice';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetailsComments } from '../../../../features/ArticleDetailsComments/ui/ArticleDetailsComments';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from '../../../../shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import styles from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useDynamicReducerLoader({
    articleDetailsComments: ArticleDetailsCommentsReducer,
    addNewComment: AddNewCommentReducer,
  });

  useEffect(() => {
    dispatch(fetchCommentByArticleId(id));
  }, [id, dispatch]);

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

      <div className={styles.comments}>
        <ArticleDetailsComments />
      </div>
    </div>
  );
};

export default memo(ArticlesDetailsPage);
