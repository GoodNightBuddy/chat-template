import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  email: string | null;
  id: string | null;
  photoURL: string | null;
  displayName: string | null;
}

const initialState: IAuthState = {
  email: null,
  id: null,
  photoURL: null,
  displayName: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.photoURL = action.payload.photoURL ?? null;
      state.displayName = action.payload.displayName ?? null;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.photoURL = null;
      state.displayName = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;