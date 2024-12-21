

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Choosepayment (){

    return (
<div>
{/* 
    <div class="preload preload-container">
        <div class="preload-logo" style={{backgroundImage: "url('images/logo/144.png')"}}>
            <div class="spinner"></div>
        </div>
    </div> */}

    <div class="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" class="left back-btn"><i class="icon-left-btn"></i></a>
        <h3>Choose payment method</h3>
    </div>
    <div class="pt-45 pb-16">
        <div class="tf-container">
            <div class="mt-4 text-center">
                <p class="text-small">you will pay</p>
                <div class="mt-8">
                    <h1 class="d-inline-block text-primary">1200.0</h1>
                    <h4 class="d-inline-block text-primary">USD</h4>
                </div>
          
            </div>
            <ul class="mt-20">
                <li>
                    <a href="recharge.html" class="accent-box item-check-style3 bg-menuDark">
                        <label for="radio1" class="content d-flex justify-content-between">
                            <div class="flex-grow-1">
                                <span class="text-small">Wallet transactions</span>
                                <h5 class="mt-8 d-flex align-items-center gap-4"><i class="icon-wallet icon"></i> Wallet transfer</h5>
                            </div>
                            <h4>1200.0$</h4>
                        </label>
                    </a>
                    
                </li>
                <li class="mt-12">
                    <a href="choose-bank.html" class="accent-box item-check-style3 bg-menuDark">
                        <label for="radio2" class="content">
                            <div class="flex-grow-1">
                                <span class="text-small">Card/bank account</span>
                                <h5 class="mt-8 d-flex align-items-center gap-4"><i class="icon-wallet icon"></i> Credit/debit card</h5>
                            </div>
                            <h4>1200.0$</h4>
                        </label>
                    </a>
           
                </li>
            </ul>
        </div>
    </div>


    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

    
    </div>
    )
}
