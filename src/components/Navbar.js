import React, { useEffect, useState, useRef } from 'react';
import '../assets/globalstyles.css';
import arrow from '../assets/arrow.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Navbar = ({ handleMenuClick, isContentVisible }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(0);
  const locomotiveScrollRef = useRef(null);
  const ref = useRef(null);


  // Locomotive scroll setup
  useEffect(() => {
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      console.log("Initializing LocomotiveScroll...");
      locomotiveScrollRef.current = new LocomotiveScroll();
       console.log("Initialized LocomotiveScroll.");

      // Scroll to top
    };
    initializeLocomotiveScroll();

    return () => {
      // Cleanup: destroy the locomotive scroll instance when the component unmounts
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);
  



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
        start: "top 10%",  
        trigger: ".header-title p",   
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
      <div className={`mobile-menu-circle ${isMenuOpen ? 'open' : ''}`}></div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
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

export default Navbar;

