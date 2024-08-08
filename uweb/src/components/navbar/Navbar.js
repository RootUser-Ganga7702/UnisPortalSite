import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have this CSS file
import { RxHome } from "react-icons/rx";
import { GrServices } from "react-icons/gr";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
//import AppImage from '../rotationImage';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">  
          {/* <AppImage /> */}
          <img src="https://www.unistechnosoft.com/wp-content/uploads/2021/12/unis.png"
          alt="UNIS" style={{height:'80px',width:'80px',marginLeft:'25px'}}  />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link"> <RxHome className='iconEdit' /> Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/services" className="nav-link dropdown-toggle" id='newIdSer' style={{fontSize:'18px'}}><GrServices className='iconEdit' />Services</Link>
          <div className="dropdown-menu">
            <Link to="/services/web-app" className="dropdown-item">Web Application</Link>
            <Link to="/services/android-dev" className="dropdown-item">AndroidDevelopment</Link>
            <Link to="/services/testing" className="dropdown-item">Testing</Link>
            <Link to="/services/data-science" className="dropdown-item">Data Science</Link>
            <Link to="/services/devops" className="dropdown-item">Devops</Link>
            <Link to="/services/ba" className="dropdown-item">BA</Link>
            <Link to="/services/it-consultancy" className="dropdown-item">IT Consultancy</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link"> <TbArrowRoundaboutRight className='iconEdit' />About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/careers" className="nav-link"> <FaChalkboardUser className='iconEdit' />Careers</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link"> <FaBlog className='iconEdit' /> Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link"> <IoMdContact className='iconEdit' /> Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Navbar;