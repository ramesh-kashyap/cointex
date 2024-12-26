import React from 'react';

const Withdraw = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#121212', color: '#ffffff' }}>
            <header className="header fixed-top bg-surface d-flex justify-content-center align-items-center" style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#1e1e1e', borderBottom: '1px solid #333' }}>
                <a href="javascript:void(0);" className="left back-btn" style={{ marginRight: '10px' }}><i className="icon-left-btn" /></a>
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

                        <div className="section" style={{ backgroundColor: '#1e1e1e', padding: '15px', marginTop: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                            <div className="section-title" style={{ fontSize: '16px', marginBottom: '10px' }}>Main chain network</div>
                            <div className="section-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '14px' }}>Polygon PoS</span>
                            </div>
                        </div>

                        <div className="section" style={{ backgroundColor: '#1e1e1e', padding: '15px', marginTop: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                            <div className="input-group" style={{ marginTop: '10px' }}>
                                <label htmlFor="withdraw-address" style={{ fontSize: '14px', color: '#888' }}>Withdraw Address</label>
                                <input 
                                    id="withdraw-address" 
                                    placeholder="Long press to paste" 
                                    type="text" 
                                    style={{ 
                                        width: '100%', 
                                        padding: '10px', 
                                        marginTop: '5px', 
                                        border: '1px solid #333', 
                                        borderRadius: '4px', 
                                        fontSize: '14px', 
                                        backgroundColor: '#2c2c2c', 
                                        color: '#ffffff' 
                                    }} 
                                />
                                <i className="fas fa-qrcode" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                            </div>

                            <div className="input-group" style={{ marginTop: '10px' }}>
                                <label htmlFor="amount" style={{ fontSize: '14px', color: '#888' }}>Amount</label>
                                <input 
                                    id="amount" 
                                    placeholder="The min withdrawal must be above 2 USDT" 
                                    type="text" 
                                    style={{ 
                                        width: '100%', 
                                        padding: '10px', 
                                        marginTop: '5px', 
                                        border: '1px solid #333', 
                                        borderRadius: '4px', 
                                        fontSize: '14px', 
                                        backgroundColor: '#2c2c2c', 
                                        color: '#ffffff' 
                                    }} 
                                />
                                <div className="balance" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', fontSize: '12px', color: '#888' }}>
                                    <span>Balance: 0 USDT</span>
                                    <span style={{ color: '#25c866', cursor: 'pointer' }}>All</span>
                                </div>
                            </div>

                            <div className="warning" style={{ backgroundColor: '#3e3e3e', padding: '10px', border: '1px solid #555', borderRadius: '4px', fontSize: '12px', color: '#25c866', marginTop: '10px' }}>
                                <i className="fas fa-exclamation-circle" style={{ marginRight: '5px' }} />
                                Minimum Withdrawal Amount: 2 USDT
                                <br />
                                Do not withdraw directly to a crowdfund or ICO. It is recommended to withdraw funds to an exchange.
                            </div>
                        </div>

                        <div className="section summary" style={{ marginTop: '10px', fontSize: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                <span>Withdrawal Fee</span>
                                <span>1 USDT</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                <span>My Vouchers</span>
                                <span>0</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                <span>Receive Amount</span>
                                <span>0 USDT</span>
                            </div>
                        </div>

                        <div className="button" style={{ backgroundColor: '#25c866', color: '#000', padding: '15px', textAlign: 'center', borderRadius: '4px', marginTop: '20px', fontSize: '16px', cursor: 'pointer' }}>
                            Next step
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
