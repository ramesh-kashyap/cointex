import React from 'react';
import { useLocation } from 'react-router-dom';

const CustomPopup = ({ onClose }) => {
    const location = useLocation(); // Use the hook inside the component
    const message = location.state?.message;

    // Check if the message is defined and handle it properly
    let displayMessage;
    let isSuccess = false;

    if (message && message.errors && Array.isArray(message.errors)) {
        // Render error messages as a list
        displayMessage = (
            <ul>
                {message.errors.map((error, index) => (
                    <li key={index}>{error.msg}</li> // Render the 'msg' value directly
                ))}
            </ul>
        );
    } else if (message && typeof message === 'string') {
        // If it's just a string, render it directly
        displayMessage = message;
        isSuccess = message.toLowerCase().includes('successful');
    } else {
        // Fallback message if nothing is passed
        displayMessage = 'An unknown error occurred.';
    }

    return (
        <div className="bg-camera" style={{ position: 'fixed', zIndex: '2', marginLeft: '0%', width: '100%' }}>
            <div className="tf-container">
                <div className="pt-30 pb-30">
                    <div className="success_box" style={{minWidth:'343px'}}>
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
                        <h2 className="text-surface text-center">
                            {isSuccess ? 'Success!' : 'Error!'}
                        </h2>
                        <p className="text-large text-center mt-8" style={{ color: 'black' }}>
                            {displayMessage}
                        </p>
                        <button className="tf-btn lg primary mt-40" onClick={onClose}>
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomPopup;
