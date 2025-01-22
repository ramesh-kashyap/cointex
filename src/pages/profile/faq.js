import React, { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common queries about our services</p>
      </div>
      <div className="faq-container">
        <div
          className={`faq-item ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleFaq(0)}
        >
          <div className="faq-question">
            What is your return policy?
            <span className={`faq-icon ${activeIndex === 0 ? "rotate" : ""}`}>+</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>We accept returns within 30 days of purchase. Terms and conditions apply.</p>
            </div>
          )}
        </div>

        <div
          className={`faq-item ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleFaq(1)}
        >
          <div className="faq-question">
            How can I contact support?
            <span className={`faq-icon ${activeIndex === 1 ? "rotate" : ""}`}>+</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>You can contact our support team via email or the live chat on our website.</p>
            </div>
          )}
        </div>

        <div
          className={`faq-item ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => toggleFaq(2)}
        >
          <div className="faq-question">
            Do you offer international shipping?
            <span className={`faq-icon ${activeIndex === 2 ? "rotate" : ""}`}>+</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>Yes, we provide shipping to most countries worldwide. Additional fees may apply.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
