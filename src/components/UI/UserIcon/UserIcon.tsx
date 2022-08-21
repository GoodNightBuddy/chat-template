import checked from "./checked.png";
import './UserIcon.scss';

type UserIconProps = {
  imgUrl?: string;
  read?: boolean;
}

const UserIcon = ({imgUrl, read = false}: UserIconProps) => {
  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-_eFTxpPLfn16swgOup3z7QLLblNK_mq2Q&usqp=CAU"
  return (
    <div className={'user__icon'}>
      <img
        src={imgUrl || defaultImage}
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