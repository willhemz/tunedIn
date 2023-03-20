import { createBrowserRouter as browse } from 'react-router-dom'
import { ErrorPage } from './component'

const App = browse([
  {
    path: '/',
    element: '',
    errorElement: <ErrorPage />,
  },
])

export default App
