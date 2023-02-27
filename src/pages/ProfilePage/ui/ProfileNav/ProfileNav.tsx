import classNames from 'classnames';
import { getUserAuthData } from 'entities/User';
import {
  getProfileData,
  getProfileForm,
  profileActions,
  updateProfileData,
} from 'features/EditableProfileCard';
import { getProfileReadonly } from 'features/EditableProfileCard/models/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfileNav.module.scss';

interface ProfileNavProps {
  className?: string;
}

export const ProfileNav = ({ className }: ProfileNavProps) => {
  const { t } = useTranslation(['translation', 'profile']);
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);
  const userData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const profileForm = useSelector(getProfileForm);

  const isEditable = userData?.id === profileData?.id;

  const onEditPorfile = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEditing());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (profileData !== profileForm) {
      dispatch(updateProfileData());
    } else {
      dispatch(profileActions.setReadonly(true));
    }
  }, [dispatch, profileData, profileForm]);

  return (
    <div className={classNames(styles.profilenav, className)}>
      <Text className={styles.profileText}>{t('Profile')}</Text>

      {isEditable && (
        <div className={styles.editableWrapper}>
          {readonly ? (
            <Button size="small" onClick={onEditPorfile}>
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
      )}
    </div>
  );
};
