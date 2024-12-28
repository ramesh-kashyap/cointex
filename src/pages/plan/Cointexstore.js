import React from "react";
import { useNavigate } from "react-router-dom";

const ChoosePaymentMethod = () => {
  const navigate = useNavigate();

 
  return (
    <div>
      {/* Preloader */}
     

      {/* Header */}
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
      
        <h3>Point X</h3>
      </div>

      {/* Content Section */}
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <div className="mt-4 text-center">
            <img src="assets/images/raj.png" alt="Payment Method" />
          </div>

          {/* List Section */}
          <ul className="mt-20">
            {[...Array(8)].map((_, index) => (
              <li key={index} className={index > 0 ? "mt-12" : ""}>
                <a href="choose-bank.html" className="accent-box item-check-style3 bg-menuDark">
                  <label className="content d-flex justify-content-between">
                    <div className="flex-grow-1">
                      <h5 className="mt-8 d-flex align-items-center gap-4">
                        <i className="icon-wallet icon"></i> uGas
                      </h5>
                    </div>
                    <h4>1000. USDT</h4>
                  </label>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChoosePaymentMethod;