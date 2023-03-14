import {
  EditableProfileCard,
  profileReducer,
} from 'features/EditableProfileCard';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  useDynamicReducerLoader({ profile: profileReducer });

  return (
    <PageWrapper>
      <div className={styles.profilePage}>
        <EditableProfileCard />
      </div>
    </PageWrapper>
  );
};

export default ProfilePage;
