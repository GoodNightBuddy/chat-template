import { deleteUser, getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAppSelector } from '../../store/store';
import ChatterList from '../ChatterList/ChatterList';
import Search from '../UI/Search/Search';
import UserIcon from '../UI/UserIcon/UserIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.scss"



const Sidebar = () => {

  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-_eFTxpPLfn16swgOup3z7QLLblNK_mq2Q&usqp=CAU"
  const [search, setSearch] = useState('');
  const [users, messages] = useAppSelector(state => [state.user.users, state.message.messages]);

  const auth = getAuth();
  const authUser = auth.currentUser;

  if (!authUser) {
    return (
      <div>Oops, something went wrong, no such user</div>
    )
  }

  const searchedUsers = (users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())))

  const signOuntHandler = () => {
    signOut(auth)
  };

  const deleteHandler = () => {
    deleteUser(authUser)
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
              imgUrl={authUser.photoURL || defaultImage}
            />
            <ul className="dropdown">
              <li onClick={signOuntHandler}><FontAwesomeIcon icon={faRightFromBracket} />Sign out</li>
              <li onClick={deleteHandler}><FontAwesomeIcon icon={faTrashCan} />Delete account</li>
              

            </ul>
          </div>
          <div className='user-info__user-name'>{authUser.displayName || authUser.email}</div>
        </div>

        <Search value={search} setValue={setSearch} />
      </div>

      <ChatterList users={searchedUsers} messages={messages} />
    </aside >
  );
};

export default Sidebar;