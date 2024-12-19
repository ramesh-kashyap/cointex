
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Excange(){
    return(
<div>
    {/* <div className="preload preload-container">
        <div className="preload-logo" style={{backgroundImage: "url('assets/images/logo/144.png')"}}>
          <div className="spinner"></div>
        </div>
      </div> */}

    <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h3 className="d-flex gap-12">
            <a href="#">Market</a>
            <a href="exchange-trade.html" className="text-secondary">Trade</a>
        </h3>
        <i className="icon-funnel text-white" data-bs-toggle="modal" data-bs-target="#filter"></i>
    </div>
    <div className="pt-55 pb-80">
        <div className="tf-container">
            <div className="mt-4 search-box box-input-field">
                <a href="home-search.html" className="icon-search"></a>
                <input type="text" placeholder="Swap over 210.00 tokens on more than 10 chains" required className="clear-ip"/>
                <i className="icon-close"></i>
            </div>        
            <div className="mt-20">
                <div className="line-bt">
                    <div className="swiper swiper-wrapper-r market-swiper" data-space-between="20" data-preview="auto">
                        <div className="swiper-wrapper menu-tab-v3" role="tablist">
                            <div className="swiper-slide nav-link active" data-bs-toggle="tab" data-bs-target="#all"  role="tab" aria-controls="all" aria-selected="true">
                                All     
                            </div>
                            <div className="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#favorites" role="tab" aria-controls="favorites" aria-selected="false">
                                <i className="icon-star"></i>
                                Favorites    
                            </div>
                            <div className="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#attractive" role="tab" aria-controls="attractive" aria-selected="false">
                                Attractive   
                            </div>
                            <div className="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#meme" role="tab" aria-controls="meme" aria-selected="false">
                                Meme  
                            </div>
                            <div className="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#staking" role="tab" aria-controls="staking" aria-selected="false">
                                Staking   
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="tab-content mt-8 mb-16">
                    <div className="tab-pane fade show active" id="all" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name/Revenue
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>24h change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-6.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-7.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-8.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-9.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-10.jpg" alt="img" className="img"/>
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
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-14.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">OP_ETH</p>
                                            <span className="text-secondary">$15,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,47</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$11,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.034,60</span>
                                            <span className="coin-btn decrease">-0,57%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-15.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WSTETH</p>
                                            <span className="text-secondary">$11,49M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$2.121,39</span>
                                            <span className="coin-btn decrease">-1,61%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>  
                    </div>
                    <div className="tab-pane fade" id="favorites" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name/Revenue
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>24h change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-6.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-7.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-8.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-9.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-10.jpg" alt="img" className="img"/>
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
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-14.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">OP_ETH</p>
                                            <span className="text-secondary">$15,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,47</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$11,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.034,60</span>
                                            <span className="coin-btn decrease">-0,57%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-15.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WSTETH</p>
                                            <span className="text-secondary">$11,49M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$2.121,39</span>
                                            <span className="coin-btn decrease">-1,61%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>       
                    </div>
                    <div className="tab-pane fade" id="attractive" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name/Revenue
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>24h change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-6.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-7.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-8.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-9.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-10.jpg" alt="img" className="img"/>
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
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-14.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">OP_ETH</p>
                                            <span className="text-secondary">$15,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,47</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$11,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.034,60</span>
                                            <span className="coin-btn decrease">-0,57%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-15.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WSTETH</p>
                                            <span className="text-secondary">$11,49M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$2.121,39</span>
                                            <span className="coin-btn decrease">-1,61%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>      
                    </div>
                    <div className="tab-pane fade" id="meme" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name/Revenue
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>24h change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-6.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-7.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-8.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-9.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-10.jpg" alt="img" className="img"/>
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
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-14.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">OP_ETH</p>
                                            <span className="text-secondary">$15,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,47</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$11,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.034,60</span>
                                            <span className="coin-btn decrease">-0,57%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-15.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WSTETH</p>
                                            <span className="text-secondary">$11,49M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$2.121,39</span>
                                            <span className="coin-btn decrease">-1,61%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>     
                    </div>
                    <div className="tab-pane fade" id="staking" role="tabpanel">
                        <div className="d-flex justify-content-between">
                            Name/Revenue
                            <p className="d-flex gap-8">
                                <span>Last price</span>
                                <span>24h change</span>
                            </p>
                        </div>
                        <ul className="mt-16">
                            <li>
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-6.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-7.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-8.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-9.jpg" alt="img" className="img"/>
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
                                    <img src="assets/images/coin/coin-10.jpg" alt="img" className="img"/>
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
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-14.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">OP_ETH</p>
                                            <span className="text-secondary">$15,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$1.878,47</span>
                                            <span className="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WBTC</p>
                                            <span className="text-secondary">$11,5M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$30.034,60</span>
                                            <span className="coin-btn decrease">-0,57%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-16">
                                <a href="choose-payment.html" className="coin-item style-2 gap-12">
                                    <img src="assets/images/coin/coin-15.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-button">WSTETH</p>
                                            <span className="text-secondary">$11,49M</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-12">
                                            <span className="text-small">$2.121,39</span>
                                            <span className="coin-btn decrease">-1,61%</span>
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
        <Link to="/">
            <i className="icon icon-home2"></i>
            Home
            </Link>
        </li>
        <li>
        <Link to="/exchange">
            <i className="icon icon-exchange"></i>
            Exchange
            </Link>
        </li>
        <li>
        <Link to="/earn">
            <i className="icon icon-earn"></i>
            Earn
            </Link>
        </li>
        <li>
        <Link to="/wallet">
            <i className="icon icon-wallet"></i>
            Wallet
            </Link>
        </li>
      </ul>
    </div>
    <div className="modal fade action-sheet" id="filter">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Filters</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul className="mt-20 pb-16">
                    <li>
                        <div className="item-check active coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Ethereum
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-11.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Arbitrum
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-12.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                zkSync Era
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-9.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Tron
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-10.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                BNB Chain
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-13.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Polygon
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Optimism
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-7.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Avalanche C
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-8.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Fantom
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li className="mt-4">
                         <div className="item-check coin-item style-2 gap-8">
                            <img src="assets/images/coin/coin-6.jpg" alt="img" className="img"/>
                            <p className="content text-large">
                                Conflux eSpace
                                <i className="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
            
        </div>
    </div>
      
    
</div>
    )
}

