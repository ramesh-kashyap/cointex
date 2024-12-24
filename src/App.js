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
import Recharge from './pages/wallet/Recharge';


import {  GoogleAuthWrapperRegister,GoogleAuthWrapper,isAuthenticated, ProtectedRoute, PublicRoute } from './Helper/helper';
// profile
import Listblog from './pages/profile/bloglist';
import Userinfo from './pages/profile/Userinfo';
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
          {/* home */}

           <Route path="/" element={<Dashboard/>}/>
           <Route path="/exchange" element={<Exchange/>}></Route>
           <Route path="/earn" element={<Earn/>}></Route>
           {/* wallet */}

           <Route path="/wallet" element={<Wallet/>}></Route>
           <Route path="/Recharge" element={<Recharge/>}></Route>

           <Route path="/Userinfo" element={<Userinfo/>}></Route>
           

           <Route path="/Choosepayment" element={<Choosepayment/>}></Route>
           <Route path="/Buyquantity" element={<Buyquantity/>}></Route>
           <Route path="/Qrcode" element={<Qrcode/>}></Route>
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
