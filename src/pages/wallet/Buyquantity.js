import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import React from 'react';

export default function BuyQuantity() {
  return (
    <div>
     

      <div className="header fixed-top bg-surface d-flex justify-content-between align-items-center">
        <a href="javascript:void(0);" className="left back-btn">
          <i className="icon-left-btn"></i>
        </a>
        <a href="sell-quantity.html" className="right">Sells</a>
      </div>

      <div className="pt-45 pb-16">
        <div className="tf-container">
          <div className="mt-4 coin-item style-2 gap-8">
            <img src="assets/images/coin/coin-1.jpg" alt="Coin" className="img" />
            <h5>Buy BTC</h5>
          </div>

          <div className="mt-16 d-flex justify-content-between">
            <span>I want to pay</span>
            <span className="text-primary d-flex align-items-center gap-4">
              By quantity <i className="icon-leftRight"></i>
            </span>
          </div>

          <div className="mt-8 group-ip-select">
            <input type="text" placeholder="Please enter quantity" />
            <div className="select-wrapper">
              <select className="tf-select">
                <option value="">VND</option>
                <option value="">BTC</option>
              </select>
            </div>
          </div>

          <p className="mt-8">188.308-300.000,000 USD</p>

          <a href="choose-payment.html" className="tf-btn lg primary mt-40">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
