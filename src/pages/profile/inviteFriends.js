import Api from '../../Requests/Api';
import React, { useState, useEffect, useRef } from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    EmailIcon
} from 'react-share';

export default function Invite() {
    const [showOptions, setShowOptions] = useState(false);
    const shareUrl = "http://localhost:3000";
    const title = "Check out this amazing website!";

    const toggleShareOptions = () => {
        setShowOptions((prev) => !prev);
    };
    const [data, setData] = useState(null); // State to store fetched data
    const textAreaRef = useRef(null); // Ref for the text area

    const baseURL = `${window.location.origin}`; // Extract the base URL
    const [referralCode, setReferralCode] = useState("Loading..."); // Example referral code
  
    const registerURL = `${baseURL}/register?referral=${referralCode}`;

    const setCopy = () => {
        if (textAreaRef.current) {
            navigator.clipboard.writeText(textAreaRef.current.textContent || '');
            alert('Copied to clipboard!'); // Show feedback to the user
        }
    };
    useEffect(() => {
        if (data?.referral_code) {
            setReferralCode(data.referral_code);
        }
    }, [data]);

    useEffect(() => {
        // Fetch account info from backend
        const fetchAccountInfo = async () => {
            try {
                const response = await Api.get(`/invite`);
                console.log('Account Info:', response);

                if (response.data) {
                    setData(response.data.user[0]); // Assuming `user` is an array
                } else {
                    console.error('User not found:', response.data.message);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchAccountInfo();
    }, []);

    return (
        <div>
            <div className="header absolute">
                <div className="tf-container">
                    <div className="d-flex justify-content-between align-items-center mt-12">
                        <a href="#" className="box-icon back-btn"><i className="icon-left-btn"></i></a>
                        <a className="box-icon text-secondary"><i className="icon-share"></i></a>
                    </div>
                </div>
            </div>
            <div className="tf-container pt-16">
                <div className="card border-primary round-2 p-16">
                    <h5 className="text-primary">uTrading Referral Network</h5>
                    <a href="#" className="text-secondary text-small">Details</a>
                    <p className="mt-8">Invite friends to join uTrading and trading to earn up to 60% commissions.</p>
                </div>
                <div className="mt-16 card bg-light round-2 p-16">
                    <h6 className="text-secondary">Invitation Methods</h6>
                    <p className="mt-8 text-small">Invite your friend to register with your unique referral ID or referral link to complete a successful referral.</p>
                    <ul className="mt-8">
                        <li className="card border-primary round-2 p-12">
                            <span className="text-primary">1. Referral Link</span>
                            <div className="d-flex align-items-center justify-content-between mt-8">
                                <span
                                    className="text-secondary"
                                    ref={textAreaRef}>
                                    {data?.referral_code || "Loading..."}
                                </span>
                                <button className="btn-icon" onClick={setCopy} style={{ width: '20px' }}>
                                    <i className="icon-copy"></i>
                                </button>
                            </div>
                        </li>
                        <li className="card border-primary round-2 p-12 mt-12">
                            <span className="text-primary">2. Telegram Referral Link</span>
                            <div className="d-flex align-items-center justify-content-between mt-8">
                                <span className="text-secondary">{registerURL}</span>
                                <button className="btn-icon" style={{ width: '20px' }} onClick={toggleShareOptions}><i className="icon-copy"></i></button>
                            </div>
                        </li>
                        {showOptions && (
    <div
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
            zIndex: 10,
            width: "300px",
        }}
    >
        <FacebookShareButton url={registerURL} quote={`Join me on uTrading with this referral link: ${registerURL}`}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", cursor: "pointer" }}>
                <FacebookIcon size={32} round />                
            </div>
        </FacebookShareButton>

        <TwitterShareButton url={registerURL} quote={`Join me on uTrading with this referral link: ${registerURL}`}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", cursor: "pointer" }}>
                <TwitterIcon size={32} round />
            </div>
        </TwitterShareButton>

        <WhatsappShareButton url={registerURL} quote={`Join me on uTrading with this referral link: ${registerURL}`}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", cursor: "pointer" }}>
                <WhatsappIcon size={32} round />
            </div>
        </WhatsappShareButton>

        <LinkedinShareButton url={shareUrl} title={title}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", cursor: "pointer" }}>
                <LinkedinIcon size={32} round />
            </div>
        </LinkedinShareButton>

        <EmailShareButton url={registerURL} subject={title} body="Join me on uTrading with this referral link: ${registerURL}">
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <EmailIcon size={32} round />
            </div>
        </EmailShareButton>
    </div>
)}

                        <li className="card border-primary round-2 p-12 mt-12">
                            <span className="text-primary">3. Referral ID</span>
                            <div className="d-flex align-items-center justify-content-between mt-8">
                                <span className="text-secondary">5C9QY6</span>
                                <button className="btn-icon" style={{ width: '20px' }}><i className="icon-copy"></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-16 card bg-light round-2 p-16">
                    <h6 className="text-secondary">Current Invitation Benefits</h6>
                    <ul className="mt-8">
                        <li className="card border-primary round-2 p-12">
                            <h6 className="text-primary">Task Rewards</h6>
                            <p className="mt-4 text-small">Invite direct downlines to register and make any purchase to earn USDT rewards.</p>
                        </li>
                        <li className="card border-primary round-2 p-12 mt-12">
                            <h6 className="text-primary">C-VIP Upgrade Rewards</h6>
                            <p className="mt-4 text-small">Invite 3 paying downlines to become a coach and enjoy exclusive rewards.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
