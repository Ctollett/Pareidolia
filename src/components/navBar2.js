import React, { useEffect, useState } from 'react';
import '../assets/globalstyles.css';
import arrow from '../assets/arrow.svg';
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
    <div className={`navContainer-2 ${showNavbar ? 'show' : ''}`}>
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
      <div className={`mobile-menu-circle ${isMenuOpen ? 'open' : ''}`}></div>
        <ul>
          <li>
            <a href="/">
            HOME
            </a>
          </li>
          <li>    
            <a href="/work">
            WORK
            </a>
          </li>
            <li>
            <a href="/contact">
            CONTACT
            </a>
            </li>
    
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;