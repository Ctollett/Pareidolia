import React, { useEffect, useState } from 'react';
import './globalstyles.css';
import arrow from './arrow.svg';
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
    // This does not seem to work without a settimeout
    setTimeout(() => {

      let tl = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          trigger: ".navContainer",
          scroller: "#main-container",
          scrub: 1,  
          toggleActions: "play reverse play reverse",
            
        },
      })

         
      tl.fromTo('#navLine', {
        opacity: 1,   
      },
      {
        
        opacity: 0,
        duration: 1,
        immediateRender: true,
      })  


      const sections = [
        { trigger: '.navContainer', startColor: 'black', endColor: 'black' },
        { trigger: '.infoSection2Wrapper', startColor: 'white', endColor: 'white' },
        { trigger: '.infoSectionContainer4', startColor: 'white', endColor: 'black' },
     
      ];
    
      sections.forEach(section => {
        let tl2 = gsap.timeline({
          scrollTrigger: {
            start: 'top top',
            end: 'bottom top',     
            trigger: section.trigger,
            scroller: '#main-container',
            scrub: true,
            toggleActions: 'restart none reverse none',
          }
        });

        sections.forEach(section => {
          let tl2 = gsap.timeline({
            scrollTrigger: {
              start: 'top top',
              end: 'bottom top',     
              trigger: section.trigger,
              scroller: '#main-container',
              scrub: true,
              toggleActions: 'restart none reverse none',
            }
          });
        
          sections.forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    start: 'top top',
                    end: 'bottom top',     
                    trigger: section.trigger,
                    scroller: '#main-container',
                    scrub: true,
                    toggleActions: 'restart none reverse none',
                }
            });
        
            tl.fromTo('.mobile-icon span', 
                { backgroundColor: section.startColor },
                { backgroundColor: section.endColor, immediateRender: true }
            )
            .fromTo('.navbar h1', 
                { color: section.startColor },
                { color: section.endColor, immediateRender: true },
                "<"
            );    
        });
    });

  });
    })  

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

