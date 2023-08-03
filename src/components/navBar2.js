import React, { useEffect, useState } from 'react';
import './globalstyles.css';
import arrow from './arrow.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Navbar2 = ({ handleMenuClick, isContentVisible }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);



  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
    handleMenuClick();

    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

 

  return (
    <div className={`navContainer ${showNavbar ? 'show' : ''}`}>
      <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
        <h1 id="navLogo">P.<span></span></h1>
        <button
          className={`mobile-icon ${!isContentVisible && isMenuOpen ? 'active' : ''}`}
          onClick={handleButtonClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/">
            <img src={arrow} alt="Arrow" />HOME
            </a>
          </li>
          <li>  
            <a href="/work">
              <img src={arrow} alt="Arrow" />WORK
            </a>
          </li>
          <li>
            <a href="/about">
              <img src={arrow} alt="Arrow" />PEOPLE
            </a>
            </li>
            <li>
            <a href="/contact">
              <img src={arrow} alt="Arrow" />CONTACT
            </a>
            </li>
    
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;