import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SearchQueryState {
  searchQuery: string,
}

const initialState: SearchQueryState = {
  searchQuery: '',
};

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery =  action.payload;
    },
  }
});

export const { setSearchQuery } = searchQuerySlice.actions;

export const getSearchQuery = (state: RootState) => state.searchQuery.searchQuery;

export default searchQuerySlice.reducer;
