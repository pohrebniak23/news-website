import { Profile } from './Profile';

export enum ValidateProfileErrors {
  NO_DATA = 'NO_DATA',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
  INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
  INCORRECT_AGE = 'INCORRECT_AGE',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
  isLoading: boolean;
  readonly: boolean;
  error: string | undefined;
  data: Profile | undefined;
  form: Profile | undefined;
  validateErrors?: ValidateProfileErrors[];
}
