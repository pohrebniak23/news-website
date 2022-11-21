import { profileReducer } from 'entities/Profile';
import { ProfileCard } from 'entities/Profile/ui/PorfileCard/ProfileCard';
import { useTranslation } from 'react-i18next';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { t } = useTranslation();

  useDynamicReducerLoader({ profile: profileReducer });

  return (
    <div className={styles.ProfilePage}>
      {t('ProfilePage')}
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
