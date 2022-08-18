import checked from "./checked.png";
import './UserIcon.scss';

const UserIcon = ({imgUrl = "https://via.placeholder.com/64", read = false}) => {
  return (
    <div className={'user__icon'}>
      <img
        src={imgUrl}
        alt="userName"
        className={'icon'}
      />
      {read && <img
        src={checked}
        alt="read"
        className={'user__read'}
      />
      }
    </div>
  );
};

export default UserIcon;