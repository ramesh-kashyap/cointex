import React, { useEffect } from 'react';

export default function Qrcode() {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.location.href = "/success";
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn">
          <i className="icon-left-btn"></i>
        </a>
        <h3>QR code</h3>
        <a href="javascript:void(0);" className="right">
          <i className="icon-question"></i>
        </a>
      </div>

      <div className="pt-45 pb-16">
        <div className="tf-container">
          <h2 className="mt-20 text-center">Your QR Code</h2>
          <div className="mt-40 banner-qr">
            <img src="images/banner/banner-qrcode.png" alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
}
