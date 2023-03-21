import { createBrowserRouter as browse } from 'react-router-dom'
import { ErrorPage, Home, Login } from './component'

const App = browse([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
])

export default App
