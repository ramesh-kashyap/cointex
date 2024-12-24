import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Correct
import Api from '../../Requests/Api';
const OTPForm = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input change for each OTP box
    const handleChange = (e, index) => {
        const { value } = e.target;

        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input box
            if (value && index < otp.length - 1) {
                document.getElementById(`digit-${index + 2}`).focus();
            }
        }
    };

    // Handle backspace navigation
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`digit-${index}`).focus();
        }
    };

    // Submit the OTP to the API
    const handleSubmit = async (e) => {
        e.preventDefault();
        const code = otp.join(""); // Combine the OTP inputs

        if (code.length !== 6) {
            setMessage("Please enter a 6-digit OTP");
            return;
        }

        setLoading(true);
        setMessage("");
        const token = localStorage.getItem('authToken');
        
            const decoded = jwtDecode(token);
            const userId = decoded.userId;       
     

        try {
            const payload = {otp: code, userId };
        
            const response = await Api.post('/verify-otp', payload);
            setMessage(response.data.message || "OTP verified successfully!");
           if(response){
            navigate('/');
           }
        } catch (error) {
            setMessage(error.response?.data?.message || "Failed to verify OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <h3>OTP Verification</h3>
            </div>

            <div className="pt-45 pb-20">
                <div className="tf-container">
                    <form className="mt-32" onSubmit={handleSubmit}>
                        <div className="digit-group mt-12">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`digit-${index + 1}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    required
                                    autoFocus={index === 0}
                                />
                            ))}
                        </div>

                        {message && <p className="text-center mt-4">{message}</p>}

                        <button
                            type="submit"
                            className="mt-40 tf-btn lg primary"
                            disabled={loading}
                        >
                            {loading ? "Verifying..." : "Confirm"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OTPForm;
