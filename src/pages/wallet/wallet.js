import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Wallet(){
    return(
<div className="app-wallet">
    {/* <div className="preload preload-container">
        <div className="preload-logo" style={{ backgroundImage: "url('assets/images/logo/144.png')" }}>
            <div className="spinner"></div>
        </div>
    </div> */}
    <div className="header-style2 fixed-top bg-menuDark">
        <div className="d-flex justify-content-between align-items-center">
            <a className="box-account" href="user-info.html">
                <img src="assets/images/avt/avt2.jpg" alt="img" className="avt"/>
                <div className="info">
                    <p className="text-xsmall text-secondary">Welcome back!</p>
                    <h5 className="mt-4">Tony Nguyen</h5>

                </div>
            </a>
            <div className="d-flex align-items-center gap-8">
                <a href="choose-cryptocurrency.html" className="icon-search"></a>
                <a href="#notification" className="icon-noti box-noti" data-bs-toggle="modal"></a>
            </div>
        </div>
    </div>
    <div className="pt-68 pb-80">
        <div className="bg-menuDark tf-container">
            <div className="pt-12 pb-12 mt-4">
                <h5><span className="text-primary">My Wallet</span> - <a href="#" className="choose-account" data-bs-toggle="modal" data-bs-target="#accountWallet"><span className="dom-text">Account 1 </span> &nbsp;<i className="icon-select-down"></i></a> </h5>
                <h1 className="mt-16"><a href="#">$2159,34</a></h1>
                <ul className="mt-16 grid-4 m--16">
                    <li>
                        <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-way"></i></span>
                            Send
                        </a>
                    </li>
                    <li>
                        <a href="qr-code2.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-way2"></i></span>
                            Receive
                        </a>
                    </li>
                    <li>
                        <a href="buy-quantity.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-wallet"></i></span>
                            Buy
                        </a>
                    </li>
                    <li data-bs-toggle="modal" data-bs-target="#walletHistory">
                        <a href="javascript:void(0);" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-history"></i></span>
                            History
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bg-menuDark tf-container">
            <div className="pt-12 pb-12 mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Latest recipient</h5>
                    <a href="#recipient" data-bs-toggle="modal" className="text-secondary">View All</a>
                </div>
                <ul className="mt-16 grid-5 gap-12">
                    <li>
                        <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                            <img src="assets/images/avt/avt3.jpg" alt="img" className="box-round"/>
                            <p className="text-center">Jane Cooper</p>
                        </a>
                    </li>
                    <li>
                        <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <img src="assets/images/avt/avt4.jpg" alt="img" className="box-round"/>
                            <p className="text-center">Wade Warren</p>

                        </a>
                    </li>
                    <li>
                        <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <img src="assets/images/avt/avt5.jpg" alt="img" className="box-round"/>
                            <p className="text-center">Jenny Wilson</p>
                        </a>
                    </li>
                    <li>
                        <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <img src="assets/images/avt/avt6.jpg" alt="img" className="box-round"/>
                            <p className="text-center">Jenny Wilson</p>
                        </a>
                    </li>
                    <li>
                        <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <img src="assets/images/avt/avt7.jpg" alt="img" className="box-round"/>
                            <p className="text-center">Robert Fox</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bg-menuDark tf-container">
            <div className="tf-tab pt-12 mt-4">
                <div className="tab-slide">
                    <ul className="nav nav-tabs wallet-tabs" role="tablist" >
                        <li className="item-slide-effect"></li>
                        <li className="nav-item active" role="presentation">   
                            <button className="nav-link active"  data-bs-toggle="tab" data-bs-target="#history">History</button>
                        </li>
                        <li className="nav-item" role="presentation">
							<button className="nav-link" data-bs-toggle="tab" data-bs-target="#market">Market</button>
						</li>
                        
                        
                    </ul>
                </div>
                <div className="tab-content pt-16 pb-16">
					<div className="tab-pane fade active show" id="history" role="tabpanel">
						<ul>
                            <li>
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Bitcoin</p>
                                            <span className="text-secondary">11:34 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> BTC 0.0056</p>
                                            <p className="text-end"><span className="text-red">-</span> $950.50</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-2.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Withdraw</p>
                                            <span className="text-secondary">1:12 PM</span>
                                        </div>
                                           
                                        <p className="text-small"><span className="text-red">-</span> 2,700.00</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Ethereum</p>
                                            <span className="text-secondary">12:00 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                            <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-4.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Anchor</p>
                                            <span className="text-secondary">12:00 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                            <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
					</div>
					<div className="tab-pane fade" id="market" role="tabpanel">
						<ul>
                            <li>
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Bitcoin</p>
                                            <span className="text-secondary">11:34 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> BTC 0.0056</p>
                                            <p className="text-end"><span className="text-red">-</span> $950.50</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-2.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Withdraw</p>
                                            <span className="text-secondary">1:12 PM</span>
                                        </div>
                                           
                                        <p className="text-small"><span className="text-red">-</span> 2,700.00</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Ethereum</p>
                                            <span className="text-secondary">12:00 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                            <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                    <img src="assets/images/coin/coin-4.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Anchor</p>
                                            <span className="text-secondary">12:00 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                            <p className="text-end"><span className="text-red">-</span> $12948,68</p>
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
   
    <div className="modal fade action-sheet" id="accountWallet">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Wallet</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul className="mt-20 pb-16">
                    <li data-bs-dismiss="modal"><div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">Account 1 <i className="icon icon-check-circle"></i> </div></li>
                    <li className="mt-4" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Account 2 <i className="icon icon-check-circle"></i></div></li>
                </ul>
            </div>
            
        </div>
    </div>
    <div className="modal fade modalRight" id="walletHistory">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                    <span className="left" data-bs-dismiss="modal"  aria-hidden="true"><i className="icon-left-btn"></i></span>
                    <h3>History</h3>
                    <span className="right text-white btn-filter-history"><i className="icon-funnel"></i></span>
                </div>
                <div className="overflow-auto pt-45 pb-16">
                    <div className="tf-container">
                        <ul className="mt-4">
                            <li>
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Bitcoin</p>
                                            <span className="text-secondary">11:34 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> BTC 0.0056</p>
                                            <p className="text-end"><span className="text-red">-</span> $950.50</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-2.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Withdraw</p>
                                            <span className="text-secondary">1:12 PM</span>
                                        </div>
                                           
                                        <p className="text-small"><span className="text-red">-</span> 2,700.00</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Ethereum</p>
                                            <span className="text-secondary">12:00 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                            <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-2.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Deposit</p>
                                            <span className="text-secondary">11:34 AM</span>
                                        </div>
                                        <p className="text-small"><span className="text-primary">+</span> 2,700.00</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Bitcoin</p>
                                            <span className="text-secondary">11:34 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> BTC 1,45</p>
                                            <p className="text-end"><span className="text-red">-</span> $12847.594</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-1.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Bitcoin</p>
                                            <span className="text-secondary">11:34 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> BTC 32,766</p>
                                            <p className="text-end"><span className="text-red">-</span> $23.0983,28</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-3.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Ethereum</p>
                                            <span className="text-secondary">12:00 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                            <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-8">
                                <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                    <img src="assets/images/coin/coin-4.jpg" alt="img" className="img"/>
                                    <div className="content">
                                        <div className="title">
                                            <p className="mb-4 text-large">Anchor</p>
                                            <span className="text-secondary">12:00 AM</span>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                            <p className="text-end"><span className="text-red">-</span> $12948,68</p>
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
    <div className="modal fade action-sheet" id="filterHistory">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Filters</span>
                    <span className="icon-cancel" data-bs-dismiss="modal" aria-hidden="true"></span>
                </div>
                <div className="modal-body">
                    <div className="text-button fw-6 text-white">Time</div>
                    <ul className="grid-2 rcg-12-16 mt-16">
                        <li><a href="javascript:void(0);" className="tf-btn xs line active text-secondary item-time">All</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">24 Hours</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">7 Days</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">12 Days </a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">30 Days</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">3 Month</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">6 Month</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">12 Month</a></li>
                    </ul>
                    <div className="text-button fw-6 text-white mt-16">Categories</div>
                    <ul className="grid-2 rcg-12-16 mt-16">
                        <li><a href="javascript:void(0);" className="tf-btn xs line active text-secondary item-category">All</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">Transfer money</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">Receive money</a></li>
                    </ul>
                    <div className="mt-16 pt-16 line-t grid-2 gap-16">
                        <a href="javascript:void(0);" className="tf-btn sm secondary" data-bs-dismiss="modal">Delete</a>
                        <a href="javascript:void(0);" className="tf-btn sm primary" data-bs-dismiss="modal">Apply</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div className="modal fade modalRight" id="recipient">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                    <span className="left" data-bs-dismiss="modal"  aria-hidden="true"><i className="icon-left-btn"></i></span>
                    <h3>Latest recipient</h3>
                </div>
                <div className="overflow-auto pt-45 pb-16">
                    <div className="tf-container">
                        <ul className="mt-12 grid-4 rg-16 cg-25">
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt7.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Jane Cooper</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt8.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Wade Warren</p>
        
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt5.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Esther Howard</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt9.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Jenny Wilson</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt10.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Arlene McCoy</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt11.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Eleanor Pena</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt12.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Esther Howard</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt13.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Theresa Webb</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt14.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Ronald Richards</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt15.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Robert Fox</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt16.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">William son</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt17.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Kristin Watson</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt18.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Brooklyn Sim</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt19.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Guy Hawkins</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt20.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Dianne Russell</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt2.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Marvin Kinney</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt21.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Darrell Steward</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt22.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Court Henry</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt23.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Kathryn Murphy</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt24.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Annette Black</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt25.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Jenny Wilson</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt26.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Jane Cooper</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt27.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Bessie Cooper</p>
                                </a>
                            </li>
                            <li>
                                <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="assets/images/avt/avt28.jpg" alt="img" className="box-round"/>
                                    <p className="text-center">Savan Nguyen</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
               
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
    

    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

   
    
</div>
    )
}

