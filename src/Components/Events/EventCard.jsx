import React from 'react';
import './EventCard.css';

const EventCard = ({ image, title, description, date, reverse }) => {
  return (
    <div className={`event-card ${reverse ? 'reverse' : ''}`}>
      <img src={image} alt={title} className="event-img" />
      <div className="event-content">
        <p className="event-subtitle">On Our Playa Norosta Beach</p>
        <h2 className="event-title">{title}</h2>
        <p className="event-description">{description}</p>
        <div className="event-footer">
          <p className="event-date">{date}</p>
          <button className="event-btn">Get More!</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
