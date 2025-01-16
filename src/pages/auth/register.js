import React, { useState, useEffect } from "react";
import Api from '../../Requests/Api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate, useLocation } from 'react-router-dom';
import Api2, { googleAuth } from '../../Requests/Api';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { HandleGoBack } from '../../Helper/helper.js';

import CustomPopup from '../auth/Successfullypass';

export default function Register() {
    const location = useLocation(); // Access the current location
    const navigate = useNavigate();

    const [uname, setUname] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [refferal, setRefferal] = useState(''); // For referral code
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [passwordType, setPasswordType] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    // Fetch referral code from URL when the page is loaded
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const referralCode = params.get('referral'); // 'referral' matches the query parameter in your URL (e.g., ?referral=XYZ123)
        if (referralCode) {
            setRefferal(referralCode); // Update the referral code state
        }
    }, [location]);

    const togglePasswordView = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
        setIsActive(!isActive);
    };

    const togglePasswordView2 = () => {
        setPasswordType2(passwordType2 === "password" ? "text" : "password");
        setIsActive2(!isActive2);
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            alert('Passwords do not match!');
            return;
        }

        const payload = { name: uname, phone, password, referralCode: refferal };

        try {
            setLoading(true);
            // console.log(payload);
            const response = await Api.post('/register', payload); // API request
            console.log('Registration successful:', response.data);

            localStorage.setItem('isRegistered', 'true');
            sessionStorage.setItem('phone', phone);
            sessionStorage.setItem('message',response.data.message);
            setPopupMessage(response.data.message);
            setIsPopupOpen(true);

            navigate('/Otp'); // Redirect to OTP page
        } catch (error) {
            console.error('Registration failed:', error.response?.data);
            setPopupMessage(error.response?.data?.message || 'Registration failed!');
            setIsPopupOpen(true);

            setErrors(error.response?.data?.errors || { general: 'An error occurred' });
        } finally {
            setLoading(false);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const googleRegister = useGoogleLogin({
        onSuccess: async (authResult) => {
            try {
                if (authResult['code']) {
                    const result = await googleAuth(authResult['code']);
                    console.log('Google registration successful:', result.data);
                    localStorage.setItem('authToken', result.data.token);
                    navigate('/', { state: { message: result?.data?.message } });
                } else {
                    console.error('Authorization code not received');
                }
            } catch (err) {
                console.error('Error while requesting Google code:', err);
            }
        },
        onError: (error) => {
            console.error('Google login failed:', error);
        },
        flow: 'auth-code',
    });

    return (
        <div>
            {isPopupOpen && <CustomPopup message={popupMessage} onClose={closePopup} />}
            <div className="header fixed-top bg-surface">
                <a onClick={HandleGoBack} className="left back-btn"><i className="icon-left-btn"></i></a>
            </div>
            <div className="pt-45">
                <div className="tf-container">
                    <form onSubmit={formSubmit} className="mt-32 mb-16">
                        <h2 className="text-center">Register Cointex</h2>

                        <ul className="mt-40 socials-login">
                            <li className="mt-12">
                                <button onClick={() => googleRegister()} className="tf-btn md social dark">
                                    <img src="assets/images/coin/google.png" alt="Google Icon" /> Continue with Google
                                </button>
                            </li>
                        </ul>

                        <fieldset className="mt-40">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Name</p>
                                <input type="text" name="name" value={uname} onChange={(e) => setUname(e.target.value)} required />
                            </label>
                        </fieldset>

                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Phone Number</p>
                                <PhoneInput
                                    international
                                    type="text"
                                    placeholder="Enter Your Mobile Number"
                                    name="phone"
                                    value={phone}
                                    enableSearch
                                    onChange={(value) => setPhone(value)}
                                    inputStyle={{
                                        padding: "10px",
                                        paddingLeft: "50px",
                                        fontSize: "14px",
                                        color: "white",
                                        backgroundColor: "#11150f"
                                    }}
                                    containerStyle={{ backgroundColor: "#000" }}
                                    dropdownStyle={{ backgroundColor: "#000" }}
                                />
                            </label>
                        </fieldset>

                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Password</p>
                                <div className="box-auth-pass">
                                    <input
                                        type={passwordType}
                                        required
                                        placeholder="6-20 characters"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className={`show-pass ${isActive ? "active" : ""}`} onClick={togglePasswordView}>
                                        <i className="icon-view"></i>
                                        <i className="icon-view-hide"></i>
                                    </span>
                                </div>
                            </label>
                        </fieldset>

                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Confirm Password</p>
                                <div className="box-auth-pass">
                                    <input
                                        type={passwordType2}
                                        required
                                        placeholder="Confirm Password"
                                        name="cpassword"
                                        value={cpassword}
                                        onChange={(e) => setCpassword(e.target.value)}
                                    />
                                    <span className={`show-pass2 ${isActive2 ? "active" : ""}`} onClick={togglePasswordView2}>
                                        <i className="icon-view"></i>
                                        <i className="icon-view-hide"></i>
                                    </span>
                                </div>
                            </label>
                        </fieldset>

                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Referral Code</p>
                                <input
                                    type="text"
                                    placeholder="Referral Code"
                                    name="referral"
                                    value={refferal}
                                    onChange={(e) => setRefferal(e.target.value)}
                                />
                            </label>
                        </fieldset>

                        <fieldset className="group-cb cb-signup mt-12">
                            <input type="checkbox" className="tf-checkbox" id="cb-ip" required />
                            <label htmlFor="cb-ip">I agree to <span className="text-white">Terms and Conditions</span></label>
                        </fieldset>

                        <button className="mt-40" type="submit" disabled={loading}>
                            {loading ? "Loading..." : "Create an account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
