import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter  as Router, Route, Routes, Navigate } from 'react-router-dom';

// wallet
import Wallet from './pages/wallet/wallet';
import Cryptocurrency from './pages/wallet/Cryptocurrency';
import Choosepayment from './pages/wallet/Choosepayment';
import Buyquantity from './pages/wallet/Buyquantity';
import Qrcode from './pages/wallet/Qrcode';


import {  GoogleAuthWrapperRegister,GoogleAuthWrapper,isAuthenticated, ProtectedRoute, PublicRoute } from './Helper/helper';
// profile
import Listblog from './pages/profile/bloglist';
import Userinfo from './pages/profile/Userinfo';
import Recharge from './pages/wallet/Recharge';

import Blogdetails from './pages/profile/blogdetails';



// home
import Dashboard from './pages/home/dashboard';
import Exchange from './pages/promotion/exchange-market';
import Earn from './pages/activity/earn';

// auth
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Forgot from './pages/auth/forgot';

function App() {

  
  return (   
    <Router>
         
           
    <Routes>
      {/* Home Routes */}
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/exchange" element={<ProtectedRoute><Exchange /></ProtectedRoute>} />
      <Route path="/earn" element={<ProtectedRoute><Earn /></ProtectedRoute>} />

      {/* Wallet Routes */}
      <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
      <Route path="/Choosepayment" element={<ProtectedRoute><Choosepayment /></ProtectedRoute>} />
      <Route path="/Buyquantity" element={<ProtectedRoute><Buyquantity /></ProtectedRoute>} />
      <Route path="/Qrcode" element={<ProtectedRoute><Qrcode /></ProtectedRoute>} />
      <Route path="/Cryptocurrency" element={<ProtectedRoute><Cryptocurrency /></ProtectedRoute>} />

      {/* Profile Routes */}
      <Route path="/Recharge" element={<Recharge/>}></Route>
      <Route path="/Userinfo" element={<ProtectedRoute><Userinfo /></ProtectedRoute>} />
      <Route path="/listblog" element={<ProtectedRoute><Listblog /></ProtectedRoute>} />
      <Route path="/blog-details" element={<ProtectedRoute><Blogdetails /></ProtectedRoute>} />

      {/* Auth Routes */}
      <Route path="/login" element={<PublicRoute><GoogleAuthWrapper /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><GoogleAuthWrapperRegister /></PublicRoute>} />
      <Route path="/forgot" element={<PublicRoute><Forgot /></PublicRoute>} />
    </Routes>
  </Router>
  );
}

export default App;
