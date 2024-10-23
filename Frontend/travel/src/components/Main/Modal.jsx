import React from 'react';
import './Modal.css'; // Make sure to import your modal styling

const Modal = ({ isOpen, onClose, onConfirmRoomBooking, onConfirmFlightBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Booking Options</h2>
        <p>Would you like to continue with room booking or flight booking?</p>
        <div className="modal-buttons">
          <button onClick={onConfirmRoomBooking}>Room Booking</button>
          <button onClick={onConfirmFlightBooking}>Flight Booking</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
