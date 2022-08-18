import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { authActionCreator } from '../../../store/action';
// import { AppDispatch, useAppSelector } from '../../../store/types/types';
import { Loader } from '../../Loader/Loader';
import './SignUpPage.scss';

const SignUpPage: React.FC = () => {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  // const isLoading = useAppSelector(state => state.auth.loading)
  // const dispatch = useDispatch() as AppDispatch;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (password.length >= 3) {
      const user = {
        fullName,
        email,
        password
      }
      // dispatch(authActionCreator.signUp(user))
    }
  }

  return (
    <>
      {false
        ? <Loader/>
        : <main className="sign-up-page">
          <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
            <h2 className="sign-up-form__title">Sign Up</h2>
            <label className="trip-popup__input input">
              <span className="input__heading">Full name</span>
              <input name="full-name" type="text" required onChange={e => setFullName(e.target.value)} />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Email</span>
              <input name="email" type="email" required onChange={e => setEmail(e.target.value)} />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Password</span>
              <input name="password" type="password" autoComplete="new-password" required onChange={e => setPassword(e.target.value)} />
            </label>
            <button className="button" type="submit">Sign Up</button>
          </form>
          <span>
            Already have an account?
            <Link to={'/sign-in'} className="sign-up-form__link">Sign In</Link>
          </span>
        </main>
      }
    </>
  )
};

export default SignUpPage