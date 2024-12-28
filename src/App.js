import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter  as Router, Route, Routes, Navigate } from 'react-router-dom';

// wallet
import Wallet from './pages/wallet/wallet';
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
import Successfullypass from './pages/auth/Successfullypass';





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
      {/* <Route path="/Withdraw" element={<ProtectedRoute><Withdraw/></ProtectedRoute>} /> */}

      <Route path="/Choosepayment" element={<ProtectedRoute><Choosepayment /></ProtectedRoute>} />
      <Route path="/Buyquantity" element={<ProtectedRoute><Buyquantity /></ProtectedRoute>} />
      <Route path="/Qrcode" element={<ProtectedRoute><Qrcode /></ProtectedRoute>} />
      <Route path="/Cryptocurrency" element={<ProtectedRoute><Cryptocurrency /></ProtectedRoute>} />

           <Route path="/Cryptocurrency" element={<Cryptocurrency/>}></Route>


           {/* profile */}
           <Route path="/Userinfo" element={<Userinfo/>}></Route>      
           <Route path="/listblog" element={<Listblog/>}/>
           <Route path="/blog-details" element={<Blogdetails/>}/>


            {/* auth */}
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/register" element={<Register/>}/>
           <Route path="/forgot" element={<Forgot/>}/>
           <Route path="/Newpass" element={<Newpass/>}/>
           <Route path="/Otp" element={<Otp/>}/>


         </Routes>
       </Router> 
  );
}

export default App;
