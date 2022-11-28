import { Profile } from './Profile';

export interface ProfileSchema {
  isLoading: boolean;
  readonly: boolean;
  error: string | undefined;
  data: Profile | undefined;
  form: Profile | undefined;
}
