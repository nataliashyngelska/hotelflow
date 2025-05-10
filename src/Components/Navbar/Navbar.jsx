import React, { useState } from 'react';
import './Navbar.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import AuthPopup from '../Popups/AuthPopup';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>Ua <MdKeyboardArrowDown /></button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#">En</a>
            </div>
          )}
        </div>

        <button className="account-btn" onClick={openAuthPopup}>Profile</button>

        <AuthPopup isOpen={showAuthPopup} onClose={closeAuthPopup} />
      </div>
    </header>
  );
};

export default Navbar;
