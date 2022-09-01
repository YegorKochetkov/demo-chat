import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import photo from '../assets/user_icon.png';

type ProfileState = {
  avatar: string,
  name: string | null,
  mail: string | null,
};

export type User = {
  displayName: string | null,
  email: string | null,
  photoURL: string | null,
}

let initialState: ProfileState = {
  avatar: photo,
  name: null,
  mail: null,
};

const history = localStorage.getItem('profile');

if (history !== null) {
  initialState = JSON.parse(history);
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User>) => {
      state.name =  action.payload.displayName || action.payload?.email;
      state.mail =  action.payload.email;
      state.avatar = action.payload.photoURL || state.avatar;
    },
    setUserLogoOut: (state) => {
      state.name =  null;
      state.mail =  null;
    },
  }
});

export const { setActiveUser, setUserLogoOut } = profileSlice.actions;

export const getProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
