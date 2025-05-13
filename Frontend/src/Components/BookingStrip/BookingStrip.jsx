import React, { useState, useEffect } from 'react';
import './BookingStrip.css'; 

const BookingStrip = ({ onSearch }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [peopleCount, setPeopleCount] = useState(1);
  const [nights, setNights] = useState(0);

  
  useEffect(() => {
    if (checkIn) {
      const nextDay = new Date(checkIn);
      nextDay.setDate(nextDay.getDate() + 1);
      const formatted = nextDay.toISOString().split('T')[0];
      if (!checkOut || checkOut <= checkIn) {
        setCheckOut(formatted);
      }
    }
  }, [checkIn, checkOut]);

  
  useEffect(() => {
    if (checkIn && checkOut) {
      const diff = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
      setNights(diff > 0 ? diff : 0);
    }
  }, [checkIn, checkOut]);

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      alert('Please select both check-in and check-out dates.');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    onSearch({
      checkIn,
      checkOut,
      peopleCount: parseInt(peopleCount, 10),
    });
  };

  return (
    <section className="booking-strip">
      <div className="booking-item check-in-container">
        <div className="icon-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/924671dfa56681fdfe34880cb26d48b1a3b8d392?placeholderIfAbsent=true&apiKey=c38e0d6330864a46a5ff8383512bf286"
            className="icon"
            alt="Calendar icon"
          />
        </div>
        <div className="booking-detail">
          <label className="label">Check in</label>
          <input
            type="date"
            className="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <div className="divider"></div>

      <div className="booking-item check-out-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71daf0e413d88ad3c2ee9a098f4fbed8d0061dfc?placeholderIfAbsent=true&apiKey=c38e0d6330864a46a5ff8383512bf286"
          className="icon"
          alt="Calendar icon"
        />
        <div className="booking-detail">
          <label className="label">Check out</label>
          <input
            type="date"
            className="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn}
          />
        </div>
      </div>

      <div className="divider"></div>

      <div className="booking-item rooms-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c27ed90b9c664579712fdc2ee45b21dfad67d032?placeholderIfAbsent=true&apiKey=c38e0d6330864a46a5ff8383512bf286"
          className="icon"
          alt="People icon"
        />
        <div className="booking-detail">
          <label className="label">Rooms for:</label>
          <input
            type="number"
            min="1"
            max="5"
            className="people-count"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
          />
        </div>
      </div>

      <button className="search-button" onClick={handleSearch}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1054b25d62ad75a70bfcdafbc2883e6e6661594f?placeholderIfAbsent=true&apiKey=c38e0d6330864a46a5ff8383512bf286"
          className="search-icon"
          alt="Search icon"
        />
        <span className="search-text">Search Rooms</span>
      </button>

      {nights > 0 && (
        <div className="nights-info">
          <p>{nights} night{nights > 1 ? 's' : ''} selected</p>
        </div>
      )}
    </section>
  );
};

export default BookingStrip;
