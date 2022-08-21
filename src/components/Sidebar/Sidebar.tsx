import { deleteUser, getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAppSelector } from '../../store/store';
import ChatterList from '../ChatterList/ChatterList';
import Search from '../UI/Search/Search';
import UserIcon from '../UI/UserIcon/UserIcon';
import "./Sidebar.scss"

const Sidebar = () => {
  const [search, setSearch] = useState('');
  const [users, messages] = useAppSelector(state => [state.user.users, state.message.messages]);

  const searchedUsers = (users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())))

  const signOuntHandler = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      console.log('Oops, something went wrong -  nu such user');
      return
    }
    deleteUser(user)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
    signOut(auth);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <span className='for-dropdown'>
          <UserIcon
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-_eFTxpPLfn16swgOup3z7QLLblNK_mq2Q&usqp=CAU"
          />
          <ul className="dropdown">
            <li><i className="fa-solid fa-paw"></i>Profile</li>
            <li><i className="fa-solid fa-gear"></i>Settings</li>
            <li onClick={signOuntHandler}><i className="fa-solid fa-right-from-bracket"></i>Sign out</li>
          </ul>
        </span>

        <Search value={search} setValue={setSearch} />
      </div>

      <ChatterList users={searchedUsers} messages={messages} />
    </aside >
  );
};

export default Sidebar;