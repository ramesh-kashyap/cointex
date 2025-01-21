import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter  as Router, Route, Routes, Navigate } from 'react-router-dom';
//language change
// import LanguageSelector from './pages/profile/chnagelang';
// import { useTranslation } from 'react-i18next';

// wallet
import Wallet from './pages/wallet/wallet';
import Balancerecord from './pages/wallet/Balancerecord';

import Binance from './pages/wallet/Binance';

import Cryptocurrency from './pages/wallet/Cryptocurrency';
import Choosepayment from './pages/wallet/Choosepayment';
import Buyquantity from './pages/wallet/Buyquantity';
// import Withdraw from './pages/wallet/Withdraw';

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
import ChangePass from './pages/profile/changePass';
import Invite from './pages/profile/inviteFriends';
import Profile from './pages/profile/profile';
import ChangeName from './pages/profile/change-name';
import Camera from './pages/profile/camera';

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
      <Route path="/Binance" element={<ProtectedRoute><Binance/></ProtectedRoute>}/>
      <Route path="/Balancerecord" element={<ProtectedRoute><Balancerecord/></ProtectedRoute>}/>



      {/* Wallet Routes */}
      <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
      {/* <Route path="/Withdraw" element={<ProtectedRoute><Withdraw/></ProtectedRoute>} /> */}

      <Route path="/Choosepayment" element={<ProtectedRoute><Choosepayment /></ProtectedRoute>} />
      <Route path="/Buyquantity" element={<ProtectedRoute><Buyquantity /></ProtectedRoute>} />
      <Route path="/Qrcode" element={<ProtectedRoute><Qrcode /></ProtectedRoute>} />
      <Route path="/Cryptocurrency" element={<ProtectedRoute><Cryptocurrency /></ProtectedRoute>} />
      <Route path="/Api-Bind" element={<ProtectedRoute><Apibind /></ProtectedRoute>} />


      {/* Profile Routes */}
      <Route path="/invite" element={<ProtectedRoute><Invite/></ProtectedRoute>}/>
      <Route path="/Recharge" element={<ProtectedRoute><Recharge/></ProtectedRoute>}></Route>
      <Route path="/Userinfo" element={<ProtectedRoute><Userinfo /></ProtectedRoute>} />
      <Route path="/listblog" element={<ProtectedRoute><Listblog /></ProtectedRoute>} />
      <Route path="/blog-details" element={<ProtectedRoute><Blogdetails /></ProtectedRoute>} />
      <Route path="/Deposit" element={<ProtectedRoute><Deposit /></ProtectedRoute>} />
      <Route path="/Withdraw" element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
      <Route path="/Bind-List" element={<ProtectedRoute><Bindlist /></ProtectedRoute>} />
      <Route path="/change-password" element={<ProtectedRoute><ChangePass/></ProtectedRoute>}/>
      <Route path="/Cointex-Store" element={<ProtectedRoute><Cointexstore /></ProtectedRoute>}/>
      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path="/change-name" element={<ProtectedRoute><ChangeName/></ProtectedRoute>}/>
      <Route path="/camera" element={<ProtectedRoute><Camera/></ProtectedRoute>}/>
      {/* <Route path="/chnagelang" element={<ProtectedRoute><LanguageSelector/></ProtectedRoute>}/> */}

      {/* Auth Routes */}
      <Route path="/login" element={<PublicRoute><GoogleAuthWrapper /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><GoogleAuthWrapperRegister /></PublicRoute>} />
      <Route path="/forgot" element={<PublicRoute><Forgot /></PublicRoute>} />
      <Route path="/newpass" element={<PublicRoute><Newpass/></PublicRoute>}/>
      <Route path="/Otp" element={<Otp/>}/>
    </Routes>
  </Router>
  );
}

export default App;
