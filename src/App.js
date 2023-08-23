import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserManagement from './Pages/UserManagement'
import UserDetails from './Pages/UserDetails'
import Login from './Pages/Login'
import PrivateRoutes from './Routes/PrivateRoutes'
import PublicRoutes from './Routes/PublicRoutes'

function App () {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path='/' element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/users' element={<UserManagement />} />
          <Route path='/user/:id' exact element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
