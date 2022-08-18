import { Navigate, Route, Routes } from 'react-router-dom';
import ChatBody from './components/ChatBody/ChatBody';
import Chat from './components/hoc/Chat';
import SignInPage from './components/pages/SignInPage/SignInPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import RoutePath from './enums/routes';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Chat />}>
        <Route path="/:id" element={<ChatBody />} />
        {/* <Route path={RoutePath.ANY} element={<Navigate to={RoutePath.SIGN_IN} replace />} /> */}
      </Route>
      <Route path={RoutePath.SIGN_UP} element={<SignUpPage />} />
      <Route path={RoutePath.SIGN_IN} element={<SignInPage />} />
    </Routes>
  );
}

export default App;
