import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Helper function to format numbers in a more readable way
const formatVolume = (volume) => {
    if (volume >= 1e12) {
        return (volume / 1e12).toFixed(2) + " T"; // Trillions
    } else if (volume >= 1e9) {
        return (volume / 1e9).toFixed(2) + " B"; // Billions
    } else if (volume >= 1e6) {
        return (volume / 1e6).toFixed(2) + " M"; // Millions
    } else if (volume >= 1e3) {
        return (volume / 1e3).toFixed(2) + " K"; // Thousands
    } else {
        return volume.toFixed(2); // For volumes less than a thousand
    }
};

const ExchangeMarket = () => {
    const [trades, setTrades] = useState({});
    const [previousPrices, setPreviousPrices] = useState({});
    const [initialTimes, setInitialTimes] = useState({});
    const [coinVolumes, setCoinVolumes] = useState({}); // Track coin volumes
    const [error, setError] = useState(null);

    // WebSocket URL for multiple coins
    const wsUrl = "wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade/bnbusdt@trade/xrpusdt@trade/adausdt@trade/ltcusdt@trade";

    useEffect(() => {
        let ws;

        const setupWebSocket = () => {
            ws = new WebSocket(wsUrl);

            ws.onopen = () => {
                console.log("WebSocket connection established");
                setError(null);
            };

            ws.onmessage = (event) => {
                try {
                    const message = JSON.parse(event.data);
                    const tradeData = message.data;
                    const coinSymbol = tradeData.s.toLowerCase();

                    const newTrade = {
                        stream: tradeData.s,
                        price: parseFloat(tradeData.p),
                        quantity: parseFloat(tradeData.q),
                        volume: parseFloat(tradeData.p) * parseFloat(tradeData.q), // Trade volume
                    };

                    // Update trades state
                    setTrades((prevTrades) => ({
                        ...prevTrades,
                        [coinSymbol]: newTrade,
                    }));

                    // Update coin volume
                    setCoinVolumes((prevVolumes) => {
                        const newVolume = prevVolumes[coinSymbol]
                            ? prevVolumes[coinSymbol] + newTrade.volume
                            : newTrade.volume;
                        return {
                            ...prevVolumes,
                            [coinSymbol]: newVolume,
                        };
                    });

                    // Update previous prices and track initial time
                    setPreviousPrices((prevPrices) => {
                        if (!(coinSymbol in prevPrices)) {
                            // First time seeing this coin symbol, store the price and time
                            setInitialTimes((prevTimes) => ({
                                ...prevTimes,
                                [coinSymbol]: new Date().getTime(),
                            }));
                            return {
                                ...prevPrices,
                                [coinSymbol]: newTrade.price,
                            };
                        }
                        return prevPrices;
                    });

                } catch (err) {
                    console.error("Error processing WebSocket message:", err);
                }
            };

            ws.onerror = (error) => {
                console.error("WebSocket Error:", error);
                setError("WebSocket connection error. Please try again later.");
            };

            ws.onclose = (event) => {
                console.log("WebSocket connection closed", event);
                if (!event.wasClean) {
                    setError("WebSocket connection lost. Reconnecting...");
                    setTimeout(setupWebSocket, 5000);
                }
            };
        };

        setupWebSocket();

        return () => {
            if (ws) ws.close();
        };
    }, []);

    const calculatePercentageChange = (coinSymbol, newPrice) => {
        const previousPrice = previousPrices[coinSymbol];
        const initialTime = initialTimes[coinSymbol];

        const now = new Date().getTime();

        if (initialTime && (now - initialTime) >= 1 * 1000) {
            // Calculate percentage change if price has changed significantly
            if (previousPrice && previousPrice !== newPrice) {
                const change = ((newPrice - previousPrice) / previousPrice) * 100;
                return parseFloat(change.toFixed(2));
            }
            return 0; // Return 0% if price hasn't changed
        }

        console.log(`Not enough time has passed for ${coinSymbol}`);
        return null; // Return null if 1 second hasn't passed
    };

    return (
        <div>
            <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
                <h3 className="d-flex gap-12">
                    <Link to="/">Market</Link>
                    <Link to="/exchange-trade" className="text-secondary">Trade</Link>
                </h3>
                <i className="icon-funnel text-white" data-bs-toggle="modal" data-bs-target="#filter"></i>
            </div>

            <div className="pt-55 pb-80">
                <div className="tf-container">
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        Object.keys(trades).map((coinSymbol, index) => {
                            const trade = trades[coinSymbol];
                            const percentageChange = calculatePercentageChange(coinSymbol, trade.price);
                            const coinVolume = coinVolumes[coinSymbol] ? formatVolume(coinVolumes[coinSymbol]) : "0.00"; // Format coin volume

                            return (
                                <div key={index} className="mt-16">
                                    <Link to="/choose-payment" className="coin-item style-2 gap-12">
                                        <div className="content">
                                            <div className="title">
                                                <p className="mb-4 text-button">{coinSymbol.toUpperCase()}</p>
                                              
                                                <span className="text-secondary">Volume: {coinVolume} {coinSymbol.toUpperCase()}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-12">
                                                <span className="text-small">
                                                    {trade.price && !isNaN(trade.price) ? trade.price.toFixed(2) : "N/A"}
                                                </span>
                                                
                                                <span
                                                    className={`coin-btn ${percentageChange !== null && percentageChange >= 0 ? "increase" : "decrease"}`}
                                                >
                                                    {percentageChange !== null ? `${percentageChange >= 0 ? '+' : ''}${percentageChange}%` : "0"}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
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
};

export default ExchangeMarket;
