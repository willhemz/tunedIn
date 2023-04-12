import { createBrowserRouter as browse } from 'react-router-dom';
import { ErrorPage, Home, Login, Profile, Signup } from './component';

const App = browse([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup/:name',
    element: <Signup />,
  },
  {
    path: '/profiles',
    element: <Profile />,
  },
]);

export default App;
