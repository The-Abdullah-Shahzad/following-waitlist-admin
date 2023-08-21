import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserManagement from './Pages/UserManagement'
import UserDetails from './Pages/UserDetails'
import Login from './Pages/Login'
import PrivateRoutes from './Routes'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/users' element={<UserManagement />} />
          <Route path='/user/:id' exact element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
