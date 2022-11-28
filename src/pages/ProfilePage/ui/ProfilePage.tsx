import { profileReducer } from 'features/EditableProfileCard';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { ProfileNav } from './ProfileNav/ProfileNav';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  useDynamicReducerLoader({ profile: profileReducer });

  return (
    <div className={styles.profilePage}>
      <ProfileNav />
      <EditableProfileCard />
    </div>
  );
};

export default ProfilePage;
