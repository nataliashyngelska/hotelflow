import React from 'react'
import Button from '../Button/Button'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import "./LoginPopup.css"


function LoginPopup({ isOpen, onClose, onSwitch }) {
    return (
      <>
        {isOpen && (
          <div className="modal">
            <div className="modal-wrapper">
              <div className="popup-content">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h1>Login</h1>
                <section className="inputs">
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <span className="forgot-txt">
                    <p>
                      Don’t have an account? <a href="#" onClick={(e) => { e.preventDefault(); onSwitch(); }}>Register</a>
                    </p>
                    <p className="forgot">Forgot password?</p>
                  </span>
                </section>
                <Button text="Login" />
                <p>Login with others</p>
                <div className="medias">
                  <button className="btn-media">
                    <FcGoogle className="icon-media" /> Login with Google
                  </button>
                  <button className="btn-media">
                    <FaFacebookSquare className="icon-media" /> Login with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  

export default LoginPopup