import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(editContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const deletedContactIndex = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(deletedContactIndex, 1);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const patchedContactId = state.items.findIndex(
          item => item.id === action.payload.id
        );

        state.isLoading = false;
        state.error = null;
        state.items[patchedContactId] = action.payload;
      });
  },
});

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
