import classNames from 'classnames';
import { AddNewComment, CommentList } from 'entities/Comment';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleDetailsCommentsLoading } from '../model/selectors/getArticleDetailsCommentsLoading';
import { getNewCommentText } from '../model/selectors/getNewCommentText';
import { addNewCommentForArticle } from '../model/services/addNewCommentForArticle';
import { AddNewCommentActions } from '../model/slices/addNewCommentSlice';
import { getArticleDetailsComments } from '../model/slices/articleDetailsCommentsSlice';
import styles from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  className?: string;
}

export const ArticleDetailsComments = ({
  className,
}: ArticleDetailsCommentsProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles');

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsLoading);
  // const isLoading = true;
  const commentText = useSelector(getNewCommentText);

  const onCommentChange = useCallback(
    (value: string) => {
      dispatch(AddNewCommentActions.setText(value));
    },
    [dispatch],
  );

  const onSendComment = useCallback(() => {
    dispatch(addNewCommentForArticle(commentText));
  }, [dispatch, commentText]);

  return (
    <div className={classNames(className, styles.articleDetailsComments)}>
      <Text className={styles.commentsTitle} size="medium">
        {t('Comments')}
      </Text>

      <AddNewComment
        commentText={commentText}
        onCommentChange={onCommentChange}
        onSendComment={onSendComment}
        isLoading={isLoading}
      />
      <CommentList
        className={styles.list}
        isLoading={isLoading}
        comments={comments}
      />
    </div>
  );
};
