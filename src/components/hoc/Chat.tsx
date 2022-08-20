import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { messageActionCreator, userActionCreator } from '../../store/actionStore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Sidebar from '../Sidebar/Sidebar';

const Chat: React.FC = () => {

  const [users, messages] = useAppSelector(state => [state.user.users, state.message.messages]);
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


  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Chat;