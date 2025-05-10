import React from 'react';
import './RoomCard.css';
import { FaUserFriends } from 'react-icons/fa';

function RoomCard({ image, title, people, price, description, onClick }) {
  return (
    <div className="room-card" onClick={onClick}>
      <img src={image} alt={title} className="room-image" />
      <div className="room-info">
        <h3 className="room-title">{title}</h3>
        <div className="room-meta">
          <div className="room-people">
            <FaUserFriends className="icon" /> Rooms for: <strong>{people} people</strong>
          </div>
          <div className="room-price">
            <strong>${price}</strong> <span>/night</span>
          </div>
        </div>
        <div className="room-description">
          <h4>Description</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
