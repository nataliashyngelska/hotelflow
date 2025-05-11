import React, { useState } from 'react';
import './AuthPopup.css'; 
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import Button from '../Button/Button';

const AuthPopup = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      alert('Login');
    } else {
      if (form.password !== form.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      console.log('Register with', {
        name: form.name,
        email: form.email,
        password: form.password
      });
    }

    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="popup-content">
              <button className="close-btn" onClick={onClose}>&times;</button>
              <h1>{isLogin ? 'Login' : 'Register'}</h1>

              <form className="inputs" onSubmit={handleSubmit}>
                {!isLogin && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                  />
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                  required
                />

                {!isLogin && (
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                )}

                {isLogin && (
                  <span className="forgot-txt">
                    <p>
                      Don’t have an account?{' '}
                      <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Register</a>
                    </p>
                    <p className="forgot">Forgot password?</p>
                  </span>
                )}

                {!isLogin && (
                  <Button
                    text="Have an account? Sign in"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLogin(true);
                    }}
                  />
                )}

                <Button text={isLogin ? 'Login' : 'Register'} type="submit" />
              </form>

              <p>{isLogin ? 'Login' : 'Register'} with others</p>

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
};

export default AuthPopup;
