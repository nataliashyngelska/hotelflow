import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import BgImg from '../assets/profile-bg.png'
import Bg from '../Components/Background/Bg'
import Button from '../Components/Button/Button'
import { useState, useEffect } from 'react';
import BookingHistoryModal from '../Components/Popups/BookingHistoryModal'; // шляхи адаптуй під свою структуру

import './Profile.css'

function Profile() {

  const [bookings, setBookings] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);
  }, []);

  const openHistory = () => setShowHistory(true);
  const closeHistory = () => setShowHistory(false);



  return (
   <>
      <Navbar />

      <Bg image={BgImg} style={{ height: '350px' }}/>

      <div className="profile-container">


      <div className="profile-wrapper">
        <div className="user-info">
        <div className="user-left">
          <img src="https://via.placeholder.com/80" alt="avatar" className="avatar" />
          <div>
            <h3>Username</h3>
            <p>alexarawles@gmail.com</p>
          </div>
        </div>

        <button className="edit-btn">Edit</button>
      </div>

      <form className="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your First Name" />
          </div>
          <div className="form-group">
            <label>Nick Name</label>
            <input type="text" placeholder="Your First Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option>Your First Name</option>
            </select>
          </div>
          <div className="form-group">
            <label>Country</label>
            <select>
              <option>Your First Name</option>
            </select>
          </div>
          
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Language</label>
            <select>
              <option>Your First Name</option>
            </select>
          </div>

          <div className="form-group">
            <label>History</label>
            <Button text={"View History of your Booking"} onClick={openHistory} />
            <BookingHistoryModal isOpen={showHistory} onClose={closeHistory} bookings={bookings} />

          </div>

        </div>
      </form>

      <div className="email-section">
        <h4>My email Address</h4>
        <div className="email-item">
      
          <div>
            <p>alexarawles@gmail.com</p>
            <span>1 month ago</span>
          </div>
        </div>
        <button className="add-email-btn">+Add Email Address</button>
      </div>
      </div>
    </div>
      
      <Footer />
   </>
  )
}

export default Profile