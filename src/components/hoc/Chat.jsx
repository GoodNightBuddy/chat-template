import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import db from '../../db.json'
import { UserContext } from '../context/UserContext';
import Sidebar from '../Sidebar/Sidebar';

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!localStorage.users || !localStorage.messages.length) {
      setUsers(db.users);
      setMessages(db.messages);
      localStorage.users = JSON.stringify(db.users);
      localStorage.messages = JSON.stringify(db.messages);
  console.log(db.messages);

    } else {
      const user = JSON.parse(localStorage.users);
      const message = JSON.parse(localStorage.messages);
      setUsers(user)
      setMessages(message)

    }

  }, [])

  // useEffect(() => {
  //   localStorage.messages = JSON.stringify(messages)
  // }, [messages])

  const appendMessage = (message) => {
    setMessages(mes => [...mes, message])
  }

  return (
    <UserContext.Provider value={{ users, messages, appendMessage }}>
      <Sidebar />
      <Outlet />
    </UserContext.Provider>
  );
};

export default Chat;