import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Bg from '../Components/Background/Bg';
import BookingStrip from '../Components/BookingStrip/BookingStrip';
import BgImg from '../assets/rooms-bg.png';
import RoomList from '../Components/RoomCard/RoomList';

function Rooms() {
  const [peopleCount, setPeopleCount] = useState(1);  


  const handleSearch = ({ peopleCount }) => {
    setPeopleCount(peopleCount);
  };

  return (
    <>
      <Navbar />
      <Bg image={BgImg}>
        <h1 >Book Your Stay at CoyoteBeach. Find your perfect room in just a few clicks.</h1>
      </Bg>
      <BookingStrip onSearch={handleSearch} />
      <RoomList peopleCount={peopleCount} />
      <Footer />
    </>
  );
}

export default Rooms;
