import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';  // Assuming your styles.css is in the src folder

const Confirm = () => {
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleSecretKeyChange = (e) => {
    setSecretKey(e.target.value);
  };

  const handleLogin = () => {
    // Logic for API key and secret submission
    console.log(apiKey, secretKey);
    setOtpModalOpen(true); // Open OTP modal on successful API key entry
  };

  const closeOtpModal = () => {
    setOtpModalOpen(false);
    setSuccessModalOpen(true); // Open Success modal after OTP submission
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <div>
      {/* Preloader */}
      {/* <div className="preload preload-container">
        <div className="preload-logo" style={{ backgroundImage: "url('images/logo/144.png')" }}>
          <div className="spinner"></div>
        </div>
      </div> */}

      {/* Header */}
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn">
          <i className="icon-left-btn"></i>
        </a>
        <h3>Binance Us</h3>
      </div>

      {/* Main Content */}
      <div className="pt-45 pb-90">
        <div className="tf-container">
          <ul className="mt-20">
            <li>
              <a href="recharge.html" className="accent-box item-check-style3 bg-menuDark">
                <label className="content d-flex justify-content-between">
                  <div className="flex-grow-1">
                    <h6 className="mt-8 d-flex align-items-center gap-4"> API import Guide</h6>
                  </div>
                  <h6>View </h6>
                </label>
              </a>
            </li>
          </ul>

          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <h6>Please Activate Trading Authority</h6>
            <p className="text-small">
              Crypto regulation around the world. Importance of securing your crypto assets. Avoiding scams and phishing attacks.
            </p>
          </ul>

          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <h6>API Key</h6>
            <input
              type="text"
              value={apiKey}
              onChange={handleApiKeyChange}
              placeholder="Please Enter API Key"
              style={{ border: '2px solid #7e8088', color: 'white', padding: '5px', backgroundColor: 'transparent' }}
            />

            <h6>Secret Key</h6>
            <input
              type="text"
              value={secretKey}
              onChange={handleSecretKeyChange}
              placeholder="Please Enter Secret Key"
              style={{ border: '2px solid #7e8088', color: 'white', padding: '5px', backgroundColor: 'transparent' }}
            />
          </ul>

          {/* Import Button */}
          <div className="inner-bar">
            <button className="tf-btn lg primary" onClick={handleLogin}>
              Import
            </button>
          </div>

          {/* Trust IPs Section */}
          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <li className="d-flex align-items-center justify-content-between">
              <span className="text-small">Trust IPs Only (Recommended)</span>
              <p className="mt-8 d-flex align-items-center gap-4">
                123432.123.432.5678.987. 345.87654.87654.98765.....
              </p>
            </li>
          </ul>

          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <span className="text-small">Tips</span>
            <p className="text-small">
              Crypto regulation around the world. Importance of securing your crypto assets. Avoiding scams and phishing attacks.
            </p>
          </ul>
        </div>
      </div>

      {/* OTP Modal */}
      {isOtpModalOpen && (
        <div className="modal fade action-sheet sheet-down show" id="otpPin" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="header d-flex justify-content-center align-items-center">
                <span className="left icon-cancel" onClick={() => setOtpModalOpen(false)}></span>
                <h3>Enter your pin</h3>
              </div>
              <div className="modal-body">
                <div className="digit-group">
                  <input required type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" value="3" />
                  <input required type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" value="6" />
                  <input required type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
                  <input required type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
                </div>

                <p className="text-center text-small text-white mt-16">Enter your PIN to proceed</p>
                <button className="mt-40 tf-btn lg primary" onClick={closeOtpModal}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="modal fade modalCenter show" id="success" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content success_box">
              <div className="text-center">
                <h2 className="text-surface">Successful!</h2>
                <p className="text-small mt-8">Your transfer has been done!</p>
                <h5 className="mt-16 text-surface">Transfer amount</h5>
                <h1 className="mt-8 text-primary">$ 1200.0</h1>
                <p className="mt-16 text-surface text-button">Notification</p>
                <p className="text-small mt-4">BTC payment</p>
              </div>
              <button className="tf-btn lg primary mt-40" onClick={closeSuccessModal}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Confirm;
