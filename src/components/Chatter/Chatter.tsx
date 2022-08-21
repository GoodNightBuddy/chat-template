import { useEffect, useState } from 'react';
import UserIcon from "../UI/UserIcon/UserIcon";
import { Link } from "react-router-dom";
import RoutePath from '../../enums/routes';
import { IUser } from '../../store/users/actions';
import { IMessage } from '../../store/messages/actions';
import { DateTimeFormatOptions } from '../Message/Message';

type ChatterProps = {
  user: IUser;
  messages: IMessage[];
}


const Chatter = ({ user, messages }: ChatterProps) => {
  const timeOptions: DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }
  const [lastMessage, setLastMessage] = useState("no messages yet...");
  const [lastMessageTime, setLastMessageTime] = useState("");

  useEffect(() => {
    const sortMessages = [...messages]
    sortMessages.sort((a, b) => new Date(a.time) > new Date(b.time) ? 1 : -1);

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
            imgUrl={user.photoURL}
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