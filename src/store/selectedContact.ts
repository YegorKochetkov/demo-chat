import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface selectedContactState {
  selectedContact: number | null,
}

const initialState: selectedContactState = {
  selectedContact: null,
};

const historyState = localStorage.getItem('selectedContact');

if (historyState !== null) {
  initialState.selectedContact = JSON.parse(historyState);
}

export const selectedContactSlice = createSlice({
  name: 'selectedContact',
  initialState,
  reducers: {
    setSelectedContact: (state, action: PayloadAction<number | null>) => {
      state.selectedContact = action.payload;
    },
  }
});

export const { setSelectedContact } = selectedContactSlice.actions;

export const getSelectedContact = (state: RootState) => state.selectedContact.selectedContact;

export default selectedContactSlice.reducer;
