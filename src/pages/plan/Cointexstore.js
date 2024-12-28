import React from "react";
import {  HandleGoBack } from '../../Helper/helper';
const Cointexstore = () => {
    

  const goBack = HandleGoBack();
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#121212', color: '#ffffff' }}>

      {/* Header */}
      <div
       className="header fixed-top bg-surface d-flex justify-content-center align-items-center"
       style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #333333' }}
      >
        <a style={{ color: "#ffffff", fontSize: "18px" }} onClick={goBack}>
          <i className="icon-left-btn"></i>
        </a>
        <h3 style={{ color: "#ffffff", fontSize: "18px", margin: 0 }}>Cointex Store</h3>
        <a href="javascript:void(0);" style={{ color: "#ffffff", fontSize: "18px" }}>
          <i className="icon-question"></i>
        </a>
      </div>

      {/* Main Content */}
      <div className="pt-45 pb-16">
      <div className="tf-container" style={{ maxWidth: '1024px', margin: '0 auto', boxSizing: 'border-box' }}>
          {/* Banner */}
          <div style={{ marginBottom: "20px" }}>
            <img
              src="https://storage.googleapis.com/a1aa/image/wrqfeU9U1fHtUpa4VohmUGe8swVrUqtiQc5aHWDGFmLP985PB.jpg"
              alt="Banner"
              style={{ width: "100%", height: "200px", borderRadius: "10px" }}
            />
          </div>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#1f1f1f",
              padding: "10px 0",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <div style={{ color: "#ffcc00", fontWeight: "bold", cursor: "pointer" }}>uGas</div>
            <div style={{ color: "#ffffff", fontWeight: "bold", cursor: "pointer" }}>S-VIP</div>
            <div style={{ color: "#ffffff", fontWeight: "bold", cursor: "pointer", position: "relative" }}>
              C-VIP
              <span
                style={{
                  color: "#ff0000",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  backgroundColor: "#ffebeb",
                  borderRadius: "5px",
                  padding: "2px 5px",
                }}
              >
                Limited
              </span>
            </div>
          </div>

          {/* Items */}
          <div>
            {[
              { title: "uGas 4,500", price: "45.00 USDT", img: "https://storage.googleapis.com/a1aa/image/UZVSdWxJr8YhLZU3yygpcg1kfLfFxl2RAEtlgrKAWsoVPf8nA.jpg" },
              {
                title: "uGas 10,000",
                price: "95.00 USDT",
                discount: "100.00 USDT",
                discountBadge: "-5%",
                img: "https://storage.googleapis.com/a1aa/image/UZVSdWxJr8YhLZU3yygpcg1kfLfFxl2RAEtlgrKAWsoVPf8nA.jpg",
              },
              {
                title: "uGas 60,000",
                price: "540.00 USDT",
                discount: "600.00 USDT",
                discountBadge: "-10%",
                img: "https://storage.googleapis.com/a1aa/image/UZVSdWxJr8YhLZU3yygpcg1kfLfFxl2RAEtlgrKAWsoVPf8nA.jpg",
              },
              {
                title: "uGas 200,000",
                price: "1700.00 USDT",
                discount: "2000.00 USDT",
                discountBadge: "-15%",
                img: "https://storage.googleapis.com/a1aa/image/UZVSdWxJr8YhLZU3yygpcg1kfLfFxl2RAEtlgrKAWsoVPf8nA.jpg",
              },
              {
                title: "uGas 300,000",
                price: "2400.00 USDT",
                discount: "3000.00 USDT",
                discountBadge: "-20%",
                img: "https://storage.googleapis.com/a1aa/image/UZVSdWxJr8YhLZU3yygpcg1kfLfFxl2RAEtlgrKAWsoVPf8nA.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1f1f1f",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img src={item.img} alt={item.title} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "#ffffff" }}>{item.title}</div>
                  {item.discount && (
                    <div>
                      <span style={{ textDecoration: "line-through", color: "#ff0000", marginRight: "5px" }}>
                        {item.discount}
                      </span>
                      <span
                        style={{
                          color: "#ff0000",
                          backgroundColor: "#ffebeb",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          fontSize: "12px",
                        }}
                      >
                        {item.discountBadge}
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ fontSize: "18px", fontWeight: "bold", color: "#ffcc00" }}>{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cointexstore;
