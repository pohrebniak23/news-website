import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../types/ProfileSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const { username, firstname, lastname, age } = profile;
  const errors: ValidateProfileErrors[] = [];

  if (!username || username.length < 2 || !username?.length) {
    errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
  }

  if (!firstname || firstname.length < 2) {
    errors.push(ValidateProfileErrors.INCORRECT_FIRSTNAME);
  }

  if (!lastname || lastname.length < 2) {
    errors.push(ValidateProfileErrors.INCORRECT_LASTNAME);
  }

  if (!age || age === 0) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  return errors;
};
