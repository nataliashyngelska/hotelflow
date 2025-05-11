import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Bg from '../Components/Background/Bg';
import BgImg from '../assets/bg.jpg'
import Exc1 from '../assets/exc1.png'
import Exc2 from '../assets/exc2.png'
import Exc3 from '../assets/exc3.png'
import Exc4 from '../assets/exc4.png'
import Ev1 from '../assets/event1.png'
import Ev2 from '../assets/event2.png'
import './Entertainment.css'
import EventCard from '../Components/Events/EventCard';

function Entertainment() {
  return (
    <>
    <Navbar />

    <Bg image={BgImg}>
      <h1>Enjoy a wide range of entertainment experiences in CoyoteBeach!</h1>
    </Bg>

    <section className='excursion'>
      <h2>Popular excursion</h2>

      <div className="excursion-wrapper">

      <div className="exc-card">
      <img src={Exc1} alt="" />
        <h3 className='exc-title'>Centipede Tour - Guided Arizona
        Desert Tour by ATV</h3>
        <div className="exc-divider"></div>
        <span className='date'>25.08.2025</span>
        <p className="price"><span>From</span>$189</p>
      </div>

      <div className="exc-card">
      <img src={Exc2} alt="" />
        <h3 className='exc-title'>Molokini and Turtle Town Snorkeling
        Adventure Aboard</h3>
        <div className="exc-divider"></div>
        <span className='date'>28.07.2025</span>
        <p className="price"><span>From</span>$250</p>
      </div>

      <div className="exc-card">
      <img src={Exc3} alt="" />
        <h3 className='exc-title'>Westminster Walking Tour &
        Westminster Abbey Entry</h3>
        <div className="exc-divider"></div>
        <span className='date'>23.05.2025</span>
        <p className="price"><span>From</span>$300</p>
      </div>

      <div className="exc-card">
      <img src={Exc4} alt="" />
        <h3 className='exc-title'>All Inclusive Ultimate Circle Island Day
        Tour with Lunch</h3>
        <div className="exc-divider"></div>
        <span className='date'>30.06.2025</span>
        <p className="price"><span>From</span>$500</p>
      </div>

      </div>

    </section>

<div>
      <h1 style={{ textAlign: 'center' }}>FOR TODAY EVENTS!</h1>
      <p style={{ textAlign: 'center' }}>Spend the best days on our days!</p>

      <EventCard
        image={Ev1}
        title="Tomorrowland Beach"
        description="I actually don't like hotels and events and those people that make me sick"
        date="10 Jun 2024"
      />
      <EventCard
        image={Ev2}
        title="World Tropical"
        description="Please stop doing this to me, I can't even go outside for 15 minutes."
        date="10 Sep 2024"
        reverse
      />
    </div>

    <Footer /> 
  </>
  )
}

export default Entertainment