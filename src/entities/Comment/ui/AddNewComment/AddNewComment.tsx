import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text';
import styles from './AddNewComment.module.scss';

interface AddNewCommentProps {
  className?: string;
  commentText: string;
  onCommentChange: (value: string) => void;
  isLoading: boolean;
  onSendComment: () => void;
}

export const AddNewComment = ({
  className,
  commentText,
  onCommentChange,
  isLoading,
  onSendComment,
}: AddNewCommentProps) => {
  const { t } = useTranslation('comment');

  if (isLoading) {
    return (
      <div className={classNames(className, styles.commentList)}>
        <Skeleton width="100%" height="20px" borderRadius="5px" />

        <div className={styles.header}>
          <Skeleton
            className={styles.avatar}
            width="85%"
            height="70px"
            borderRadius="5px"
          />
          <Skeleton width="13%" height="40px" borderRadius="5px" />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.addNewComment)}>
      <Text className={styles.title}>{t('Add new comment')}</Text>

      <div className={styles.block}>
        <Input value={commentText} onChange={onCommentChange} />

        <Button className={styles.btn} onClick={onSendComment}>
          {t('Add')}
        </Button>
      </div>
    </div>
  );
};
