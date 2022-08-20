import {useState} from 'react';
import'./MessageInput.scss';
import {useParams} from "react-router-dom";
import { useAppDispatch } from '../../../store/store';
import { messageActionCreator } from '../../../store/actionStore';

const MessageInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const params = useParams();

  const createMessage = (text, receiver = false) => {
    return {
      chatId: +params.id,
      id: Math.random(),
      receiver,
      text,
      time: new Date(),
    }
  }

  function handleKeypress(e) {
    if (e.keyCode === 13 && value.trim() !== '') {
      dispatch(messageActionCreator.setMessage(createMessage(value)));

      

      fetch('https://api.chucknorris.io/jokes/random', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            dispatch(messageActionCreator.setMessage(createMessage(data.value, true)));

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
        className={'search-input'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeypress}
      />
    </div>
  );
};

export default MessageInput;