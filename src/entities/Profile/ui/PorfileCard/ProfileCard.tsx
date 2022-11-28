import classNames from 'classnames';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'features/EditableProfileCard';
import { fetchProfileData } from 'features/EditableProfileCard/models/services/fetchProfileData/fetchProfileData';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstName,
  onChangeLastName,
  onChangeUsername,
  onChangeAge,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  if (error) {
    return <div className={classNames(styles.error, className)}>{error}</div>;
  }

  if (!data || isLoading) {
    return (
      <div className={classNames(styles.loading, className)}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classNames(styles.profilecard, className)}>
      <div className={styles.profileAvatar}>
        {data.avatar && (
          <Avatar
            className={styles.avatar}
            src={data.avatar}
            widthSize="280px"
            heightSize="280px"
            alt="Avatar"
          />
        )}
      </div>

      <div className={styles.fields}>
        <div className={styles.item}>
          <Text className={styles.label}>{t('Name')}</Text>
          {readonly ? (
            <Text className={styles.text}>{data?.firstname}</Text>
          ) : (
            <Input
              className={styles.input}
              value={data?.firstname}
              onChange={onChangeFirstName}
              theme="edit-data"
            />
          )}
        </div>

        <div className={styles.item}>
          <Text className={styles.label}>{t('Lastname')}</Text>
          {readonly ? (
            <Text className={styles.text}>{data?.lastname}</Text>
          ) : (
            <Input
              className={styles.input}
              value={data?.lastname}
              onChange={onChangeLastName}
              theme="edit-data"
            />
          )}
        </div>

        <div className={styles.item}>
          <Text className={styles.label}>{t('Username')}</Text>
          {readonly ? (
            <Text className={styles.text}>{data?.username}</Text>
          ) : (
            <Input
              className={styles.input}
              value={data?.username}
              onChange={onChangeUsername}
              theme="edit-data"
            />
          )}
        </div>

        <div className={styles.item}>
          <Text className={styles.label}>{t('Age')}</Text>
          {readonly ? (
            <Text className={styles.text}>{data?.age}</Text>
          ) : (
            <Input
              className={styles.input}
              value={data?.age}
              onChange={onChangeAge}
              theme="edit-data"
            />
          )}
        </div>

        <div className={styles.item}>
          <Text className={styles.label}>{t('Avatar link')}</Text>
          {readonly ? (
            <Text className={styles.avatarLink}>{data?.avatar}</Text>
          ) : (
            <Input
              className={styles.input}
              value={data?.avatar}
              onChange={onChangeAvatar}
              theme="edit-data"
            />
          )}
        </div>

        <div className={styles.item}>
          <Text className={styles.label}>{t('Currency')}</Text>
          {readonly ? (
            <Text className={styles.text}>{data?.currency}</Text>
          ) : (
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
            />
          )}
        </div>

        <div className={styles.item}>
          <Text className={styles.label}>{t('Country')}</Text>
          {readonly ? (
            <Text className={styles.text}>{data?.country}</Text>
          ) : (
            <CountrySelect value={data?.country} onChange={onChangeCountry} />
          )}
        </div>
      </div>
    </div>
  );
};
