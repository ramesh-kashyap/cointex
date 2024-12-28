import React from 'react';

const Apibind = () => {
    return (
        <div>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="javascript:void(0);" className="left back-btn">
                    <i className="icon-left-btn"></i>
                </a>
                <h3>Binance Us</h3>
            </div>

            <div className="pt-45 pb-90">
                <div className="tf-container">
                    <ul className="mt-20">
                        <li>
                            <a href="recharge.html" className="accent-box item-check-style3 bg-menuDark">
                                <label htmlFor="radio1" className="content d-flex justify-content-between">
                                    <div className="flex-grow-1">
                                        <h6 className="mt-8 d-flex align-items-center gap-4">API import Guide</h6>
                                    </div>
                                    <h6>View </h6>
                                </label>
                            </a>
                        </li>
                    </ul>

                    <ul className="mt-12 accent-box-v4 bg-menuDark">
                        <h6>Please Activate Trading Authority</h6>
                        <br />
                        <li className="d-flex align-items-center justify-content-between">
                            <span className="text-small">
                                Crypto regulation around the world. Importance of securing your crypto assets. Avoiding scams and phishing attacks. <br />
                                Crypto regulation around the world. Importance of securing your crypto assets. Avoiding scams and phishing attacks.
                            </span>
                        </li>
                    </ul>

                    <br />
                    <br />

                    <ul className="mt-12 accent-box-v4 bg-menuDark">
                        <h6>API Key</h6>
                        <br />
                        <input
                            type="text"
                            placeholder="Please Enter Api Key"
                            style={{
                                border: "2px solid #7e8088",
                                color: "white",
                                padding: "5px",
                                backgroundColor: "transparent"
                            }}
                        />
                        <br />
                        <br />
                        <h6>Secret Key</h6>
                        <br />
                        <input
                            type="text"
                            placeholder="Please Enter Secret Key"
                            style={{
                                border: "2px solid #7e8088",
                                color: "white",
                                padding: "5px",
                                backgroundColor: "transparent"
                            }}
                        />
                        <br />
                    </ul>

                    <div className="inner-bar">
                        <a href="#" className="tf-btn lg primary" data-bs-toggle="modal" data-bs-target="#otpPin">
                            Import
                        </a>
                    </div>

                    <ul className="mt-12 accent-box-v4 bg-menuDark">
                        <span className="text-small">Tips</span>
                        <br />
                        <br />
                        <li className="d-flex align-items-center justify-content-between">
                            <span className="text-small">
                                Crypto regulation around the world. Importance of securing your crypto assets. Avoiding scams and phishing attacks. <br />
                                Crypto regulation around the world. Importance of securing your crypto assets. Avoiding scams and phishing attacks.
                            </span>
                        </li>
                        <br />
                    </ul>
                </div>
            </div>

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
                                <input required type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" value="3" />
                                <input required type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" value="6" />
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
                            <h1 className="mt-8 text-primary">$1200.0</h1>
                            <p className="mt-16 text-surface text-button">Notification</p>
                            <p className="text-small mt-4">BTC payment</p>
                        </div>
                        <a href="home.html" className="tf-btn lg primary mt-40">
                            Done
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apibind;
