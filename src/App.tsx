import { createBrowserRouter as browse } from 'react-router-dom';
import { ErrorPage, Home, Login, Signup } from './component';
import { useEffect } from 'react';
import { auth } from './firebase';
import { loginAcct, logout } from './features/User/Userslice';

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userCredentials) => {
    if (userCredentials) {
      // logged in
      loginAcct();
    } else {
      // logged out
      logout();
    }
    return unsubscribe;
  });
}, []);

const App = browse([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup/:name',
    element: <Signup />,
  },
]);

export default App;
