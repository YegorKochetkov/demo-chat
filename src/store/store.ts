import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import profileSlice from "./profileSlice";
import searchQuerySlice from './searchQuerySlice';
import selectedContactSlice from "./selectedContact";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    searchQuery: searchQuerySlice,
    profile: profileSlice,
    selectedContact: selectedContactSlice,
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
