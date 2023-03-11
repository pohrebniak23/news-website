import classNames from 'classnames';
import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text';
import { CommentType } from '../../model/types/comment';
import styles from './CommentItem.module.scss';
import { RoutePath } from '../../../../shared/config/routes/routes';

interface CommentItemProps {
  className?: string;
  comment: CommentType;
}

export const CommentItem = memo(({ className, comment }: CommentItemProps) => {
  return (
    <div className={classNames(className, styles.commentItem)}>
      <div className={styles.commentHeader}>
        {comment.user.avatar && (
          <AppLink
            className={styles.avatar}
            to={`${RoutePath.profile}${comment.user.id}`}
          >
            <Avatar
              widthSize="30px"
              heightSize="30px"
              radius="50%"
              src={comment.user.avatar}
            />
          </AppLink>
        )}
        <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
          <Text size="medium">{comment.user.username}</Text>
        </AppLink>
      </div>

      <Text>{comment.text}</Text>
    </div>
  );
});
