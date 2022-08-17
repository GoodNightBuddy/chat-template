import { Route, Routes } from 'react-router-dom';
import ChatBody from './components/ChatBody/ChatBody';
import Chat from './components/hoc/Chat';


function App() {
  return (
    <Routes>

      <Route path='/' element={<Chat />}>
        <Route path="/chats/:id" element={<ChatBody />} />

      </Route>


    </Routes>
  );
}

export default App;
