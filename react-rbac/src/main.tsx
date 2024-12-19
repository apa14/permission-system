import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router';
import { AuthProvider } from './auth/AuthContextProvider';
import App from './App.tsx'
import Login from './auth/Login';
import Logout from './auth/Logout';
import ProtectedRoute from './protectecPages/protectedRoute';
import Home from './protectecPages/Home';
import AdminDashboard from './protectecPages/AdminDashboard';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admin' element={<ProtectedRoute component={AdminDashboard} roles={['admin']} permissions={['read:admin']} />} />
          <Route path='/home' element={<ProtectedRoute component={Home} roles={['admin', 'user']} permissions={['read:user']} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
