import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../types/User';

export const getUserRole = (state: StateSchema) =>
  state.user.authData?.role || UserRole.USER;

export const isUserAdmin = createSelector(
  getUserRole,
  (role) => role === UserRole.ADMIN,
);

export const isUserManager = createSelector(
  getUserRole,
  (role) => role === UserRole.MANAGER,
);
