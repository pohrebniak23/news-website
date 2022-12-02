import classNames from 'classnames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { CommentType } from '../../model/types/comment';
import styles from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment: CommentType;
}

export const CommentItem = memo(({ className, comment }: CommentItemProps) => {
  return (
    <div className={classNames(className, styles.commentItem)}>
      <div className={styles.commentHeader}>
        {comment.user.avatar && (
          <Avatar
            widthSize="30px"
            heightSize="30px"
            radius="50%"
            className={styles.avatar}
            src={comment.user.avatar}
          />
        )}
        <Text size="medium">{comment.user.username}</Text>
      </div>

      <Text>{comment.text}</Text>
    </div>
  );
});
