import classNames from 'classnames';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile/ui/PorfileCard/ProfileCard';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileError } from '../models/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../models/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../models/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../models/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../models/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../models/slices/profileSlice';
import styles from './EditableProfileCard.module.scss';
import { ProfileCardNavigation } from './ProfileCardNavigation/ProfileCardNavigation';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = ({
  className,
}: EditableProfileCardProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useDynamicReducerLoader({ profile: profileReducer });

  const profileForm = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value?.replace(/\D/g, '')) || 0,
        }),
      );
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  return (
    <div className={classNames(styles.profileData, className)}>
      <ProfileCardNavigation />

      <ProfileCard
        data={profileForm}
        error={error}
        isLoading={isLoading}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeUsername={onChangeUsername}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
};
