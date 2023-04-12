import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { auth } from '../firebase';
import { loginAcct, logout } from './User/Userslice';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const useLoad = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // logged in
        dispatch(loginAcct({ uid: user.uid, email: user.email } as User));
      } else {
        // logged out
        dispatch(logout());
        navigate('/');
      }
      return unsubscribe;
    });
  }, [dispatch]);
};

export default useLoad;
