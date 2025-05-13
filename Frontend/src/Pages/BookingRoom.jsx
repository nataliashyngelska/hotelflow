import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Button from '../Components/Button/Button'
import Bg from '../Components/Background/Bg'
import './BookingRoom.css'
import { useLocation } from 'react-router-dom'
import ImgBg from '../assets/book-bg.jpg'
import { FaUserFriends } from 'react-icons/fa';



function BookingRoom() {

const location = useLocation();
const room = location.state?.room;

  return (
    <>
    <Navbar/>
    <Bg image={ImgBg} style={{ height: '250px' }}></Bg>

    <h1 className='booking-title'>Booking details</h1>

    <section className="booking-content">

      <section className="booking-details-form">
        <h2>I have an account (optional)</h2>
          <div className="have-account">
              <label htmlFor="name">Username</label>
              <input type="text" name='name' placeholder='Username'/>

              <label htmlFor="pass">Password</label>
              <input type="password" name='pass' placeholder='Password'/>

              <div className="forgot-pass">
                  <p>Forgot password?</p>
                  <p>Don’t have an account? Register </p>
              </div>

              <Button text={'Sign in'}/>

          </div>

          <h2>Booking details</h2>
          <div className="booking-details">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Address" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              
              <label htmlFor="check-in">Check-in Date</label>
              <input type="date" id="check-in" name="check-in" />

              <label htmlFor="check-out">Check-out Date</label>
              <input type="date" id="check-out" name="check-out" />
          </div>

          <h2>Prepayment</h2>
              <div className="prepayment">
              <div className="form-group">
                  <label htmlFor="card-number">Card Number</label>
                  <input 
                  type="text" 
                  id="card-number" 
                  name="card-number" 
                  placeholder="1234 5678 9012 3456" 
                  inputMode="numeric" 
                  maxLength="19" 
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="expiry-date">Expiry Date</label>
                  <input 
                  type="month" 
                  id="expiry-date" 
                  name="expiry-date" 
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input 
                  type="text" 
                  id="cvv" 
                  name="cvv" 
                  placeholder="123" 
                  inputMode="numeric" 
                  maxLength="4" 
                  />
              </div>
              </div>

              <Button className="confirm-booking" text={'Confirm booking '}/>

      </section>

      <section className="booking-details-card">
        {room && (
          <div className="selected-room">

            <img src={room.image} alt={room.title} className="modal-image" />
            <h2 className="modal-title">{room.title}</h2>
            <div className="modal-desc">
              <p className="modal-text">{room.description}</p>
              <p className="modal-text">
                <FaUserFriends className="icon" /> Rooms for:  <strong> {room.people} </strong> people
              </p>
              <p className="modal-price">{room.price}₴ / night</p>
            </div> 
          </div>
          )}

      </section>

    </section>


    <Footer/>
    </>
  )
}

export default BookingRoom