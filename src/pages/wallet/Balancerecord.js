import React from 'react';

export default function Binance() {
  return (
    <div>
      {/* Preload */}
      {/* /Preload */}

      <div className="header-style2 fixed-top bg-menuDark">
        <div className="d-flex justify-content-between align-items-center gap-14">
          <div className="box-account style-2">
            <a href="user-info.html">
              <img src="images/avt/avt2.jpg" alt="User Avatar" className="avt" />
            </a>
            <div className="search-box box-input-field style-2">
              <a href="home-search.html" className="icon-search"></a>
              <input
                type="text"
                placeholder="Looking for crypto"
                required
                className="clear-ip"
              />
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
              <span className="text-primary">My Wallet</span> -{' '}
              <a
                href="#"
                className="choose-account"
                data-bs-toggle="modal"
                data-bs-target="#accountWallet"
              >
                <span className="dom-text">Account 1 </span>&nbsp;
                <i className="icon-select-down"></i>
              </a>
            </h5>
            <h1 className="mt-16">
              <a href="#">$2159.34</a>
            </h1>
            <ul className="mt-16 grid-4 m--16">
              <li>
                <a
                  href="choose-payment.html"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-way"></i>
                  </span>
                  Deposit
                </a>
              </li>
              <li>
                <a
                  href="qr-code2.html"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-way2"></i>
                  </span>
                  Withdraw
                </a>
              </li>
              <li>
                <a
                  href="buy-quantity.html"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-wallet"></i>
                  </span>
                  Pay
                </a>
              </li>
              <li>
                <a
                  href="earn.html"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-exchange"></i>
                  </span>
                  UGas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h5>U Trading</h5>
            <h5>Spot (USDT)</h5>
            <ul className="mt-16 grid-3 gap-12">
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <h5>0.00</h5>
                  Capital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <h5>0.00</h5>
                  Robot Invest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <h5>0.00</h5>
                  Available
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h5>Futures (USDT)</h5>
            <ul className="mt-16 grid-3 gap-12">
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <h5>0.00</h5>
                  Capital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <h5>0.00</h5>
                  Robot Invest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                >
                  <h5>0.00</h5>
                  Available
                </a>
              </li>
            </ul>
            <h6>
              Please Transfer Funds From Funding Account To Trading Account To
              Proceed With Trading
            </h6>
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
              Markets
            </a>
          </li>
          <li>
            <a href="earn.html">
              <i className="icon icon-earn"></i>
              Trades
            </a>
          </li>
          <li>
            <a href="wallet.html">
              <i className="icon icon-wallet"></i>
              Robot
            </a>
          </li>
          <li>
            <a href="wallet.html">
              <i className="icon icon-wallet"></i>
              Assets
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
