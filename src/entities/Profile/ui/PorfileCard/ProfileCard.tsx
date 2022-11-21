import classNames from 'classnames';
import { fetchProfileData } from 'entities/Profile/models/services/fetchProfileData/fetchProfileData';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from '../../models/selectors/getProfileData/getProfileData';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.profilecard, className)}>
      {t('ProfileCard')}
      <Text>{profileData?.first}</Text>
    </div>
  );
};
