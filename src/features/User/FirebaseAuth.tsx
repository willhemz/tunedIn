import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { loginAcct } from './Userslice';
import { DispatchFunc } from '../../store';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  userAuth?: Auth;
  email: string;
  password: string;
  dispatch: DispatchFunc;
  navigate: NavigateFunction;
}

const createUser = ({ email, userAuth = auth, ...rest }: Props) => {
  const { password, dispatch, navigate } = rest;
  return createUserWithEmailAndPassword(userAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user: User = userCredential.user;
      dispatch(loginAcct({ uid: user.uid, email: user.email } as User));
      console.log(user.email, 'account created successfully');
      navigate('/signup/signup');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + ': ' + errorMessage);
      console.log(errorCode, errorMessage);
    });
};

const confirmUser = ({ email, userAuth = auth, ...rest }: Props) => {
  const { password, dispatch, navigate } = rest;
  return signInWithEmailAndPassword(userAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user: User = userCredential.user;
      dispatch(loginAcct({ uid: user.uid, email: user.email } as User));
      console.log(user.email, 'account logged in successfully');
      navigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + ': ' + errorMessage);
      console.log(errorCode, errorMessage);
    });
};

export { createUser, confirmUser };
