import classNames from 'classnames';
import { profileActions } from 'features/EditableProfileCard';
import { getProfileReadonly } from 'features/EditableProfileCard/models/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfileNav.module.scss';
import { updateProfileData } from '../../../../features/EditableProfileCard/models/services/updateProfileData/updateProfileData';

interface ProfileNavProps {
  className?: string;
}

export const ProfileNav = ({ className }: ProfileNavProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEditing());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.profilenav, className)}>
      <Text className={styles.profileText}>{t('Profile')}</Text>

      {readonly ? (
        <Button size="small" onClick={onEdit}>
          {t('Edit')}
        </Button>
      ) : (
        <div className={styles.buttonsList}>
          <Button size="small" onClick={onSave}>
            {t('Save')}
          </Button>

          <Button size="small" onClick={onCancel} theme="outline-error">
            {t('Cancel')}
          </Button>
        </div>
      )}
    </div>
  );
};
