import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Bg from '../Components/Background/Bg'
import BookingStrip from '../Components/BookingStrip/BookingStrip'
import BgImg from '../assets/home-bg.png'
import Room1 from '../assets/room1.png'
import Room2 from '../assets/room2.png'
import Room3 from '../assets/room3.png'
import Arr1 from '../assets/arr1.png'
import Arr2 from '../assets/arr2.png'
import './Home.css'

function Home() {
  return (
    <>
      <Navbar />

      <Bg image={BgImg}>
        <h1>Welcome To CoyoteBeach! The best Hotel, with the best service ever!</h1>
      </Bg>

      <BookingStrip />

      <div className="cta-image"></div>

      <section className="services">
        <h2>Our Services</h2>
        <div className="wrapper">
          <div className="desc-wrapper">
            <div className="services-desc">
              <div className="desc">
                <h3>Ordering extra services</h3>
                <p>We offer a wide range of additional services including room service, laundry, airport transfer, and guided tours. Just let us know what you need, and we’ll handle the rest.</p>
              </div>
            </div>

            <div className="services-desc">
              <div className="desc">
                <h3>Digital key-card</h3>
                <p>Use your smartphone or smartwatch to securely access your room without a physical key. Fast, convenient, and safe – perfect for a contactless experience.</p>
              </div>
            </div>

            <div className="services-desc">
              <div className="desc">
                <h3>Self check-in/out</h3>
                <p>Skip the front desk! Use our app or self-service kiosk to check in or out with ease, ensuring a fast and touch-free experience.</p>
              </div>
            </div>

            <div className="services-desc">
              <div className="desc">
                <h3>HR-navigation</h3>
                <p>Our HR-navigation service helps new employees or guests adapt quickly by providing personalized guidance, onboarding support, and access to essential internal resources.</p>
              </div>
            </div>

            <div className="services-desc">
              <div className="desc">
                <h3>Loyalty program</h3>
                <p>Join our loyalty program to enjoy exclusive perks like free upgrades, late check-outs, and special discounts. The more you stay, the more you earn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hot-room-prices">
        <h1>Hot Room Prices!</h1>
        <p>Take a look at the hot-sales prices!</p>
        <div className="room-cards-wrapper">
        <img src={Arr1} alt="arr1" />
          <div className="hot-room-card">
            <img src={Room1} alt="Standard Family Room" />
            <h3>Standard Family</h3>
            <p>Beautiful landscape view</p>
            <p className='price'>$816 <span>/3 nights</span></p>
          </div>

          <div className="hot-room-card">
            <img src={Room2} alt="Deluxe Room" />
            <h3>Deluxe Room</h3>
            <p>Sea view with balcony</p>
            <p className='price'>$950 <span>/3 nights</span></p>
          </div>

          <div className="hot-room-card">
            <img src={Room3} alt="Presidential Suite" />
            <h3>Presidential Suite</h3>
            <p>Ultimate luxury experience</p>
            <p className='price'>$2100 <span>/3 nights</span></p>
          </div>
          <img src={Arr2} alt="arr2" />

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
