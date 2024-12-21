import React from "react";

export default function Cryptocurrency() {
  return (
    <div>
      {/* Header */}
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn">
          <i className="icon-left-btn"></i>
        </a>
        <h3>Choose cryptocurrency</h3>
      </div>

      {/* Main Content */}
      <div className="pt-45 pb-16">
        <div className="tf-container">
          {/* Search Box */}
          <div className="mt-8 search-box box-input-field">
            <i className="icon-search"></i>
            <input
              type="text"
              placeholder="Search cryptocurrency"
              required
              className="clear-ip"
            />
            <i className="icon-close"></i>
          </div>

          {/* Popular Search */}
          <h5 className="mt-12">Popular search</h5>
          <ul className="mt-16">
            {[
              {
                img: "/assets/images/coin/coin-3.jpg",
                name: "Ethereum",
                symbol: "ETH",
                price: "$30,776.93",
              },
              {
                img: "assets/images/coin/coin-1.jpg",
                name: "Bitcoin",
                symbol: "BTC",
                price: "$1,936.79",
              },
              {
                img: "assets/images/coin/coin-14.jpg",
                name: "TetherUS",
                symbol: "USDT",
                price: "$0.999999",
              },
              {
                img: "assets/images/coin/coin-7.jpg",
                name: "BNB",
                symbol: "BNB",
                price: "$243.41",
              },
              {
                img: "assets/images/coin/coin-9.jpg",
                name: "Ripple",
                symbol: "XRP",
                price: "$0.487814",
              },
              {
                img: "assets/images/coin/coin-4.jpg",
                name: "Cardano",
                symbol: "ADA",
                price: "$0.294842",
              },
              {
                img: "assets/images/coin/coin-11.jpg",
                name: "BUSD",
                symbol: "BUSD",
                price: "$0.999899",
              },
              {
                img: "assets/images/coin/coin-8.jpg",
                name: "trueUSD",
                symbol: "TUSD",
                price: "$0.999999",
              },
              {
                img: "assets/images/coin/coin-5.jpg",
                name: "Coin98",
                symbol: "C98",
                price: "$0.169888",
              },
              {
                img: "assets/images/coin/coin-6.jpg",
                name: "Kurama",
                symbol: "KRM",
                price: "$21,893.9",
              },
            ].map((coin, index) => (
              <li className={`mt-${index === 0 ? "0" : "16"}`} key={coin.name}>
                <a href="#" className="coin-item style-2 gap-12">
                  <img src={coin.img} alt={coin.name} className="img" />
                  <div className="content">
                    <div className="title">
                      <p className="mb-4 text-large">{coin.name}</p>
                      <span className="text-secondary text-small">
                        {coin.symbol}
                      </span>
                    </div>
                    <span className="text-small">{coin.price}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
