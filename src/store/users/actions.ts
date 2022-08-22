import { createSlice } from '@reduxjs/toolkit';
import db from '../../db/db.json';

export interface IUser {
  id: number;
  name: string;
  photoURL: string;
  online: boolean;
}

interface IUserState {
  users: IUser[]
}

type SetUserAction = {
  payload: IUser[];
  type: string;
}

const initialState: IUserState = {
  users: db.users
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: SetUserAction) {
      state.users = action.payload;
    },
    sortUsers(state, action) {
      const index = state.users.findIndex(user => user.id === +action.payload)
      state.users.unshift(state.users[index])
      state.users.splice(index + 1, 1)
    }
  }
})

export const { setUsers, sortUsers} = userSlice.actions;
export default userSlice.reducer;