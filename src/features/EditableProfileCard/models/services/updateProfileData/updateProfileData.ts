import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { ThunkConfig } from '../../../../../app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileErrors } from '../../types/ProfileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  const formData = getProfileForm(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData,
    );

    if (!response.data) {
      rejectWithValue([ValidateProfileErrors.NO_DATA]);
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
