import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
      .catch((error) => {
        console.log(error);
      });
  }

  const signInFacebook: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const auth = getAuth();
   const provider = new FacebookAuthProvider();;
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = FacebookAuthProvider.credentialFromResult(result)!;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
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
          console.log(error);
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
            <button className="button" onClick={signInFacebook} >Sign in with facebook</button>
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