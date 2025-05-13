import React, { useState } from 'react';
import './Navbar.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import AuthPopup from '../Popups/AuthPopup';

const Navbar = () => {
  const [showAuthPopup, setShowAuthPopup] = useState(false);


  const openAuthPopup = () => setShowAuthPopup(true);
  const closeAuthPopup = () => setShowAuthPopup(false);

  return (
    <header className="header">
      <a href="/" className="logo">CoyoteBeach</a>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Entertainment">Entertainment</Link>
        <Link to="/Profile">Contact us</Link>
        <Link to="/Rooms">Rooms</Link>
      </nav>

      <div className="btns">

        <button className="account-btn" onClick={openAuthPopup}>Profile</button>

        <AuthPopup isOpen={showAuthPopup} onClose={closeAuthPopup} />
      </div>
    </header>
  );
};

export default Navbar;
