import {useContext, useState} from 'react';
import classes from './message-input.module.scss';
import {useParams} from "react-router-dom";
import { UserContext } from '../../context/UserContext';

const MessageInput = () => {
  const [value, setValue] = useState('');
  const {appendMessage} = useContext(UserContext);
  const params = useParams();

  const createMessage = (text, receiver = false) => {
    return {
      chatId: +params.id,
      id: new Date(),
      receiver,
      text,
      time: new Date(),
    }
  }

  function handleKeypress(e) {
    if (e.keyCode === 13) {
      appendMessage(createMessage(value));

      fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            appendMessage(createMessage(data.value, true))
          }, 10000)
        })
      setValue('')
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message"
        className={classes.search}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeypress}
      />
    </div>
  );
};

export default MessageInput;