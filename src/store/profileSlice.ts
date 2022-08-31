import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import photo from '../assets/user_icon.png';

interface ProfileState {
  avatar: string,
  name: string,
}

const initialState: ProfileState = {
  avatar: photo,
  name: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileAvatar: (state, action: PayloadAction<string>) => {
      state.avatar =  action.payload;
    },
  }
});

export const { setProfileAvatar } = profileSlice.actions;

export const getProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
