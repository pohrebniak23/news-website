import classNames from 'classnames';
import { AgeSelect } from 'entities/Age/ui/AgeSelect/AgeSelect';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';
import { ValidateProfileErrors } from '../../../../features/EditableProfileCard/models/types/ProfileSchema';
import { Profile } from '../../model/types/profile';
import { ProfileValidateError } from '../ProfileValidateError/ProfileValidateError';
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

  if (error) {
    return (
      <div className={classNames(styles.errorScreen, className)}>
        <Text className={styles.errorScreenTitle} theme="error" size="l">
          {t('Something went wrong')}
        </Text>
        <Text theme="error" size="m">
          {t('Sorry we can`t get your profile data right now')}
        </Text>
      </div>
    );
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
            radius="10px"
            alt="Avatar"
          />
        )}
      </div>

      <div className={styles.fields}>
        <ProfileValidateError
          className={styles.validateError}
          error={ValidateProfileErrors.SERVER_ERROR}
          text={t('Server error')}
        />

        <div className={styles.item}>
          <div className={styles.itemRow}>
            <Text className={styles.label}>{t('Name')}:</Text>

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

          <ProfileValidateError
            className={styles.validateError}
            error={ValidateProfileErrors.INCORRECT_FIRSTNAME}
            text={t('Error with firstname')}
          />
        </div>

        <div className={styles.item}>
          <div className={styles.itemRow}>
            <Text className={styles.label}>{t('Lastname')}:</Text>

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

          <ProfileValidateError
            className={styles.validateError}
            error={ValidateProfileErrors.INCORRECT_LASTNAME}
            text={t('Error with lastname')}
          />
        </div>

        <div className={styles.item}>
          <div className={styles.itemRow}>
            <Text className={styles.label}>{t('Username')}:</Text>

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

          <ProfileValidateError
            className={styles.validateError}
            error={ValidateProfileErrors.INCORRECT_USERNAME}
            text={t('Error with username')}
          />
        </div>

        <div className={classNames(styles.item, styles.itemAge)}>
          <div className={styles.itemRow}>
            <Text className={styles.label}>{t('Age')}:</Text>

            {readonly ? (
              <Text className={styles.text}>{data?.age}</Text>
            ) : (
              <AgeSelect
                className={styles.ageSelect}
                value={String(data?.age)}
                onChange={onChangeAge}
              />
            )}
          </div>

          <ProfileValidateError
            className={styles.validateError}
            error={ValidateProfileErrors.INCORRECT_AGE}
            text={t('Error with age')}
          />
        </div>

        <div className={styles.item}>
          <div className={styles.itemRow}>
            <Text className={styles.label}>{t('Avatar link')}:</Text>
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
        </div>

        <div className={classNames(styles.item, styles.itemCurrency)}>
          {data.currency && onChangeCurrency && (
            <div className={styles.itemRow}>
              <Text className={styles.label}>{t('Currency')}:</Text>
              {readonly ? (
                <Text className={styles.text}>{data?.currency}</Text>
              ) : (
                <CurrencySelect
                  value={data.currency}
                  label={data.currency}
                  onChangeCurrency={onChangeCurrency}
                />
              )}
            </div>
          )}
        </div>

        <div className={classNames(styles.item, styles.itemCountry)}>
          {data.country && onChangeCountry && (
            <div className={styles.itemRow}>
              <Text className={styles.label}>{t('Country')}:</Text>
              {readonly ? (
                <Text className={styles.text}>{data?.country}</Text>
              ) : (
                <CountrySelect
                  value={data.country}
                  label={data.country}
                  onChangeCountry={onChangeCountry}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
