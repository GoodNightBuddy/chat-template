import React, { useEffect, useState } from 'react';
import UserIcon from "../UI/UserIcon/UserIcon";
import { Link } from "react-router-dom";
import RoutePath from '../../enums/routes';

const Chatter = ({ user, messages }) => {
  const timeOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }
  const [lastMessage, setLastMessage] = useState("no message yet..");
  const [lastMessageTime, setLastMessageTime] = useState("");

  useEffect(() => {
    const sortMessages = [...messages]
    sortMessages.sort((a, b) => new Date(b.time) - new Date(a.time))

    if (sortMessages.length) {
      setLastMessage(sortMessages[0].text);
      const date = new Date(sortMessages[0].time)
      setLastMessageTime(date.toLocaleString("en-US", timeOptions));
    }
    // eslint-disable-next-line
  }, [messages])


  return (
    <Link to={RoutePath.CHATS + user.id} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="chatter">
        <div className="chatter__info">
          <UserIcon
            imgUrl={user.image}
            read={user.read}
          />
          <div className="chatter__detail">
            <div className="chatter__detail-header">
              <p className="detail__name">{user.name}</p>
              <p className="chatter__time">
                {lastMessageTime}
              </p>
            </div>

            <div className="detail__message">{lastMessage}</div>

          </div>


        </div>


      </div>
    </Link>

  );
};

export default Chatter;