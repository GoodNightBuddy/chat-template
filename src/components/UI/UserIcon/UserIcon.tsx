import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import './UserIcon.scss';

type UserIconProps = {
  imgUrl?: string;
  online?: boolean;
}

const UserIcon = ({imgUrl, online}: UserIconProps) => {
  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-_eFTxpPLfn16swgOup3z7QLLblNK_mq2Q&usqp=CAU"
  return (
    <div className={'user__icon'}>
      <img
        src={imgUrl || defaultImage}
        alt="userName"
        className={'icon'}
      />
      {online && <FontAwesomeIcon icon={faCircleCheck} className="user__icon-online"/>}
    </div>
  );
};

export default UserIcon;