import { createBrowserRouter as browse } from 'react-router-dom'
import { ErrorPage, Home, Login, Signup } from './component'

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
])

export default App
