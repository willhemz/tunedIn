import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';

interface Props {
  userAuth?: Auth;
  email: string;
  password: string;
}

const createUser = ({ email, password, userAuth = auth }: Props) => {
  return createUserWithEmailAndPassword(userAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user: User = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const confirmUser = ({ userAuth = auth, email, password }: Props) => {
  return signInWithEmailAndPassword(userAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user: User = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export { createUser };
