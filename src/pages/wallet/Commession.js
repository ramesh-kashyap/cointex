import Api from '../../Requests/Api';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Commession(){
    const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors
     const navigate = useNavigate();
      useEffect(() => {
    const fetchInvite = async () => {
      try {
        const response = await Api.get('/invite-comession');
        console.log('Response data:', response.data);
        if (response.data.success) {
            setUserData(response.data.rows); // Update state with the user data
            setLoading(false); // Set loading to false
          } else {
            setError(response.data.message || 'Failed to fetch data');
            setLoading(false); // Stop loading
          }
      } 
      catch (err) {
        if (err.response) {
          console.error('Backend error:', err.response.data);
        } else if (err.request) {
          console.error('No response from server. Possible network issue.', err.request);
        } else {
          console.error('Unexpected error:', err.message);
        }
      }
    };

    fetchInvite();
  }, []);
  if (loading) return <p>Loading...</p>; // Show loading message while fetching data
  if (error) return <p>Error: {error}</p>
    return(
        <div className="app-wallet">      
        <div className="pt-8 pb-80">
            <div className="bg-menuDark tf-container">
                <div className="pt-12 pb-12 mt-4">
                    <h5><span className="text-primary">Invite Commession</span> - <a href="#" className="choose-account" data-bs-toggle="modal" data-bs-target="#accountWallet"><span className="dom-text">Account 1 </span> &nbsp;<i className="icon-select-down"></i></a> </h5>
                    <h1 className="mt-16"><a href="#">$2159,34</a></h1>                   
                </div>
            </div>
            <div className="bg-menuDark tf-container">
                <div className="pt-12 pb-12 mt-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>Latest recipient</h5>
                        <a href="#recipient" data-bs-toggle="modal" className="text-secondary">View All</a>
                    </div>
                    {userData && userData.length > 0 ? (
                    <ul className="mt-16 grid-5 gap-12">
                        {userData.map((invite) => (
                        <li  key={invite.id}>
                            <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                <img src="images/avt/avt3.jpg" alt="img" className="box-round"/>
                                <p className="text-center">{invite.name}</p>
                            </a>
                        </li> 
                        ))}                       
                    </ul>
                    ) : (
                        <p>No users found.</p>
                      )}
                </div>
            </div>
            <div className="bg-menuDark tf-container">
                <div className="tf-tab pt-12 mt-4">
                    <div className="tab-slide">
                        <ul className="nav nav-tabs wallet-tabs" role="tablist" >
                            <li className="item-slide-effect"></li>
                            <li className="nav-item active" role="presentation">   
                                <button className="nav-link active"  data-bs-toggle="tab" data-bs-target="#history">Direct</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#market">Indirect</button>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div className="tab-content pt-16 pb-16">
                        <div className="tab-pane fade active show" id="history" role="tabpanel">
                        {userData && userData.length > 0 ? (
                            <ul>   
                                {userData.map((invite) => (                             
                                <li className="mt-8"  key={invite.id}>
                                    <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                        <img src="images/coin/coin-4.jpg" alt="img" className="img"/>
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-large">{invite.name}</p>
                                                <span className="text-secondary">{invite.created_at}</span>
                                            </div>
                                            <div className="box-price">
                                                <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                                <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                ))} 
                            </ul>
                            ) : (
                                <p>No users found.</p>
                              )}
                        </div>
                        <div className="tab-pane fade" id="market" role="tabpanel">
                            <ul>
                                <li>
                                    <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                                        <img src="images/coin/coin-1.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-2.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-4.jpg" alt="img" className="img"/>
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
                <li>
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
                <li className="active">
                    <a href="wallet.html">
                        <i className="icon icon-wallet2"></i>
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
                                        <img src="images/coin/coin-1.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-2.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-2.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-1.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-1.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-3.jpg" alt="img" className="img"/>
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
                                        <img src="images/coin/coin-4.jpg" alt="img" className="img"/>
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
                        {userData && userData.length > 0 ? (
                            <ul className="mt-12 grid-4 rg-16 cg-25">
                                {userData.map((invite) => (
                                <li key={invite.id}>
                                    <a href="choose-payment.html" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                        <img src="images/avt/avt7.jpg" alt="img" className="box-round"/>
                                        <p className="text-center">{invite.name}</p>
                                    </a>
                                </li>
                                ))} 
                            </ul>
                            ) : (
                                <p>No users found.</p>
                              )}
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
     
    
       
        
    </div>
    )
}

