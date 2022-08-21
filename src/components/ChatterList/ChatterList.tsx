import { IMessage } from '../../store/messages/actions';
import { IUser } from '../../store/users/actions';
import Chatter from '../Chatter/Chatter';
import './ChatterList.scss'

type ChatterListProps = {
  users: IUser[];
  messages: IMessage[];
}

const ChatterList = ({users, messages}: ChatterListProps) => {
  return (
    <div className="chattersList">
      <h1 className="chattersList__title">Chats</h1>
      {users.map((user, id) => {
        const userMessages = messages.filter(m => m.chatId === user.id)
        return <Chatter key={id} user={user} messages={userMessages}/>
      })}
    </div>
  );
};

export default ChatterList;