import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import db from '../../db/db.json';
import { messageActionCreator } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { UserContext } from '../context/UserContext';
import Sidebar from '../Sidebar/Sidebar';

type User = {
  id: number;
  name: string;
  image: string;
  read: boolean;
}

type Message = {
  id: number;
  chatId: number;
  receiver: boolean;
  text: string;
  time: string;
}

// interface IDb {
//   users: Users[];
//   messages: Messages[];
// }


const Chat: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  // const [messages, setMessages] = useState<Message[]>([]);


  const messages = useAppSelector(state => state.message.messages);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!localStorage.users || !localStorage.messages.length) {
      setUsers(db.users);
      // setMessages(state.messages);
      localStorage.users = JSON.stringify(db.users);
      localStorage.messages = JSON.stringify(messages);

    } else {
      const user = JSON.parse(localStorage.users);
      // const message = JSON.parse(localStorage.messages);
      setUsers(user)
      // setMessages(message)
      dispatch(messageActionCreator.setMessages(JSON.parse(localStorage.messages)))
    }

  }, [])

  useEffect(() => {
    localStorage.messages = JSON.stringify(messages)
    console.log(messages);
    
  }, [messages])

  const appendMessage = (message: Message) => {
    dispatch(messageActionCreator.setMessage(message))
  }

  return (
    <UserContext.Provider value={{ users, messages, appendMessage }}>
      <Sidebar />
      <Outlet />
    </UserContext.Provider>
  );
};

export default Chat;