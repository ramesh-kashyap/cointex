import React, { useState } from 'react';

const Deposit = () => {
    const goBack = HandleGoBack();
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#121212', color: '#ffffff' }}>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center" style={{ display: 'flex', alignItems: 'center', padding: '10px 0', backgroundColor: '#1e1e1e', borderBottom: '1px solid #333' }}>
                <a onClick={goBack}className="left back-btn" style={{ color: '#ffffff', marginRight: '10px' }}>
                    <i className="icon-left-btn"></i>
                </a>
                <h3 style={{ fontSize: '18px', margin: 0 }}>Deposit</h3>
                <a href="javascript:void(0);" className="right" style={{ marginLeft: 'auto', color: '#ffffff' }}>
                    <i className="icon-question"></i>
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
