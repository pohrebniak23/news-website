import { skipToken } from '@reduxjs/toolkit/dist/query';
import classNames from 'classnames';
import { getArticleId } from 'entities/Article/model/selectors/articleDetailsSelector';
import { AddNewComment, CommentList } from 'entities/Comment';
import { getUserId } from 'entities/User/models/selectors/getUserAuthData';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import {
  useAddNewComment,
  useGetArticleComments,
} from '../api/articleDetailsCommentsApi';
import styles from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  className?: string;
}

export const ArticleDetailsComments = ({
  className,
}: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('articles');

  const userId = useSelector(getUserId);
  const articleId = useSelector(getArticleId);
  const [commentText, setCommentText] = useState<string>('');
  const [addNewComment] = useAddNewComment();
  const {
    data: articleComments,
    isLoading,
    refetch,
  } = useGetArticleComments(articleId || skipToken);
  // useDynamicReducerLoader(
  //   {
  //     articleDetailsComments: ArticleDetailsCommentsReducer,
  //   },
  //   false,
  // );

  // const comments = useSelector(getArticleDetailsComments.selectAll);
  // const isLoading = useSelector(getArticleDetailsCommentsLoading);

  const onCommentChange = useCallback((value: string) => {
    setCommentText(value);
  }, []);

  const onSendComment = useCallback(() => {
    if (userId && articleId) {
      addNewComment({
        userId,
        articleId,
        text: commentText,
      });
      refetch();
    }
  }, [addNewComment, userId, articleId, commentText, refetch]);

  return (
    <div className={classNames(className, styles.articleDetailsComments)}>
      <Text className={styles.commentsTitle} size="m">
        {t('Comments')}
      </Text>

      <AddNewComment
        commentText={commentText}
        onCommentChange={onCommentChange}
        onSendComment={onSendComment}
        isLoading={isLoading}
      />
      {articleComments && (
        <CommentList
          className={styles.list}
          isLoading={isLoading}
          comments={articleComments}
        />
      )}
    </div>
  );
};
