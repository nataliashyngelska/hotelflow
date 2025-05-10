import React from 'react'
import "./LoginPopup.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Button from '../Button/Button'

function RegPopup({ isOpen, onClose, onSwitch }) {
    return (
      <>
        {isOpen && (
          <div className="modal">
            <div className="modal-wrapper">
              <div className="popup-content">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h1>Register</h1>
                <section className="inputs">
                  <input type="text" placeholder="Full name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <input type="password" placeholder="Confirm password" required />
                </section>
                <Button text="Register" />
                <Button text="Have account? Sign in" onClick={onSwitch} />
                <p>Register with others</p>
                <div className="medias">
                  <button className="btn-media">
                    <FcGoogle className="icon-media" /> Continue with Google
                  </button>
                  <button className="btn-media">
                    <FaFacebookSquare className="icon-media" /> Continue with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  

export default RegPopup