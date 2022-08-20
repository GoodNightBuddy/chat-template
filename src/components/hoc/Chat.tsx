import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { messageActionCreator, userActionCreator } from '../../store/actionStore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Sidebar from '../Sidebar/Sidebar';

const Chat: React.FC = () => {

  const messages = useAppSelector(state => state.message.messages);
  const users = useAppSelector(state => state.user.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.users || !localStorage.messages.length) {
      localStorage.users = JSON.stringify(users);
      localStorage.messages = JSON.stringify(messages);
    } else {
      dispatch(userActionCreator.setUsers(JSON.parse(localStorage.users)));
      dispatch(messageActionCreator.setMessages(JSON.parse(localStorage.messages)));
    }

  }, [])

  useEffect(() => {
    localStorage.messages = JSON.stringify(messages)
    // localStorage.users = JSON.stringify(users)
    console.log(messages);
    
  }, [messages])

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Chat;