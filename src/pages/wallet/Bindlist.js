import React from 'react';


const Bindlist= () => {
  const exchanges = [
    {
      name: 'Binance',
      logo: 'https://storage.googleapis.com/a1aa/image/GyxXJRoqiq46GdSebL2FQg9dL66wIvjreOpJLbGlIbsURdenA.jpg',
      description: 'Support spot, UDS-M futures',
    },
    {
      name: 'Binance US',
      logo: 'https://storage.googleapis.com/a1aa/image/2ruz4e85oaSeL07MU8MoyBwXBZCKvz4uxYWJrMphbuQIRdenA.jpg',
      description: 'Support spot trading',
    },
    {
      name: 'OKX',
      logo: 'https://storage.googleapis.com/a1aa/image/uPK4vWAINWajGxebGU2r22IGDhrkSsy2varbwfE6igRWRdenA.jpg',
      description: 'Support spot and futures trading',
    },
    {
      name: 'Bybit',
      logo: 'https://storage.googleapis.com/a1aa/image/uNtVZL0phorAFBRXC44zucGzCiKe7dR4q4ZPbQIlkX8ooOfTA.jpg',
      description: 'Support spot and futures trading',
    },
    {
      name: 'Bitget',
      logo: 'https://storage.googleapis.com/a1aa/image/Y8kb0hd9YzKhGBeJ1ktSpwJQ4dC7dDSvEgM1xFFep7gJRdenA.jpg',
      description: 'Support spot and futures trading',
    },
    {
      name: 'Kucoin',
      logo: 'https://storage.googleapis.com/a1aa/image/U9k5ZNiY3F5nL1KPdh0UmV5rrI0kOhIMfBh4MTt3CSBnoOfTA.jpg',
      description: 'Support spot and futures trading',
    },
    {
      name: 'Bitfinex',
      logo: 'https://storage.googleapis.com/a1aa/image/d8zqOvPSQAIZG5ufAr5KjzBflbA45jzfx1k36B9VXmwWi68nA.jpg',
      description: 'Support spot trading',
    },
    {
      name: 'HTX Global',
      logo: 'https://storage.googleapis.com/a1aa/image/OGkCzjqQGKreLy6upeYmuWrzg751nSnfCtCluCYagQqeE15PB.jpg',
      description: 'Support spot and futures trading',
    },
    {
      name: 'Kraken Spot',
      logo: 'https://storage.googleapis.com/a1aa/image/U0osKJT5k8LfECIFPMOfo6ReFGr70D3A5CZCuIYLFsFmi68nA.jpg',
      description: 'Support spot trading',
    },
  ];

  return (
    <div>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn">
          <i className="icon-left-btn"></i>
        </a>
        <h3>API Binding</h3>
        <a href="javascript:void(0);" className="right">
          <i className="icon-question"></i>
        </a>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <div className="container">
            {exchanges.map((exchange, index) => (
              <div className="exchange-item" key={index}>
                <img
                  alt={`${exchange.name} logo`}
           
                  src={exchange.logo}
                 
                  style={{ marginRight: '10px',  width: '40px' ,height:"40px"}}
                />
                <div className="details">
                  <h2>
                    {exchange.name}
                    <span className="usdt">USDT</span>
                  </h2>
                  <p>{exchange.description}</p>
                </div>
                <div className="import">Import</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bindlist;
