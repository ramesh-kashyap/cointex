import React from 'react';


const Deposit = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#121212', color: '#ffffff' }}>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center" style={{ display: 'flex', alignItems: 'center', padding: '10px 0', backgroundColor: '#1e1e1e', borderBottom: '1px solid #333' }}>
                <a href="javascript:void(0);" className="left back-btn" style={{ color: '#ffffff', marginRight: '10px' }}>
                    <i className="icon-left-btn"></i>
                </a>
                <h3 style={{ fontSize: '18px', margin: 0 }}>Deposit</h3>
                <a href="javascript:void(0);" className="right" style={{ marginLeft: 'auto', color: '#ffffff' }}>
                    <i className="icon-question"></i>
                </a>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <div className="container">
                        <div className="learn-deposit" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#333333', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
                            <i className="fas fa-info-circle" style={{ fontSize: '20px', marginRight: '10px', color: '#25c866' }}></i>
                            <span>Learn how to deposit</span>
                            <a href="#" style={{ marginLeft: 'auto', color: '#fff', textDecoration: 'none' }}>Learn &gt;</a>
                        </div>
                        <div className="crypto-info" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '5px', margin: '10px 0' }}>
                            <img
                                alt="USDT(Tether) logo"
                                
                                src="https://storage.googleapis.com/a1aa/image/7kRjwo6b5uKxIJaqRza6VMBOnEg6NMb2u9NtB6JaPXkFInfJA.jpg"
                               
                                style={{ marginRight: '10px',  width: '24px' ,height:"24"}}
                            />
                            <span style={{ fontSize: '16px' }}>USDT(Tether)</span>
                        </div>
                        <div className="network-info" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '5px', margin: '10px 0' }}>
                            <span style={{ marginRight: '10px' }}>Main chain network</span>
                            <select style={{ flex: 1, padding: '5px', border: '1px solid #333', borderRadius: '5px', backgroundColor: '#333', color: '#fff' }}>
                                <option>Polygon PoS</option>
                            </select>
                        </div>
                        <div className="qr-code" style={{ backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '5px', margin: '10px 0', textAlign: 'center' }}>
                            <img
                                alt="QR code for deposit"
                            
                                src="https://storage.googleapis.com/a1aa/image/OApvdePfVdmXi04DK4q4IQbXiSL0RfS7gLopMwMLEFNxA58nA.jpg"
                          
                                style={{   width: '150px' ,height:'150px' }}
                            />
                            <a
                                className="save-qr-code"
                                href="#"
                                style={{ display: 'block', backgroundColor: '#25c866', color: '#000', textAlign: 'center', padding: '10px', borderRadius: '5px', textDecoration: 'none', margin: '10px 0' }}
                            >
                                Save QR-code
                            </a>
                        </div>
                        <div className="deposit-address" style={{ backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '5px', margin: '10px 0' }}>
                            <label htmlFor="deposit-address" style={{ display: 'block', marginBottom: '5px' }}>Deposit Address</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    id="deposit-address"
                                    readOnly
                                    type="text"
                                    value="0x1042562D5aEED899ee89dD63DE46280cbd6d0102"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #333', borderRadius: '5px', backgroundColor: '#333', color: '#fff', paddingRight: '40px' }}
                                />
                                <i
                                    className="fas fa-copy"
                                    style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#fff' }}
                                ></i>
                            </div>
                        </div>
                        <div className="tips" style={{ backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '5px', fontSize: '14px', color: '#ccc', margin: '10px 0' }}>
                            <p>1. Don’t deposit any non–USDT–Polygon PoS assets to the above addresses, otherwise the assets will not be retrieved.</p>
                            <p>2. After deposit through the above address, it will take an estimated 5 minutes to wait for the network node to confirm the credit to the account.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
