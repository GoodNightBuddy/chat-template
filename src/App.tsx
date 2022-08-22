import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ChatBody from './components/ChatBody/ChatBody';
import Chat from './components/hoc/Chat';
import SignInPage from './components/pages/SignInPage/SignInPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import RoutePath from './enums/routes';
import { authActionCreator } from './store/actionStore';
import { useAppDispatch} from './store/store';
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from './components/Loader/Loader';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  const dispatch = useAppDispatch();
  const auth = getAuth();
  const [authUser, loading, error] = useAuthState(auth);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { email, uid: id, photoURL, displayName } = authUser;
        dispatch(authActionCreator.setUser({ email, id, photoURL, displayName }))
      } else {
        dispatch(authActionCreator.removeUser())
      }
    })
    return unsubscribe;
  }, []);

  if(loading) {
    return (
      <Loader />
    )
  }

  if(error) {
    console.log(error);
  }

  if (authUser) {
    return (
      <Routes>
        <Route path={RoutePath.ROOT} element={<Chat />}>
          <Route path={RoutePath.CHATS} element={<ChatBody />} >
            <Route path={RoutePath.ID} element={<ChatBody />} />
          </Route>
          <Route path={RoutePath.ANY} element={<Navigate to={RoutePath.ROOT} replace />} />
        </Route>
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
