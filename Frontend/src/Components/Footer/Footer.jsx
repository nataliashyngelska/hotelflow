import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <footer className='footer'>
        <div className="content">

            <section className="support">
                <h3 className="section-title">Support</h3>
                <ul className='section-list'>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Safety information</a></li>
                    <li><a href="#">Cancellation options</a></li>
                </ul>
            </section>

            <section className="company">
                <h3 className="section-title">Company</h3>
                <ul className="section-list">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Community Blog</a></li>
                    <li><a href="#">Terms of service</a></li>
                </ul>
            </section>

            <section className="contact">
               <h3 className="section-title">Contact</h3>
               <ul className="section-list">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Get in touch</a></li>
                    <li><a href="#">Partnerships</a></li>
               </ul>
            </section>

            <section className="social">
              <h3 className="section-title">Social</h3>

              <div className="media-icons">
                <IoLogoFacebook />
                <FaInstagramSquare />
                <FaSquareXTwitter />
              </div>

            </section>

        </div>

        <div className="hz">
                <h1 className='logo'>CoyoteBeach</h1>
                <div className="footer-divider"></div>
                <p className='copyright'>© Copyright Acenda 2025</p>
            </div>
    </footer>
  )
}

export default Footer