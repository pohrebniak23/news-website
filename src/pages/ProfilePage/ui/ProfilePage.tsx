import { EditableProfileCard } from 'features/EditableProfileCard';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  return (
    <PageWrapper>
      <div className={styles.profilePage}>
        <EditableProfileCard />
      </div>
    </PageWrapper>
  );
};

export default ProfilePage;
