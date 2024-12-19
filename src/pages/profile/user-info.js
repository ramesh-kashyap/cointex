
export default function Userinfo(){

    return (
        <>
         <div class="preload preload-container">
        <div class="preload-logo" style="background-image: url('images/assets/logo/144.png')">
            <div class="spinner"></div>
        </div>
    </div>
   

    <div class="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" class="left back-btn"><i class="icon-left-btn"></i></a>
        <a href="qr-code.html" class="right text-secondary"><i class="icon-barcode"></i></a>
    </div>
    <div class="pt-45 pb-16">
        <div class="bg-menuDark tf-container">
            <a href="profile.html" class="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                <div class="box-account">
                    <img src="images/assets/avt/avt2.jpg" alt="img" class="avt" />
                    <div class="info">
                        <h5>Tony Nguyen</h5>
                        <p class="text-small text-secondary mt-8 mb-8">Profile and settings</p>
                        <span class="tag-xs style-2 round-2 red">Unverified</span>
                    </div>
                </div>
                <span class="arr-right"><i class="icon-arr-right"></i></span>    
            </a>
            
        </div>
        <div class="bg-menuDark tf-container">
            <div class="pt-12 pb-12 mt-4">
                <h5>Buy cryptocurrencies</h5>
                <ul class="mt-16 grid-3 gap-12">
                    <li>
                        <a href="#cryptocurrency" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center" data-bs-toggle="modal">
                            <i class="icon icon-currency"></i>
                            Currency 
                        </a>
                    </li>
                    <li>
                        <a href="exchange-market.html" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-swap"></i>
                             Exchange
                        </a>
                    </li>
                  
                </ul>
            </div>
        </div>
        <div class="bg-menuDark tf-container">
            <div class="pt-12 pb-12 mt-4">
                <h5>Exchange</h5>
                <ul class="mt-16 grid-3 gap-12">
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-convert"></i>
                            Convert
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-metalogo"></i>
                            Consign
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-bank"></i>
                            Deposit
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-fileText"></i>
                            Futures contract
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-graph"></i>
                            Ageless
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-grid-nine"></i>
                            Choice
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-game-control"></i>
                            Simulated trading
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-robot"></i>
                            Bot
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                            <i class="icon icon-database"></i>
                            Copy
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-menuDark tf-container">
            <div class="pt-12 pb-12 mt-4">
                <h5>Help center</h5>
                <ul class="mt-16 grid-3 gap-12">
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <i class="icon icon-globe"></i>
                            Community
                        </a>
                    </li>
                    <li>
                        <a href="#" class="tf-list-item d-flex flex-column gap-8 align-items-center">
                            <i class="icon icon-headset"></i>
                            Support
                        </a>
                    </li>
                  
                </ul>
            </div>
        </div>
        <div class="bg-menuDark tf-container">
            <a href="#" class="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                <h5>About Cointex</h5>
                <span class="arr-right"><i class="icon-arr-right"></i></span>    
            </a>
            
        </div>
    </div>

   
    <div class="modal fade modalRight" id="cryptocurrency">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                    <span class="left" data-bs-dismiss="modal"  aria-hidden="true"><i class="icon-left-btn"></i></span>
                    <h3>Choose cryptocurrency</h3>
                </div>
                <div class="overflow-auto pt-45 pb-16">
                    <div class="tf-container">
                        <div class="mt-8 search-box box-input-field">
                            <i class="icon-search"></i>
                            <input type="text" placeholder="Search cryptocurrency" required class="clear-ip" />
                            <i class="icon-close"></i>
                        </div>
                        <h5 class="mt-12">Popular search</h5>
                        <ul class="mt-16">
                            <li>
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-3.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">Ethereum</p>
                                            <span class="text-secondary text-small">ETH</span>
                                        </div>
                                        <span class="text-small">$30.776,93</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-1.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">Bitcoin</p>
                                            <span class="text-secondary text-small">BTC</span>
                                        </div>
                                        <span class="text-small">$1.936,79</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-14.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">TetherUS</p>
                                            <span class="text-secondary text-small">USDT</span>
                                        </div>
                                        <span class="text-small">$0,999999</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-7.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">BNB</p>
                                            <span class="text-secondary text-small">BNB</span>
                                        </div>
                                        <span class="text-small">$243,41</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-9.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">Ripple</p>
                                            <span class="text-secondary text-small">XRP</span>
                                        </div>
                                        <span class="text-small">$0,487814</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-4.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">Cardano</p>
                                            <span class="text-secondary text-small">ADA</span>
                                        </div>
                                        <span class="text-small">$0,294842</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-11.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">BUSD</p>
                                            <span class="text-secondary text-small">BUSD</span>
                                        </div>
                                        <span class="text-small">$0,999899</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-8.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">trueUSD</p>
                                            <span class="text-secondary text-small">TUSD</span>
                                        </div>
                                        <span class="text-small">$0,999999</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-5.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">Coin98</p>
                                            <span class="text-secondary text-small">C98</span>
                                        </div>
                                        <span class="text-small">$0,169888</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mt-16">
                                <a href="#" class="coin-item style-2 gap-12">
                                    <img src="images/assets/coin/coin-6.jpg" alt="img" class="img" />
                                    <div class="content">
                                        <div class="title">
                                            <p class="mb-4 text-large">Kurama</p>
                                            <span class="text-secondary text-small">KRM</span>
                                        </div>
                                        <span class="text-small">$21.89,39</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    
        </>
    )}