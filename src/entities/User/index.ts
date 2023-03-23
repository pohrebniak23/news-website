import { getUserAuthData } from './models/selectors/getUserAuthData';
import { getUserInited } from './models/selectors/getUserInited';
import {
  getUserRole,
  isUserAdmin,
  isUserManager,
} from './models/selectors/getUserRole';
import { UserActions, UserReducer } from './models/slices/UserSlice';
import { User, UserRole } from './models/types/User';
import { UserSchema } from './models/types/UserSchema';

export {
  UserActions,
  UserReducer,
  UserRole,
  getUserAuthData,
  getUserInited,
  getUserRole,
  isUserAdmin,
  isUserManager,
};

export type { UserSchema, User };
