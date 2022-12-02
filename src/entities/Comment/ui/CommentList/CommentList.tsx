import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { CommentType } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments: CommentType[];
  isLoading: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('');

    if (isLoading) {
      return (
        <div className={classNames(className, styles.commentList)}>
          <div className={styles.header}>
            <Skeleton
              className={styles.avatar}
              width="40px"
              height="40px"
              borderRadius="50%"
            />
            <Skeleton width="120px" height="20px" borderRadius="5px" />
          </div>

          <Skeleton width="100%" height="60px" borderRadius="5px" />
        </div>
      );
    }

    return (
      <div className={classNames(className, styles.commentList)}>
        {comments ? (
          comments.map((commentData) => <CommentItem comment={commentData} />)
        ) : (
          <Text>{t('Comments not found')}</Text>
        )}
      </div>
    );
  },
);
