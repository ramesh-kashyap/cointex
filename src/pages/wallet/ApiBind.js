import React from 'react';


const Apibind = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#121212', color: '#ffffff' }}>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center" style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #333333' }}>
                <a href="javascript:void(0);" className="left back-btn" style={{ color: '#ffffff', marginRight: '10px' }}>
                    <i className="icon-left-btn"></i>
                </a>
                <h3 style={{ fontSize: '20px', margin: 0 }}>Binance</h3>
                <a href="javascript:void(0);" className="right" style={{ marginLeft: 'auto', color: '#ffffff' }}>
                    <i className="icon-question"></i>
                </a>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container" style={{ maxWidth: '1024px', margin: '0 auto', boxSizing: 'border-box' }}>
                    <div className="api-guide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333333', padding: '10px', borderRadius: '5px', margin: '20px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i className="fas fa-file-import" style={{ fontSize: '24px', color: '#ffcc00' }}></i>
                            <span style={{ marginLeft: '10px' }}>API Import Guide</span>
                        </div>
                        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>View</a>
                    </div>
                    <div className="trading-authority" style={{ backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>Please activate trading authority</h2>
                        <p style={{ fontSize: '12px', color: '#888888', margin: 0 }}>API is encrypted by AES, and transmitted by asymmetric encryption when in use, so there is no need to worry about leakage.</p>
                    </div>
                    <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <input type="text" placeholder="Please enter API Key" style={{ flex: 1, padding: '10px', border: '1px solid #333333', borderRadius: '5px', marginRight: '10px', backgroundColor: '#1e1e1e', color: '#ffffff' }} />
                        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Paste</a>
                    </div>
                    <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <input type="text" placeholder="Please enter Secret Key" style={{ flex: 1, padding: '10px', border: '1px solid #333333', borderRadius: '5px', marginRight: '10px', backgroundColor: '#1e1e1e', color: '#ffffff' }} />
                        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Paste</a>
                    </div>
                    <button className="import-button tf-btn lg primary mt-40" style={{ backgroundColor: '#25c866', color: '#000000', padding: '10px', border: 'none', borderRadius: '5px', width: '100%', fontSize: '16px', cursor: 'pointer' }}>Import</button>
                    <div className="ip-addresses" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
                        <p style={{ fontSize: '12px', color: '#888888', margin: 0 }}>13.213.132.125 13.251.83.60 18.139.102.94 3.1.7.213 46.137.215.117 52.220.111.151 ...</p>
                        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Copy</a>
                    </div>
                    <div className="tips" style={{ fontSize: '12px', color: '#888888' }}>
                        <p>Tips:</p>
                        <p>For account assets security and convenient access to transaction data, it is suggested that you re-apply for the API and do not share it with other products or services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apibind;
