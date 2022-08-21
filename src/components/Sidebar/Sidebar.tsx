import { deleteUser, getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAppSelector } from '../../store/store';
import ChatterList from '../ChatterList/ChatterList';
import Search from '../UI/Search/Search';
import UserIcon from '../UI/UserIcon/UserIcon';
import "./Sidebar.scss"

const Sidebar = () => {

  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-_eFTxpPLfn16swgOup3z7QLLblNK_mq2Q&usqp=CAU"
  const [search, setSearch] = useState('');
  const [users, messages] = useAppSelector(state => [state.user.users, state.message.messages]);

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return (
      <div>Oops, something went wrong, no such user</div>
    )
  }

  const searchedUsers = (users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())))

  const signOuntHandler = () => {
    signOut(auth)
  };

  const deleteHandler = () => {
    deleteUser(user)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className='user-info'>
          <div className='for-dropdown'>
            <UserIcon
              imgUrl={user.photoURL || defaultImage}
            />
            <ul className="dropdown">
              <li onClick={signOuntHandler}><i className="fa-solid fa-right-from-bracket"></i>Sign out</li>
              <li onClick={deleteHandler}><i className="fa-solid fa-right-from-bracket"></i>Delete account</li>
            </ul>
          </div>
          <div className='user-info__user-name'>{user?.displayName || user?.email}</div>
        </div>

        <Search value={search} setValue={setSearch} />
      </div>

      <ChatterList users={searchedUsers} messages={messages} />
    </aside >
  );
};

export default Sidebar;