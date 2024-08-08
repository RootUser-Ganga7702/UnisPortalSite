import React from 'react';
import './Contact.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt  } from 'react-icons/fa';
import { RxHome } from "react-icons/rx";
import { GrServices } from "react-icons/gr";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { Link  } from 'react-router-dom';
 
function Footer() {
  return (
    <footer className='mainfoot'>
      <div className="footer-content">
        <div className='box20'>
        <div className="footer-card logo-card image-card">
          <img className="footer-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9LDwhOC6eE99PfRo45zz7xMLHNRWxQYN9w&s" alt="Logo" />
        </div>
 
        <div className="footer-card contact-card contact-card">
          <h1 >Contact</h1>
          <p  ><FaEnvelope /> E-mail: <a href="mailto:info@velocioussolutions.in">info@velocioussolutions.in</a></p>
          <p ><FaPhoneAlt /> Contact No: 000000000</p>
          <div className="social-icons">
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>
        </div>
 
        <div className='box20'>
        <div className="footer-card address-card">
          <h1>Our Address</h1>
          <p>Abhi's Hiranya, 301, Guttala Begumpet, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</p>
          <h1>Hours of Operation</h1>
          <p>Monday - Friday: 09:00 - 20:00</p>
          <p>Saturday & Sunday: 10:30 - 22:00</p>
        </div>

        <div className="footer-card address-card newOne">
          <h1>Quick Links</h1>
          <div className='newAdd'>
          <div className='card0'>
            <Link to="/">
          <h1> <RxHome /> HOME</h1>
          </Link>
          <Link to="/services/web-app">
          <h1> <GrServices /> Services </h1>
          </Link>
          <Link to="/about">
          <h1> <TbArrowRoundaboutRight /> About Us </h1>
          </Link>
          </div>

          <div>
          <Link to="/careers">
          <h1> <FaChalkboardUser /> Careers </h1>
          </Link>
          <Link to="/blog">
          <h1> <FaBlog /> Blog </h1>
          </Link>
          </div>
          </div>
        </div>
        </div>

        </div>
        <div className="footer-bottom">
        <hr />
        <p className='footer-content'>&copy; 2024 Unis Technosoft. All rights reserved.</p>
      
      
      </div>      
    </footer>
  );
}
 
export default Footer;