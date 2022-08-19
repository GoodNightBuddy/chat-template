import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ChatBody from './components/ChatBody/ChatBody';
import Chat from './components/hoc/Chat';
import SignInPage from './components/pages/SignInPage/SignInPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import RoutePath from './enums/routes';
import { authActionCreator } from './store/action';
import { useAppDispatch, useAppSelector } from './store/store';

function App() {

  const dispatch = useAppDispatch();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid: id, photoURL, displayName } = user;
        dispatch(authActionCreator.setUser({ email, id, photoURL, displayName }))      
      } else {
        dispatch(authActionCreator.removeUser())
      }
    })
    return unsubscribe;
  });

  const state = useAppSelector(state => state.auth);


  if (state.id && state.email) {
    return (
      <Routes>
        <Route path={RoutePath.ROOT} element={<Chat />}>
          <Route path="/:id" element={<ChatBody />} />
        </Route>
        <Route path={RoutePath.ANY} element={<Navigate to={RoutePath.ROOT} replace />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path={RoutePath.SIGN_IN} element={<SignInPage />} />
      <Route path={RoutePath.SIGN_UP} element={<SignUpPage />} />
      <Route path={RoutePath.ANY} element={<Navigate to={RoutePath.SIGN_IN} replace />} />
    </Routes>
  );
}

export default App;
