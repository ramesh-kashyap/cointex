
export default function(){
    return(
<body>
    {/* <div class="preload preload-container">
        <div class="preload-logo" style={{backgroundImage: "url('images/logo/144.png')"}}>
            <div class="spinner"></div>
        </div>
    </div> */}

    <div class="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h3>Earn</h3>
        <i class="icon-funnel text-white" data-bs-toggle="modal" data-bs-target="#filter"></i>
    </div>

    <div class="pt-55 pb-80">
        <div class="tf-container">
            <div class="mt-4 search-box box-input-field">
                <a href="home-search.html" class="icon-search"></a>
                <input type="text" placeholder="Cryptocurrency search, protocol" required class="clear-ip"/>
                <i class="icon-close"></i>
            </div>
            <h5 class="mt-20">Create & sell your Wallet</h5>
            <div class="swiper tf-swiper swiper-wrapper-r mt-12" data-space-between="12" data-preview="1.3" data-tablet="2.3" data-desktop="3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                       <div class="accent-box-v5 bg-menuDark active">
                            <span class="icon-box bg-icon1"><i class="icon-book"></i></span>
                            <div class="mt-12">
                                <a href="#" class="text-small">Set up your wallet</a>
                                <p class="mt-4">Click Create and set up your collection.
                                    Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                            </div>
                       </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="accent-box-v5 bg-menuDark">
                            <span class="icon-box bg-icon2"><i class="icon-wallet-money"></i></span>
                            <div class="mt-12">
                                <a href="#" class="text-small">Create Your Collection</a>
                                <p class="mt-4">Click Create and set up your collection. 
                                    Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <ul class="menu-tab-v3" role="tablist">
                    <li class="nav-link active" data-bs-toggle="tab" data-bs-target="#cryptocurrency"  role="tab" aria-controls="cryptocurrency" aria-selected="true">
                        Stablecoin    
                    </li>
                    <li class="nav-link" data-bs-toggle="tab" data-bs-target="#stablecoin" role="tab" aria-controls="stablecoin" aria-selected="false">
                        Single Cryptocurrency    
                    </li>
                    <li class="nav-link" data-bs-toggle="tab" data-bs-target="#vault" role="tab" aria-controls="vault" aria-selected="false">
                        Vault   
                    </li>
                </ul>
                <div class="tab-content mt-16 mb-16">
                    <div class="tab-pane fade show active" id="cryptocurrency" role="tabpanel">
                        <ul>
                            <li>
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">ETH</p>
                                            <span class="text-secondary">$360,6M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,80</span>
                                            <span class="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">arb_ETH</p>
                                            <span class="text-secondary">$132,18M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,80</span>
                                            <span class="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">WBTC</p>
                                            <span class="text-secondary">$50,56M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$30.001,96</span>
                                            <span class="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">ARB</p>
                                            <span class="text-secondary">$31,55M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1,11</span>
                                            <span class="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">WETH</p>
                                            <span class="text-secondary">$24,34M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,56</span>
                                            <span class="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">MATIC</p>
                                            <span class="text-secondary">$19,36M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$0,666</span>
                                            <span class="coin-btn decrease">-4,42%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>  
                    </div>
                    <div class="tab-pane fade" id="stablecoin" role="tabpanel">
                        <ul>
                            <li>
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">ETH</p>
                                            <span class="text-secondary">$360,6M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,80</span>
                                            <span class="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">arb_ETH</p>
                                            <span class="text-secondary">$132,18M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,80</span>
                                            <span class="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">WBTC</p>
                                            <span class="text-secondary">$50,56M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$30.001,96</span>
                                            <span class="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">ARB</p>
                                            <span class="text-secondary">$31,55M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1,11</span>
                                            <span class="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">WETH</p>
                                            <span class="text-secondary">$24,34M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,56</span>
                                            <span class="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">MATIC</p>
                                            <span class="text-secondary">$19,36M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$0,666</span>
                                            <span class="coin-btn decrease">-4,42%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>      
                    </div>
                    <div class="tab-pane fade" id="vault" role="tabpanel">
                        <ul>
                            <li>
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-6.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">ETH</p>
                                            <span class="text-secondary">$360,6M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,80</span>
                                            <span class="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-7.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">arb_ETH</p>
                                            <span class="text-secondary">$132,18M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,80</span>
                                            <span class="coin-btn increase">+1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-8.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">WBTC</p>
                                            <span class="text-secondary">$50,56M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$30.001,96</span>
                                            <span class="coin-btn decrease">-1,64%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-3.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">ARB</p>
                                            <span class="text-secondary">$31,55M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1,11</span>
                                            <span class="coin-btn increase">+3,71%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-9.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">WETH</p>
                                            <span class="text-secondary">$24,34M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$1.878,56</span>
                                            <span class="coin-btn decrease">-1,62%</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="choose-payment.html" class="coin-item style-2 gap-12">
                                    <img src="images/coin/coin-10.jpg" alt="img" class="img"/>
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-button">MATIC</p>
                                            <span class="text-secondary">$19,36M</span>
                                        </div>
                                        <div class="d-flex align-items-center gap-12">
                                            <span class="text-small">$0,666</span>
                                            <span class="coin-btn decrease">-4,42%</span>
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
    
    <div class="menubar-footer footer-fixed">
        <ul class="inner-bar">
            <li>
                <a href="home.html">
                    <i class="icon icon-home2"></i>
                    Home
                </a>
            </li>
            <li>
                <a href="exchange-market.html">
                    <i class="icon icon-exchange"></i>
                    Exchange
                </a>
            </li>
            <li class="active">
                <a href="earn.html">
                    <i class="icon icon-earn2"></i>
                    Earn
                </a>
            </li>
            <li>
                <a href="wallet.html">
                    <i class="icon icon-wallet"></i>
                    Wallet
                </a>
            </li>
        </ul>
    </div>

    <div class="modal fade action-sheet" id="filter">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span>Filters</span>
                    <span class="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul class="mt-20 pb-16">
                    <li>
                        <div class="item-check active coin-item style-2 gap-8">
                            <img src="images/coin/coin-3.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Ethereum
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-11.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Arbitrum
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-12.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                zkSync Era
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-9.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Tron
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-10.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                BNB Chain
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-13.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Polygon
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-1.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Optimism
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-7.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Avalanche C
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-8.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Fantom
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>
                    <li class="mt-4">
                         <div class="item-check coin-item style-2 gap-8">
                            <img src="images/coin/coin-6.jpg" alt="img" class="img"/>
                            <p class="content text-large">
                                Conflux eSpace
                                <i class="icon icon-check-circle"></i>
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
            
        </div>
    </div>
    
</body>
    )
}

