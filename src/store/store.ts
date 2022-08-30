import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import profileSlice from "./profileSlice";
import searchQuerySlice from './searchQuerySlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    searchQuery: searchQuerySlice,
    profile: profileSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
