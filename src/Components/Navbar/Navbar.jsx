import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import './Navbar.css';
import LoginPopup from '../Popups/LoginPopup';
import RegPopup from '../Popups/RegPopup';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

        <button className="account-btn" onClick={openLogin}>Profile</button>


        <LoginPopup
          isOpen={showLogin}
          onClose={closeModals}
          onSwitch={openRegister}
        />
        <RegPopup
          isOpen={showRegister}
          onClose={closeModals}
          onSwitch={openLogin}
        />
      </div>
    </header>
  );
};

export default Navbar;
