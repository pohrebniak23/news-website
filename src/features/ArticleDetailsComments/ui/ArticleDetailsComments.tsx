import classNames from 'classnames';
import { AddNewComment, CommentList } from 'entities/Comment';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
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

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsLoading);
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
      <AddNewComment
        commentText={commentText}
        onCommentChange={onCommentChange}
        onSendComment={onSendComment}
      />
      <CommentList
        className={styles.list}
        isLoading={isLoading}
        comments={comments}
      />
    </div>
  );
};
