import { KeyboardEvent, useState } from 'react';
import './MessageInput.scss';
import { useParams } from "react-router-dom";
import { useAppDispatch } from '../../../store/store';
import { messageActionCreator, userActionCreator } from '../../../store/actionStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const createMessage = (text: string, receiver = false) => {
    return {
      chatId: id ? +id : null,
      id: Math.random(),
      receiver,
      text,
      time: new Date(),
    }
  }

  function handleKeypress(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      sendMessage();
    }
  }

  function sendMessage(): void {
    if (value.trim() === '') return

    dispatch(messageActionCreator.setMessage(createMessage(value)));
    dispatch(userActionCreator.sortUsers(id))

    fetch('https://api.chucknorris.io/jokes/random', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          dispatch(messageActionCreator.setMessage(createMessage(data.value, true)));
          dispatch(userActionCreator.sortUsers(id))
        }, 10000)
      })
    setValue('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message"
        className={'search-input'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeypress}
      />
      <FontAwesomeIcon icon={faPaperPlane} className="icon-send" onClick={sendMessage} />
    </div>
  );
};

export default MessageInput;