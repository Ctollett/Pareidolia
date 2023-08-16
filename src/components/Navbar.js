import React, { useEffect, useState } from 'react';
import '../assets/globalstyles.css';
import arrow from '../assets/arrow.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Navbar = ({ handleMenuClick, isContentVisible }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);



  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
    handleMenuClick();

    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    let line = document.querySelector('#navLine')

      gsap.to(line, { 
      opacity: 0,
      scrollTrigger: {
        start: "top top",  
        trigger: ".titleSection p",   
        scrub: 2,
        end: "bottom bottom",  
        toggleActions: "play reverse play reverse",
      }
    });  




  }, [] );  

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
      <div id="navLine"></div>
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

export default Navbar;

