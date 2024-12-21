import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wallet from './pages/wallet/wallet';
import Cryptocurrency from './pages/wallet/Cryptocurrency';

import Choosepayment from './pages/wallet/Choosepayment';
import Buyquantity from './pages/wallet/Buyquantity';
import Qrcode from './pages/wallet/Qrcode';
import Userinfo from './pages/profile/Userinfo';




import Dashboard from './pages/home/dashboard';
import Exchange from './pages/promotion/exchange-market';
import Earn from './pages/activity/earn';
import Login from './pages/auth/login';
function App() {
  return (   
    <Router>
         <Routes>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/wallet" element={<Wallet/>}></Route>
           <Route path="/Userinfo" element={<Userinfo/>}></Route>

           <Route path="/Choosepayment" element={<Choosepayment/>}></Route>
           <Route path="/Buyquantity" element={<Buyquantity/>}></Route>
           <Route path="/Qrcode" element={<Qrcode/>}></Route>
           <Route path="/Cryptocurrency" element={<Cryptocurrency/>}></Route>




           <Route path="/exchange" element={<Exchange/>}></Route>
           <Route path="/earn" element={<Earn/>}></Route>

   
   
           <Route path="/login" element={<Login/>}></Route>
         </Routes>
       </Router> 
  );
}

export default App;
