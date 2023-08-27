import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => (state = action.payload),
  },
});

const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;

export default filterReducer;
