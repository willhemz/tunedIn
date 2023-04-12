import { ReactElement } from 'react';
import DefaultHome from './DefaultHome';
import UserHome from './UserHome';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { auth } from '../../firebase';
import { User } from 'firebase/auth';
import { loginAcct, logout } from '../../features/User/Userslice';
import { useAppDispatch, useAppSelector } from '../../features';

type Component = ReturnType<typeof DefaultHome>;

const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // logged in
        dispatch(loginAcct({ uid: user.uid, email: user.email } as User));
      } else {
        // logged out
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [auth]);
  const { loggedin } = useAppSelector((state: RootState) => state.user);

  let content: Component;
  content = !loggedin ? <DefaultHome /> : <UserHome />;
  return content;
};

export default Home;
