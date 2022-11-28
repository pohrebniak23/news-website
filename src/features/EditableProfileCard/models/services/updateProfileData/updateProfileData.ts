import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/Profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  const formData = getProfileForm(getState());

  try {
    const response = await extra.api.put<Profile>('/profile', formData);

    return response.data;
  } catch (e) {
    return rejectWithValue('Error');
  }
});
