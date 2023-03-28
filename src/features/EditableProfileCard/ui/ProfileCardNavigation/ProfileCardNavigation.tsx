import classNames from 'classnames';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/Text';
import { getProfileData } from '../../models/selectors/getProfileData/getProfileData';
import { getProfileForm } from '../../models/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../models/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../models/services/updateProfileData/updateProfileData';
import { profileActions } from '../../models/slices/profileSlice';
import styles from './ProfileCardNavigation.module.scss';

interface ProfileCardNavigationProps {
  className?: string;
}

export const ProfileCardNavigation = ({
  className,
}: ProfileCardNavigationProps) => {
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
    <HStack
      justify="between"
      className={classNames(styles.ProfileCardNavigation, className)}
    >
      <Text className={styles.profileText}>{t('Profile')}</Text>

      {isEditable && (
        <div className={styles.editableWrapper}>
          {readonly ? (
            <Button size="s" onClick={onEditPorfile}>
              {t('Edit')}
            </Button>
          ) : (
            <div className={styles.buttonsList}>
              <Button size="s" onClick={onSave}>
                {t('Save')}
              </Button>

              <Button size="s" onClick={onCancel} theme="outline-error">
                {t('Cancel')}
              </Button>
            </div>
          )}
        </div>
      )}
    </HStack>
  );
};
