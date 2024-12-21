import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// wallet
import Wallet from './pages/wallet/wallet';
import Cryptocurrency from './pages/wallet/Cryptocurrency';

import Choosepayment from './pages/wallet/Choosepayment';
import Buyquantity from './pages/wallet/Buyquantity';
import Qrcode from './pages/wallet/Qrcode';
// profile
import Listblog from './pages/profile/bloglist';

import Userinfo from './pages/profile/Userinfo';



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
          {/* home */}

           <Route path="/" element={<Dashboard/>}/>
           <Route path="/exchange" element={<Exchange/>}></Route>
           <Route path="/earn" element={<Earn/>}></Route>
           {/* wallet */}

           <Route path="/wallet" element={<Wallet/>}></Route>
           

           <Route path="/Choosepayment" element={<Choosepayment/>}></Route>
           <Route path="/Buyquantity" element={<Buyquantity/>}></Route>
           <Route path="/Qrcode" element={<Qrcode/>}></Route>
           <Route path="/Cryptocurrency" element={<Cryptocurrency/>}></Route>


           {/* profile */}
           <Route path="/Userinfo" element={<Userinfo/>}></Route>      
           <Route path="/listblog" element={<Listblog/>}/>


            {/* auth */}
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/register" element={<Register/>}/>
           <Route path="/forgot" element={<Forgot/>}/>
         </Routes>
       </Router> 
  );
}

export default App;
