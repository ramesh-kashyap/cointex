import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function ExchangeMarket() {
  const [coins, setCoins] = useState([]);
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch coin details from the API
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
          {
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-7ZXfqgrkCtQfDfyLdAffaMbw",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCoins();

    // WebSocket for real-time price updates
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr");

    ws.onopen = () => {
      console.log("WebSocket connection opened.");
    };

    ws.onmessage = (event) => {
      try {
        const tickerData = JSON.parse(event.data);

        // Update prices based on WebSocket response
        const updatedPrices = {};
        tickerData.forEach((item) => {
          // Normalize Binance symbols to match CoinGecko symbols
          const normalizedSymbol = item.s.toLowerCase().replace("usdt", "");
          updatedPrices[normalizedSymbol] = parseFloat(item.c).toFixed(2); // Use 'c' for last price
        });

        setPrices((prevPrices) => ({
          ...prevPrices,
          ...updatedPrices,
        }));
      } catch (error) {
        console.error("Error parsing WebSocket data:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    // Clean up WebSocket connection
    return () => {
      ws.close();
    };
  }, []);

  function formatNumber(value) {
    if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + "B"; // Billion
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + "M"; // Million
    } else {
      return value.toLocaleString(); 
    }
  }
  

  return (
    <div>
      <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h3 className="d-flex gap-12">
          <a href="#">Market</a>
          <a href="exchange-trade.html" className="text-secondary">
            Trade
          </a>
        </h3>
        <i
          className="icon-funnel text-white"
          data-bs-toggle="modal"
          data-bs-target="#filter"
        ></i>
      </div>
      <div className="pt-55 pb-80">
        <div className="tf-container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="mt-20">
              <div className="tab-content mt-8 mb-16">
                <div className="tab-pane fade show active" id="all" role="tabpanel">
                  <div className="d-flex justify-content-between">
                    <span>Name/Revenue</span>
                    <p className="d-flex gap-8">
                      <span>Last price</span>
                      <span>24h change</span>
                    </p>
                  </div>
                  <ul className="mt-16">
                    {coins.map((coin) => (
                      <li key={coin.id} className="mt-16">
                        <a href="" className="coin-item style-2 gap-12">
                          <img src={coin.image} alt={coin.name} className="img" />
                          <div className="content">
                            <div className="title">
                              <p className="mb-4 text-button">{coin.symbol.toUpperCase()}</p>
                              <span className="text-secondary">
          {coin.fully_diluted_valuation
            ? formatNumber(coin.fully_diluted_valuation)
            : "N/A"}
        </span>
                            </div>
                            <div className="d-flex align-items-center gap-12">
                              {/* Display the real-time price or fallback to the API price */}
                              <span className="text-small" style={{fontWeight:'600'}}>
                                $
                                {prices[coin.symbol.toLowerCase()] ||
                                  coin.current_price.toFixed(2)}
                              </span>
                              <span
                                className={`coin-btn ${
                                  coin.price_change_percentage_24h > 0 ? "increase" : "decrease"
                                }`}
                              >
                                {coin.price_change_percentage_24h.toFixed(2)}%
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

       <div className="menubar-footer footer-fixed">
        <ul className="inner-bar">
          <li className="active">
          <Link to="/">
              <i className="icon icon-home2"></i>
              Home
              </Link>
          </li>
          <li>
          <Link to="/exchange">
              <i className="icon icon-exchange"></i>
              Exchange
              </Link>
          </li>
          <li>
          <Link to="/earn">
              <i className="icon icon-earn"></i>
              Earn
              </Link>
          </li>
          <li>
          <Link to="/wallet">
              <i className="icon icon-wallet"></i>
              Wallet
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
