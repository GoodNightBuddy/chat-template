import checked from "./checked.png";
import './UserIcon.scss';

const UserIcon = ({imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-_eFTxpPLfn16swgOup3z7QLLblNK_mq2Q&usqp=CAU", read = false}) => {
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