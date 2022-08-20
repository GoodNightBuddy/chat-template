import { createSlice } from '@reduxjs/toolkit';
import db from '../../db/db.json';

export interface IUser {
  id: number;
  name: string;
  photoURL: string;
  read: boolean;
}

interface IUserState {
  users: IUser[]
}

const initialState: IUserState = {
  users: db.users
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    }
  }
})

export const { setUsers} = userSlice.actions;
export default userSlice.reducer;