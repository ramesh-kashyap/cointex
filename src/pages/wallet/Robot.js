import React from "react";
import { Link } from 'react-router-dom';

export default function Robot() {
  return (
    <div>
      {/* Header Section */}
      <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h6>Running</h6>
        <h6>Stopped</h6>
        <h6>Record</h6>
        <i className="icon-gift text-white" data-bs-toggle="modal" data-bs-target="#filter"></i>
        <i className="icon-noti box-noti" data-bs-toggle="modal" data-bs-target="#filter"></i>
      </div>

      <div className="pt-68 pb-80">
        {/* Tabs Section */}
        <div className="bg-menuDark tf-container">
          <div className="tab-slide">
            <ul className="menu-tab-v3" role="tablist">
              <li
                className="tag-money active text-small"
                data-bs-toggle="tab"
                data-bs-target="#cryptocurrency"
                role="tab"
                aria-controls="cryptocurrency"
                aria-selected="true"
              >
                All
              </li>
              <li
                className="tag-money text-small"
                data-bs-toggle="tab"
                data-bs-target="#vault"
                role="tab"
                aria-controls="vault"
                aria-selected="false"
              >
                Spot
              </li>
              <li
  className="tag-money text-small"
  data-bs-toggle="tab"
  data-bs-target="#vault"
  role="tab"
  aria-controls="vault"
  aria-selected="false"
>
  <Link to="/wallet/Futures">Futures</Link>
</li>
            </ul>
          </div>
        </div>

        {/* Long Section */}
        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h6>Spot</h6>
            <ul className="mt-16 grid-3 gap-12">
              {["Positions", "Total Pnl", "Unrealized pnl"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                  >
                    <p>{item}</p>
                    {index === 0 ? "234.45" : index === 1 ? "1.6x" : "26.57u"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Short Section */}
        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h6>Futures</h6>
            <ul className="mt-16 grid-3 gap-12">
              {["Positions", "Total", "Unrealized Pnl"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center"
                  >
                    <p>{item}</p>
                    {index === 0 ? "234.45" : index === 1 ? "1.6x" : "26.57u"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coins Section */}
        <div className="bg-menuDark tf-container">
          <div className="tf-tab pt-12 mt-4">
            <div className="tab-content pt-16 pb-16">
              <div className="tab-pane fade active show" id="history" role="tabpanel">
                <ul>
                  {[
                    { name: "Zil", price: "$950.(50)", status: "Paused" },
                    { name: "Crv", price: "$12948.(68)", status: "Paused" },
                    { name: "Gala", price: "$12948.68", status: "Paused" },
                    { name: "ZEC", price: "$12948.68", status: "Paused" },
                    { name: "jasmy", price: "$12948.68", status: "Paused" },
                    { name: "gmt", price: "$12948.68", status: "Paused" },

                    { name: "arb", price: "$12948.68", status: "Paused" },

                    { name: "ZEC", price: "$12948.68", status: "Paused" },




                  ].map((coin, index) => (
                    <li key={index} className="mt-8">
                      <a href="choose-payment.html" className="coin-item style-1 gap-12 bg-surface">
                        <img
                          src={`assets/images/${coin.name.toLowerCase()}.png`}
                          alt={coin.name}
                          className="img"
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-large">{coin.name}</p>
                            <span className="text-secondary">0.00U</span>
                          </div>
                          <div className="box-price">
                            <p className="text-small mb-4">
                              <span className="text-primary"></span> {coin.status}
                            </p>
                            <p className="text-end">
                              <span className="text-red">-</span> {coin.price}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="menubar-footer footer-fixed">
        <ul>{/* Add footer content here */}</ul>
      </div>
    </div>
  );
}
