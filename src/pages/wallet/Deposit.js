import React, { useState } from 'react';
import { HandleGoBack } from '../../Helper/helper.js';
function Deposit() {
  // State to track the selected wallet address
  const goBack = HandleGoBack();
  const [selectedAddress, setSelectedAddress] = useState("456789h8765456789765467");

  // Demo wallet addresses
  const walletAddresses = {
    polygon: "123456abcdef789polygon",
    ethereum: "987654zyxwvu321ethereum",
    binance: "654321lmnop098binance",
    solana: "789123ghijk567solana",
  };

  // Handle copying to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(selectedAddress)
      .then(() => {
        alert("Wallet address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <>
      {/* Header */}
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a onClick={goBack} className="left back-btn">
          <i className="icon-left-btn"></i>
        </a>
        <h3>Deposit</h3>
      </div>

      {/* Main Content */}
      <div className="pt-45 pb-90">
        <div className="tf-container">
          <ul className="mt-20">
            <li>
              <a href="recharge.html" className="accent-box item-check-style3 bg-menuDark">
                <label htmlFor="radio1" className="content d-flex justify-content-between">
                  <div className="flex-grow-1">
                    <h6 className="mt-8 d-flex align-items-center gap-4">Crypto</h6>
                  </div>
                  <h6>USDT(Tether)</h6>
                </label>
              </a>
            </li>
          </ul>

          <br />
          <br />

          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <li className="d-flex align-items-center justify-content-between"></li>
            <br />
            <p>Main Chain Network</p>
            <br />

            {/* Wallet Selection */}
            <select
              style={{
                width: '100%',
                maxWidth: '100%',
                padding: '8px',
                backgroundColor: 'transparent',
                border: '2px solid #7e8088',
                color: 'white',
              }}
              onChange={(e) => setSelectedAddress(walletAddresses[e.target.value])}
            >
              <option value="polygon" style={{ color: 'black' }}>Polygon</option>
              <option value="ethereum" style={{ color: 'black' }}>Ethereum</option>
              <option value="binance" style={{ color: 'black' }}>Binance Smart Chain</option>
              <option value="solana" style={{ color: 'black' }}>Solana</option>
            </select>
            <br />
            <br />
            <center>
              <img src="assets/images/234.png" alt="img" style={{ width: '152px' }} />
            </center>
            <br />
            <br />
            <div className="inner-bar">
              <a href="#" className="tf-btn lg primary" data-bs-toggle="modal" data-bs-target="#otpPin">
                Save Qr -Code
              </a>
            </div>
            <br />
          </ul>

          <li>
            <div className="accent-box item-check-style3 bg-menuDark">
              <label htmlFor="radio1" className="content d-flex justify-content-between">
                <div className="flex-grow-1">
                  <span className="text-small">Deposit Address</span>
                  <h5 className="mt-8 d-flex align-items-center gap-4">
                    {selectedAddress}
                  </h5>
                </div>
                <h4>
                  {/* Copy Button */}
                  <i className="icon-copy icon" onClick={handleCopy}></i>
                </h4>
              </label>
            </div>
          </li>

          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <span className="text-small">Tips</span>
            <br />
            <br />
            <li className="d-flex align-items-center justify-content-between">
              <span className="text-small">
                1 Crypto regulation around the world. Importance of securing your crypto assets.
                Avoiding scams and phishing attacks.
                <br />
                Crypto regulation around the world. Importance of
                <br />
                securing your crypto assets. Avoiding scams and phishing attacks.
              </span>
            </li>
            <br />
            <li className="d-flex align-items-center justify-content-between">
              <span className="text-small">
                2 Crypto regulation around the world. Importance of securing your crypto assets.
                Avoiding scams and phishing attacks.
                <br />
                Crypto regulation around the world. Importance of
                <br />
                securing your crypto assets. Avoiding scams and phishing attacks.
              </span>
            </li>
          </ul>
        </div>

        <br />
        <br />

        {/* OTP Modal */}
        <div className="modal fade action-sheet sheet-down" id="otpPin">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="header d-flex justify-content-center align-items-center">
                <span className="left icon-cancel" data-bs-dismiss="modal"></span>
                <h3>Enter your pin</h3>
              </div>
              <div className="modal-body">
                <div className="digit-group">
                  <input required type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" defaultValue="3" />
                  <input required type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" defaultValue="6" />
                  <input required type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
                  <input required type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
                </div>
                <p className="text-center text-small text-white mt-16">Enter your PIN to proceed</p>
                <a href="#" className="mt-40 tf-btn lg primary" data-bs-toggle="modal">
                  Confirm
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        <div className="modal fade modalCenter" id="success">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content success_box">
              <div className="text-center">
                <h2 className="text-surface">Successful!</h2>
                <p className="text-small mt-8">Your transfer has been done!</p>
                <h1 className="mt-8 text-primary">$ 1200.0</h1>
              </div>
              <a href="home.html" className="tf-btn lg primary mt-40">
                Done
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deposit;
