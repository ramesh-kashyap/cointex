import React, { useState, useEffect } from 'react';

export default function dashboard(){

return (
    <div>
        
     <div className="preload preload-container">
        <div className="preload-logo" style={{ backgroundImage: "url('images/logo/144.png')" }}>
          <div className="spinner"></div>
        </div>
      </div>
      

      <div className="header-style2 fixed-top bg-menuDark">
  <div className="d-flex justify-content-between align-items-center gap-14">
    <div className="box-account style-2">
      <a href="user-info.html">
        <img src="images/avt/avt2.jpg" alt="img" className="avt" />
      </a>
      <div className="search-box box-input-field style-2">
        <a href="home-search.html" className="icon-search"></a>
        <input type="text" placeholder="Looking for crypto" required className="clear-ip" />
        <i className="icon-close"></i>
      </div>
    </div>
    <div className="d-flex align-items-center gap-8">
      <a href="list-blog.html" className="icon-gift"></a>
      <a href="#notification" className="icon-noti box-noti" data-bs-toggle="modal"></a>
    </div>
  </div>
</div>

    <div className="pt-68 pb-80">
        <div className="bg-menuDark tf-container">
  <div className="pt-12 pb-12 mt-4">
    <h5>
      <span className="text-primary">My Wallet</span> - 
      <a href="#" className="choose-account" data-bs-toggle="modal" data-bs-target="#accountWallet">
        <span className="dom-text">Account 1 </span> &nbsp;<i className="icon-select-down"></i>
      </a>
    </h5>
    <h1 className="mt-16">
      <a href="#">$2159,34</a>
    </h1>
    <ul className="mt-16 grid-4 m--16">
      <li>
        <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
          <span className="box-round bg-surface d-flex justify-content-center align-items-center">
            <i className="icon icon-way"></i>
          </span>
          Send
        </a>
      </li>
      <li>
        <a href="qr-code2.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
          <span className="box-round bg-surface d-flex justify-content-center align-items-center">
            <i className="icon icon-way2"></i>
          </span>
          Receive
        </a>
      </li>
      <li>
        <a href="buy-quantity.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
          <span className="box-round bg-surface d-flex justify-content-center align-items-center">
            <i className="icon icon-wallet"></i>
          </span>
          Buy
        </a>
      </li>
      <li>
        <a href="earn.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
          <span className="box-round bg-surface d-flex justify-content-center align-items-center">
            <i className="icon icon-exchange"></i>
          </span>
          Earn
        </a>
      </li>
    </ul>
  </div>
</div>

<div className="bg-menuDark tf-container">
  <div className="pt-12 pb-12 mt-4">
    <h5>Market</h5>

    <div className="swiper tf-swiper swiper-wrapper-r mt-16" data-space-between="16" data-preview="2.8" data-tablet="2.8" data-desktop="3">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <a href="exchange-market.html" className="coin-box d-block">
            <div className="coin-logo">
              <img src="images/coin/market-1.jpg" alt="img" className="logo" />
              <div className="title">
                <p>Bitcoin</p>
                <span>BTC</span>
              </div>
            </div>
            <div className="mt-8 mb-8 coin-chart">
              <div id="line-chart-1"></div>
            </div>
            <div className="coin-price d-flex justify-content-between">
              <span>$30780</span>
              <span className="text-primary d-flex align-items-center gap-2"><i className="icon-select-up"></i> 11,75%</span>
            </div>
            <div className="blur bg1"></div>
          </a>
        </div>
        <div className="swiper-slide">
          <a href="exchange-market.html" className="coin-box d-block">
            <div className="coin-logo">
              <img src="images/coin/market-3.jpg" alt="img" className="logo" />
              <div className="title">
                <p>Binance</p>
                <span>BNB</span>
              </div>
            </div>
            <div className="mt-8 mb-8 coin-chart">
              <div id="line-chart-2"></div>
            </div>
            <div className="coin-price d-flex justify-content-between">
              <span>$270.10</span>
              <span className="text-primary d-flex align-items-center gap-2"><i className="icon-select-up"></i> 21,59%</span>
            </div>
            <div className="blur bg2"></div>
          </a>
        </div>
        <div className="swiper-slide">
          <a href="exchange-market.html" className="coin-box d-block">
            <div className="coin-logo">
              <img src="images/coin/coin-3.jpg" alt="img" className="logo" />
              <div className="title">
                <p>Ethereum</p>
                <span>ETH</span>
              </div>
            </div>
            <div className="mt-8 mb-8 coin-chart">
              <div id="line-chart-3"></div>
            </div>
            <div className="coin-price d-flex justify-content-between">
              <span>$1478.10</span>
              <span className="text-primary d-flex align-items-center gap-2"><i className="icon-select-up"></i> 4,75%</span>
            </div>
            <div className="blur bg3"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="bg-menuDark tf-container">
            <div className="pt-12 pb-12 mt-4">
                <div className="wrap-filter-swiper">
                    <h5><a href="cryptex-rating.html" className="cryptex-rating"><i className="icon-star"></i>Cryptex Rating</a></h5> 
                        <div className="swiper-wrapper1 menu-tab-v3 mt-12" role="tablist">
                            <div className="swiper-slide1 nav-link active" data-bs-toggle="tab" data-bs-target="#favorites"  role="tab" aria-controls="favorites" aria-selected="true">
                                Favorites     
                            </div>
                            <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#top" role="tab" aria-controls="top" aria-selected="false">
                                Top   
                            </div>
                            <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#popular" role="tab" aria-controls="popular" aria-selected="false">
                                Popular  
                            </div>
                            <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#price" role="tab" aria-controls="price" aria-selected="false">
                                Token price   
                            </div>
                            <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#new" role="tab" aria-controls="new" aria-selected="false">
                                New token    
                            </div>
                        </div>
                </div>
                <div className="tab-content mt-8">
                    <div className="tab-pane fade show active" id="favorites" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>Change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ETH</p>
                                            <span className="text-secondary">$360,6M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">arb_ETH</p>
                                            <span className="text-secondary">$132,18M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$50,56M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.001,96</span>
                                            <span className="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ARB</p>
                                            <span className="text-secondary">$31,55M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1,11</span>
                                            <span className="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WETH</p>
                                            <span className="text-secondary">$24,34M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,56</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">MATIC</p>
                                            <span className="text-secondary">$19,36M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$0,666</span>
                                            <span className="coin-btn decrease">-4,42%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            
                        </ul>  
                    </div>
                    <div className="tab-pane fade" id="top" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>Change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ETH</p>
                                            <span className="text-secondary">$360,6M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">arb_ETH</p>
                                            <span className="text-secondary">$132,18M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$50,56M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.001,96</span>
                                            <span className="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ARB</p>
                                            <span className="text-secondary">$31,55M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1,11</span>
                                            <span className="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WETH</p>
                                            <span className="text-secondary">$24,34M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,56</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">MATIC</p>
                                            <span className="text-secondary">$19,36M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$0,666</span>
                                            <span className="coin-btn decrease">-4,42%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>       
                    </div>
                    <div className="tab-pane fade" id="popular" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>Change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ETH</p>
                                            <span className="text-secondary">$360,6M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">arb_ETH</p>
                                            <span className="text-secondary">$132,18M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$50,56M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.001,96</span>
                                            <span className="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ARB</p>
                                            <span className="text-secondary">$31,55M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1,11</span>
                                            <span className="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WETH</p>
                                            <span className="text-secondary">$24,34M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,56</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">MATIC</p>
                                            <span className="text-secondary">$19,36M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$0,666</span>
                                            <span className="coin-btn decrease">-4,42%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                           
                        </ul>      
                    </div>
                    <div className="tab-pane fade" id="price" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>Change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ETH</p>
                                            <span className="text-secondary">$360,6M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">arb_ETH</p>
                                            <span className="text-secondary">$132,18M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$50,56M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.001,96</span>
                                            <span className="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ARB</p>
                                            <span className="text-secondary">$31,55M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1,11</span>
                                            <span className="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WETH</p>
                                            <span className="text-secondary">$24,34M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,56</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">MATIC</p>
                                            <span className="text-secondary">$19,36M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$0,666</span>
                                            <span className="coin-btn decrease">-4,42%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            
                        </ul>     
                    </div>
                    <div className="tab-pane fade" id="new" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>Change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ETH</p>
                                            <span className="text-secondary">$360,6M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">arb_ETH</p>
                                            <span className="text-secondary">$132,18M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,80</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$50,56M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.001,96</span>
                                            <span className="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">ARB</p>
                                            <span className="text-secondary">$31,55M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1,11</span>
                                            <span className="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WETH</p>
                                            <span className="text-secondary">$24,34M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,56</span>
                                            <span className="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">MATIC</p>
                                            <span className="text-secondary">$19,36M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$0,666</span>
                                            <span className="coin-btn decrease">-4,42%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                           
                        </ul>      
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="menubar-footer footer-fixed">
  <ul className="inner-bar">
    <li className="active">
      <a href="home.html">
        <i className="icon icon-home2"></i>
        Home
      </a>
    </li>
    <li>
      <a href="exchange-market.html">
        <i className="icon icon-exchange"></i>
        Exchange
      </a>
    </li>
    <li>
      <a href="earn.html">
        <i className="icon icon-earn"></i>
        Earn
      </a>
    </li>
    <li>
      <a href="wallet.html">
        <i className="icon icon-wallet"></i>
        Wallet
      </a>
    </li>
  </ul>
</div>



<div className="modal fade action-sheet" id="accountWallet">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <span>Wallet</span>
        <span className="icon-cancel" data-bs-dismiss="modal"></span>
      </div>
      <ul className="mt-20 pb-16">
        <li data-bs-dismiss="modal">
          <div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">
            Account 1 <i className="icon icon-check-circle"></i>
          </div>
        </li>
        <li className="mt-4" data-bs-dismiss="modal">
          <div className="d-flex justify-content-between gap-8 text-large item-check dom-value">
            Account 2<i className="icon icon-check-circle"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

 
    
    <div className="modal fade modalRight" id="notification">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                    <span className="left" data-bs-dismiss="modal"  aria-hidden="true"><i className="icon-left-btn"></i></span>
                    <h3>Notification</h3>
                </div>
                <div className="overflow-auto pt-45 pb-16">
                    <div className="tf-container">
                        <ul className="mt-12">
                            <li>
                                <a href="#" className="noti-item bg-menuDark">
                                    <div className="pb-8 line-bt d-flex">
                                        <p className="text-button fw-6">Cointex to just tick size and trading amount precision of spots/margins and perpetual swaps</p>
                                        <i className="dot-lg bg-primary"></i>
                                    </div>
                                    <span className="d-block mt-8">5 minutes ago</span>
                                </a>
                            </li>
                            <li className="mt-12">
                                <a href="#" className="noti-item bg-menuDark">
                                    <div className="pb-8 line-bt d-flex">
                                        <p className="text-button fw-6">Cointex to adjust components of several indexes</p>
                                        <i className="dot-lg bg-primary"></i>
                                    </div>
                                    <span className="d-block mt-8">5 minutes ago</span>
                                </a>
                            </li>
                            <li className="mt-12">
                                <a href="#" className="noti-item bg-menuDark">
                                    <div className="pb-8 line-bt d-flex">
                                        <p className="text-button fw-6">Cointex to just tick size and trading amount precision of spots/margins and perpetual swaps</p>
                                        <i className="dot-lg bg-primary"></i>
                                    </div>
                                    <span className="d-block mt-8">5 minutes ago</span>
                                </a>
                            </li>
                            <li className="mt-12">
                                <a href="#" className="noti-item bg-menuDark">
                                    <div className="pb-8 line-bt">
                                        <p className="text-button fw-6 text-secondary">Cointex to adjust components of several indexes</p>
                                    </div>
                                    <span className="d-block mt-8 text-secondary">1 day ago</span>
                                </a>
                            </li>
                            <li className="mt-12">
                                <a href="#" className="noti-item bg-menuDark">
                                    <div className="pb-8 line-bt">
                                        <p className="text-button fw-6 text-secondary">Cryptex wallet uses Achain network service</p>
                                    </div>
                                    <span className="d-block mt-8 text-secondary">1 day ago</span>
                                </a>
                            </li>
                            <li className="mt-12">
                                <a href="#" className="noti-item bg-menuDark">
                                    <div className="pb-8 line-bt">
                                        <p className="text-button fw-6 text-secondary">Cointex to adjust components of several indexes</p>
                                    </div>
                                    <span className="d-block mt-8 text-secondary">1 day ago</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    

    <div className="modal fade modalCenter" id="modalNoti">
        <div className="modal-dialog modal-dialog-centered" role="document">
           <div className="modal-content modal-sm">
              <div className="p-16 line-bt text-center">
                  <h4>“Cointex” Would Like To Send You Notifications</h4>
                  <p className="mt-8 text-large">Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.</p>
              </div>
              <div className="grid-2">
                 <a href="#" className="line-r text-center text-button fw-6 p-10 text-secondary btn-hide-modal" data-bs-dismiss="modal" >Don’t Allow</a>
                 <a href="#" className="text-center text-button fw-6 p-10 text-primary btn-hide-modal"  data-bs-toggle="modal" data-bs-target="#notiPrivacy"> Allow</a>
              
              </div>
           </div>
        </div>
    </div>


    <div className="modal fade modalCenter" id="notiPrivacy">
       <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-20">
             <div className="heading">
              <h3>Privacy</h3>
              <div className="mt-4 text-small">
                  <p>A mobile app privacy policy is a legal statement that must be clear, conspicuous, and consented to by all users. It must disclose how a mobile app gathers, stores, and uses the personally identifiable information it collects from its users.</p>
                  <p>A mobile privacy app is developed and presented to users so that mobile app developers stay compliant with state, federal, and international laws. As a result, they fulfill the legal requirement to safeguard user privacy while protecting the company itself from legal challenges.</p>
              </div>
              <h3 className="mt-12">Authorized Users</h3>
              <p className="mt-4 text-small">
                  A mobile app privacy policy is a legal statement that must be clear, conspicuous, and consented to by all users. It must disclose how a mobile app gathers, stores, and uses the personally identifiable information it collects from its users.
              </p>
              <div className="cb-noti mt-12">
                <input type="checkbox" className="tf-checkbox" id="cb-ip"/> 
                <label for="cb-ip">I agree to the Term of service and Privacy policy</label>
              </div>
           
             </div>
             <div className="mt-20">
                <a href="#" className="tf-btn md primary" data-bs-dismiss="modal">I Accept</a>
             </div>
          </div>
       </div>
    </div>
    
  </div>
)}