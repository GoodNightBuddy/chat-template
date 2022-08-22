import "./ChatBody.scss"
import UserIcon from "../UI/UserIcon/UserIcon";
import { useParams } from "react-router-dom";
import Message from "../Message/Message";
import MessageInput from "../UI/MessageInput/MessageInput";
import { useAppSelector } from '../../store/store';

const ChatBody = () => {

  const [users, messages] = useAppSelector(state => [state.user.users, state.message.messages]);
  const { id } = useParams();

  const user = id ? users.find(user => user.id === +id) : null;
  const curMessages = id ? messages.filter(m => m.chatId === +id) : [];
  curMessages.sort((a, b) => new Date(a.time) > new Date(b.time) ? 1 : -1);


  if(!user) {
    return (
      <div>Oops, somthing went wrong, no such user</div> 
    )
  }

  return (
    <div className="chat__body">
      <div className="chat__header">
        <UserIcon imgUrl={user.photoURL} online={user.online} />
        <h1 className="chat__username">{user.name}</h1>
      </div>

      <div className="chat__messagelist">
        {curMessages.map((e, i) => <Message message={e} userImage={user.photoURL} key={i} />)}
      </div>

      <div className="chat__input">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatBody;