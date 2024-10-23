import React from 'react';
import './payment.css';
import nee from '../assets/images/qr.png';
const PaymentPopup = ({ onPayNow }) => {
  return (
    <div className="payment-popup">
      <div className="popup-content">
        <h2>Scan to Pay</h2>
        <img src={nee} alt="Fake QR Code" className="qr-code" />
        <button className="pay-now-btn" onClick={onPayNow}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPopup;
