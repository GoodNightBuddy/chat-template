import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../Loader/Loader';
import './SignInPage.scss';

const SignInPage: React.FC = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const signInGugol: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)!;
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log(user, token);
        
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handeSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (password.length >= 3) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);

        });
    }
  }

  return (
    <>
      {false
        ? <Loader />
        : <main className="sign-in-page">
          <form className="sign-in-form" autoComplete="off" onSubmit={handeSubmit}>
            <h2 className="sign-in-form__title">Sign In</h2>
            <label className="trip-popup__input input">
              <span className="input__heading">Email</span>
              <input name="email" type="email" required onChange={e => setEmail(e.target.value)} />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Password</span>
              <input name="password" type="password" autoComplete="new-password" required onChange={e => setPassword(e.target.value)} />
            </label>
            <button className="button" type="submit">Sign In</button>
            <button className="button" onClick={signInGugol} >Sign in with gugol</button>
          </form>
          <span>
            Don't have an account?&nbsp;
            <Link to={'/sign-up'} className="sign-in-form__link">Sign Up</Link>
          </span>
        </main>}
    </>
  )
};

export default SignInPage