import React from 'react';
import {  HandleGoBack } from '../../Helper/helper';
const Withdraw = () => {
    const goBack = HandleGoBack();
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#121212', color: '#ffffff' }}>
            <header className="header fixed-top bg-surface d-flex justify-content-center align-items-center" style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#1e1e1e', borderBottom: '1px solid #333' }}>
                <a onClick={goBack} className="left back-btn" style={{ marginRight: '10px' }}><i className="icon-left-btn" /></a>
                <h3 style={{ margin: 0 }}>Withdraw</h3>
                <a href="javascript:void(0);" className="right" style={{ marginLeft: 'auto' }}><i className="icon-question" /></a>
            </header>

            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <div className="container">
                        <div className="section" style={{ backgroundColor: '#1e1e1e', padding: '15px', marginTop: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                            <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px' }}>Crypto</div>
                            <div className="section-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <img 
                                    alt="USDT(Tether) logo" 
                                    src="https://storage.googleapis.com/a1aa/image/Tsz3tZQDy74ABxceVklKUGYmxAns9eVT3ffewdW3TCyfBOnfJA.jpg" 
                                    style={{ width: '24px', height: '24px', marginRight: '10px' }}
                                />
                                <span style={{ fontSize: '14px' }}>USDT(Tether)</span>
                            </div>
                        </div>

      <div className="pt-45 pb-90">
        <div className="tf-container">
          <ul className="mt-20">
            <li>
              <a
                href="recharge.html"
                className="accent-box item-check-style3 bg-menuDark"
              >
                <label htmlFor="radio1" className="content d-flex justify-content-between">
                  <div className="flex-grow-1">
                    <h5 className="mt-8 d-flex align-items-center gap-4">Crypto</h5>
                  </div>
                  <h4>USDT(Tether)</h4>
                </label>
              </a>
            </li>
            <br />
            <li className="mt-12">
              <a
                href="choose-bank.html"
                className="accent-box item-check-style3 bg-menuDark"
              >
                <label htmlFor="radio2" className="content">
                  <div className="flex-grow-1">
                    <h5 className="mt-8 d-flex align-items-center gap-4">
                      Main chain network
                    </h5>
                  </div>
                  <h4>Polygon Pos</h4>
                </label>
              </a>
            </li>
          </ul>
          <br />
          <br />
          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <br />
            <p>Withdraw Address</p>
            <br />
            <input
              type="text"
              placeholder="Enter Address"
              style={{
                border: "2px solid #7e8088",
                color: "white",
                padding: "5px",
                backgroundColor: "transparent",
              }}
            />
            <br />
            <br />
            <p>Amount</p>
            <br />
            <input
              type="text"
              placeholder="Enter Amount"
              style={{
                border: "2px solid #7e8088",
                color: "white",
                padding: "5px",
                backgroundColor: "transparent",
              }}
            />
          </ul>
        </div>
        <br />
        <div className="tf-container">
          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <li className="d-flex align-items-center justify-content-between pb-8 line-bt">
              <span className="text-small">Transaction fee</span>
              <span className="text-large text-white">Free</span>
            </li>
            <li className="d-flex align-items-center justify-content-between pt-8 pb-8 line-bt">
              <span className="text-small">Amount in words</span>
              <span className="text-large text-white text-end">
                One thousand two <br /> hundred dollars
              </span>
            </li>
            <li className="d-flex align-items-center justify-content-between pt-8 pb-8 line-bt">
              <span className="text-small">Transfer form</span>
              <span className="text-large text-white">Transfer to bank</span>
            </li>
            <li className="d-flex align-items-center justify-content-between pt-8 pb-8">
              <span className="text-small">Notification</span>
              <span className="text-large text-white">BTC</span>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      {/* Footer */}
      <div className="menubar-footer footer-fixed bg-surface">
        <div className="inner-bar">
          <a
            href="javascript:void(0);"
            className="tf-btn lg primary"
            data-bs-toggle="modal"
            data-bs-target="#otpPin"
          >
            Next step
          </a>
        </div>
      </div>

      {/* OTP Modal */}
      <div className="modal fade action-sheet sheet-down" id="otpPin">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header d-flex justify-content-center align-items-center">
              <span
                className="left icon-cancel"
                data-bs-dismiss="modal"
              ></span>
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
            <div className="icon-1 ani3">
              <span className="circle-box lg bg-circle check-icon bg-primary"></span>
            </div>
            <div className="icon-2 ani5">
              <span className="circle-box md bg-primary"></span>
            </div>
            <div className="icon-3 ani8">
              <span className="circle-box md bg-primary"></span>
            </div>
            <div className="icon-4 ani2">
              <span className="circle-box sm bg-primary"></span>
            </div>
            <div className="text-center">
              <h2 className="text-surface">Successful!</h2>
              <p className="text-small mt-8">Your transfer has been done!</p>
              <h5 className="mt-16 text-surface">Transfer amount</h5>
              <h1 className="mt-8 text-primary">$ 1200.0</h1>
              <p className="mt-16 text-surface text-button">Notification</p>
              <p className="text-small mt-4">BTC payment</p>
            </div>

            <a href="home.html" className="tf-btn lg primary mt-40">Done</a>
          </div>
        </div>
      </div>
    </div>
  );
}
