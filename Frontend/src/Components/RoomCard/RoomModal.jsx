import React from 'react';
import './RoomModal.css';
import Button from '../Button/Button';  
import { FaUserFriends } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function RoomModal({ room, onClose }) {

  const navigate = useNavigate();

  const handleBooking = () => {
    navigate ('../BookingRoom', {state: {room}});
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={room.image} alt={room.title} className="modal-image" />
        <h2 className="modal-title">{room.title}</h2>
        <div className="modal-desc">
          <p className="modal-text">{room.description}</p>
          <p className="modal-text">
            <FaUserFriends className="icon" /> Rooms for: <strong>{room.people}</strong> people
          </p>
          <p className="modal-price">{room.price}₴ / night</p>
        </div>
        <Button className='book-btn' text="Book" to="/BookingRoom" onClick={handleBooking} /> 
      </div>
    </div>
  );
}

export default RoomModal;
