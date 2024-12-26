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
import Apibind from './pages/wallet/ApiBind';
import Withdraw from './pages/wallet/Withdraw';
import Deposit from './pages/wallet/Deposit';
import Bindlist from './pages/wallet/Bindlist';
import Cointexstore from './pages/plan/Cointexstore';


import {  GoogleAuthWrapperRegister,GoogleAuthWrapper,ProtecRegRoute,isAuthenticated, ProtectedRoute, PublicRoute } from './Helper/helper';
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
import Newpass from './pages/auth/newpass';
import Otp from './pages/auth/Otp';

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
      <Route path="/Api-Bind" element={<ProtectedRoute><Apibind /></ProtectedRoute>} />
      {/* Profile Routes */}
      <Route path="/Recharge" element={<Recharge/>}></Route>
      <Route path="/Userinfo" element={<ProtectedRoute><Userinfo /></ProtectedRoute>} />
      <Route path="/listblog" element={<ProtectedRoute><Listblog /></ProtectedRoute>} />
      <Route path="/blog-details" element={<ProtectedRoute><Blogdetails /></ProtectedRoute>} />
      <Route path="/Deposit" element={<ProtectedRoute><Deposit /></ProtectedRoute>} />
      <Route path="/Withdraw" element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
      <Route path="/Bind-List" element={<ProtectedRoute><Bindlist /></ProtectedRoute>} />

      <Route path="/Cointex-Store" element={<ProtectedRoute><Cointexstore /></ProtectedRoute>} />

      {/* Auth Routes */}
      <Route path="/login" element={<PublicRoute><GoogleAuthWrapper /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><GoogleAuthWrapperRegister /></PublicRoute>} />
      <Route path="/forgot" element={<PublicRoute><Forgot /></PublicRoute>} />
      <Route path="/Newpass" element={<PublicRoute><Newpass/></PublicRoute>}/>
      <Route path="/Otp" element={<ProtecRegRoute><Otp/></ProtecRegRoute>}/>
    </Routes>
  </Router>
  );
}

export default App;
