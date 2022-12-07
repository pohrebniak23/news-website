import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import styles from './AddNewComment.module.scss';

interface AddNewCommentProps {
  className?: string;
  commentText: string;
  onCommentChange: (value: string) => void;
  onSendComment: () => void;
}

export const AddNewComment = ({
  className,
  commentText,
  onCommentChange,
  onSendComment,
}: AddNewCommentProps) => {
  const { t } = useTranslation('comment');

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
