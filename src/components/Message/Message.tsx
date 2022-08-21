import { IMessage } from "../../store/messages/actions";
import UserIcon from "../UI/UserIcon/UserIcon";
import "./Message.scss"

export interface DateTimeFormatOptions {
  year?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
}

type MessageProps = {
  message: IMessage;
  userImage: string;
}

const Message= ({ message, userImage }: MessageProps) => {
  const timeOptions: DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }

  const time = new Date(message.time).toLocaleString('en-US', timeOptions);

  return (
    <div className={!message.receiver ? "message__receiver" : "message__sender"}>
      <div className="message__main">
        {!message.receiver || <UserIcon imgUrl={userImage} />}
        <div className='message__text'>
          {message.text}
        </div>
      </div>
      <p className="message__time">{time}</p>
    </div>
  );
};

export default Message;