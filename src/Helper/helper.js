import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter  as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login';
import Dashboard from '../pages/auth/login';
import Register from '../pages/auth/register';
 export const GoogleAuthWrapper =()=>{
    return(
    <GoogleOAuthProvider clientId='705111046549-lbh4610l0ddu7opemk0ck1mpccertsa3.apps.googleusercontent.com'>
   <Login/>
  </GoogleOAuthProvider>
  )
  }
  export const GoogleAuthWrapperRegister = () => {
    return (
        <GoogleOAuthProvider clientId='705111046549-lbh4610l0ddu7opemk0ck1mpccertsa3.apps.googleusercontent.com'>
            <Register />
        </GoogleOAuthProvider>
    );
};

 export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime; // Token is valid if not expired
    } catch (err) {
        return false; // Invalid token
    }
};

// Protected Route Component
export const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

// Public Route Component
export const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/" /> : children;
};