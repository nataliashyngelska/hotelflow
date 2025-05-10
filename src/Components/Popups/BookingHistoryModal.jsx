import React from 'react';
import './BookingHistoryModal.css';

function BookingHistoryModal({ isOpen, onClose, bookings }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Booking History</h2>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} className="booking-entry">
              <p><strong>Room:</strong> {booking.roomTitle}</p>
              <p><strong>Check-in:</strong> {booking.checkIn}</p>
              <p><strong>Check-out:</strong> {booking.checkOut}</p>
              <p><strong>Price:</strong> {booking.price}₴</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BookingHistoryModal;
