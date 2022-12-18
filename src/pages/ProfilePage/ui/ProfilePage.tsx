import { fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { ProfileNav } from './ProfileNav/ProfileNav';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useDynamicReducerLoader({ profile: profileReducer });

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <PageWrapper>
      <div className={styles.profilePage}>
        <ProfileNav />
        <EditableProfileCard />
      </div>
    </PageWrapper>
  );
};

export default ProfilePage;
