import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wallet from './pages/wallet/wallet';
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
           <Route path="/exchange" element={<Exchange/>}></Route>
           <Route path="/earn" element={<Earn/>}></Route>
   
   
           <Route path="/login" element={<Login/>}></Route>
         </Routes>
       </Router> 
  );
}

export default App;
