import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ProfileState {
  avatar: string,
}

const initialState: ProfileState = {
  avatar: '../assets/user_icon.png',
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

export const getProfileAvatar = (state: RootState) => state.profile.avatar;

export default profileSlice.reducer;
