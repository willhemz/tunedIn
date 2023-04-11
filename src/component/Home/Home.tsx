import { ReactElement } from 'react';
import DefaultHome from './DefaultHome';
import UserHome from './UserHome';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { auth } from '../../firebase';
import { loginAcct, logout } from '../../features/User/Userslice';
import { User } from 'firebase/auth';

type Component = ReturnType<typeof DefaultHome>;

const Home = (): ReactElement => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCredentials) => {
      if (userCredentials as User) {
        // logged in
        loginAcct();
      } else {
        // logged out
        logout();
      }
      return unsubscribe;
    });
  }, []);
  const { loggedin } = useSelector((state: RootState) => state.user);

  let content: Component;
  !loggedin ? (content = <DefaultHome />) : (content = <UserHome />);
  return content;
};

export default Home;
