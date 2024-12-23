import React ,{useStates} from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default function Blogdetails(){
    return(
        <div>

    <div className="header absolute">
        <div className="tf-container">
            <div className="d-flex justify-content-between align-items-center mt-12">
                <a href="#" className="box-icon back-btn"><i className="icon-left-btn"></i></a>
                <a className="box-icon text-secondary"><i className="icon-share"></i></a>
            </div>
        </div>
        
    </div>
    <div className="wrapper-blog">
        <img src="assets/images/blog/banner-blog.jpg" alt="images" className="banner-blog"/>
    </div>
    <div className="pt-16 pb-16">
        <div className="tf-container">
            <a href="#" className="tag-xs primary round-1">Crypto</a>
            <h3 className="mt-6">The Nightmare Before Christmas - Bomb Threats and Bitcoin</h3>
            <div className="d-flex justify-content-between align-items-center mt-12">
                <ul className="box-user-blog">
                    <li className="d-flex align-items-center">
                        <img src="assets/images/avt/avt1.jpg" alt="img" className="avt"/>
                        &ensp;
                        <p>by <span className="text-white">Themesflat</span></p> 
                    </li>
                    <li className="text-white d-flex align-items-center">
                        <i className="icon-clock"></i>
                        &nbsp;5 Min Read
                    </li>
                </ul>
                <a href="#" className="tag-xs primary round-1">Follow</a>
            </div>
            <ul className="d-flex gap-6 mt-12 flex-wrap">
                <li>
                    <a href="#" className="list-item-social">
                        <i className="icon icon-fb"></i>
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="#" className="list-item-social">
                        <i className="icon icon-tw"></i>
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="#" className="list-item-social">
                        <i className="icon icon-discord"></i>
                        Discord
                    </a>
                </li>
                <li>
                    <a href="#" className="list-item-social">
                        <i className="icon icon-gmail"></i>
                        Gmail
                    </a>
                </li>

            </ul>
            <h5 className="mt-12">1. Cash Wallets</h5>
            <p className="mt-8 text-large">
                cash wallet is where you keep your valuable cash. If you lose it, you lose your money. So you keep it physically secure at all times and don’t give it to anyone else.
            </p>
            <p className="mt-8 text-large">
                A digital wallet is used to store valuable digital currency. A digital wallet needs a key to open it, but if you lose the key someone else might be able to open it without you knowing, so losing the key effectively means you have lost the wallet and the money it holds.
            </p>
        </div>
    </div>

    
</div>
    )
}