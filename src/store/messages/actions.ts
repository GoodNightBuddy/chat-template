import { createSlice } from '@reduxjs/toolkit';
import db from '../../db/db.json';

export interface IMessage {
  id: any;
  chatId: number;
  receiver: boolean;
  text: string;
  time: string;
}

interface IMessageState {
  messages: IMessage[]
}

const initialState: IMessageState = {
  messages: db.messages
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state, action) {
      state.messages = [...state.messages, action.payload];
      // localStorage.messages = JSON.stringify([...state.messages, action.payload])
    },
    setMessages(state, action) {
      state.messages = action.payload;
    }
  }
})

export const { setMessage, setMessages } = messageSlice.actions;

export default messageSlice.reducer;