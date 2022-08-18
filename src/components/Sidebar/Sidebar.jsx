import React, {useContext, useEffect, useState} from 'react';
import ChatterList from '../ChatterList/ChatterList';
import { UserContext } from '../context/UserContext';
import Search from '../UI/Search/Search';
import UserIcon from '../UI/UserIcon/UserIcon';
import "./Sidebar.scss"

const Sidebar = () => {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [search, setSearch] = useState('');
  const {users, messages} = useContext(UserContext);

  useEffect(() => {
    setSearchedUsers(users)
  }, [])

  useEffect(() => {
    setSearchedUsers(users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())))
    // eslint-disable-next-line
  }, [search, users])

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <UserIcon
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-_eFTxpPLfn16swgOup3z7QLLblNK_mq2Q&usqp=CAU"
        />
        <Search value={search} setValue={setSearch}/>
      </div>

      <ChatterList users={searchedUsers} messages={messages}/>
    </aside>
  );
};

export default Sidebar;