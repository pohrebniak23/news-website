import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { fetchCommentByArticleId } from 'features/ArticleDetailsComments/model/services/fetchCommentsByArticleId';
import { ArticleDetailsCommentsReducer } from 'features/ArticleDetailsComments/model/slices/articleDetailsCommentsSlice';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { getArticleDetailsCommentsLoading } from '../../../../features/ArticleDetailsComments/model/selectors/getArticleDetailsCommentsLoading';
import { getArticleDetailsComments } from '../../../../features/ArticleDetailsComments/model/slices/articleDetailsCommentsSlice';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from '../../../../shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import styles from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsLoading);

  useDynamicReducerLoader({
    articleDetailsComments: ArticleDetailsCommentsReducer,
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
        <Text className={styles.commentsTitle} size="medium">
          {t('Comments')}
        </Text>
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </div>
  );
};

export default memo(ArticlesDetailsPage);
