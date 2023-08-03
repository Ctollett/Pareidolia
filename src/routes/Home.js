import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import OpeningPage from '../components/openingPage';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import FeaturedWork from '../components/FeaturedWork';
import InfoSection5 from '../components/InfoSection5'
import Background from '../components/Background';
import InfoSection4 from '../components/InfoSection4'
import InfoSection6 from '../components/InfoSection6';
import Footer from '../components/Footer';
import ScrollComponent from '../components/scrollComponent';
import useLocoScroll from "../hooks/useLocoScroll";
import { useRef } from 'react';
import "../components/globalstyles.css"
import ScrollSection from '../components/scrollComponent';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import MobileButtonContext from '../components/MobileButtonContext';




function Home() {
  const [isContentVisible, setContentVisible] = useState(true);
  const [isOpeningAnimationComplete, setOpeningAnimationComplete] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [cursorX, setCursorX] = useState(window.innerWidth / 2);
  const [scrollPosition, setScrollPosition] = useState(0);

  const ref = useRef(null);
  useLocoScroll(true);

  


  useEffect(() => {
    // Listen for changes in the URL
    const handleLocationChange = () => {
      if (window.location.pathname === '/') {
        // If the URL is the home page, reload the page
        window.location.reload();
      }
    };

    // Add the event listener to detect URL changes
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);


  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);     
  
  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };
  

  
  return (   
    <>
  <MobileButtonContext.Provider value={isContentVisible}>
      <div data-scroll-container ref={ref} id='main-container'>
           <Navbar handleMenuClick={handleMenuClick} />
           <div className={isContentVisible ? 'fade-in' : 'fade-out'}>
            <Header/>
            <Background cursorX={cursorX} movementSpeed={1} data-scroll data-scroll-speed="1" />
            <InfoSection/>   
            <InfoSection2 />
            <InfoSection5/>
            <InfoSection4 />
            <ScrollSection/>  
            <InfoSection6/>
            <FeaturedWork />
         
          </div> 
          </div>
          </MobileButtonContext.Provider>
         
      </>
  );
}  

export default Home;
  