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
import Footer from '../components/Footer';
import ScrollComponent from '../components/scrollComponent';
import useLocoScroll from "../hooks/useLocoScroll";
import { useRef } from 'react';
import "../components/globalstyles.css"
import ScrollSection from '../components/scrollComponent';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";




function Home() {
  const [isContentVisible, setContentVisible] = useState(true);
  const [isOpeningAnimationComplete, setOpeningAnimationComplete] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [cursorX, setCursorX] = useState(window.innerWidth / 2);
  const [scrollPosition, setScrollPosition] = useState(0);

  const ref = useRef(null);
  useLocoScroll(true);
  


  const handleMenuClick = () => {   
    setContentVisible(!isContentVisible);
  };


  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);   
  
   

  
  return (
    <>
  
      <div data-scroll-container ref={ref} id='main-container'>

       
             <Navbar handleMenuClick={handleMenuClick} />
            <Header isContentVisible={isContentVisible} />
            <Background cursorX={cursorX} movementSpeed={1} data-scroll data-scroll-speed="1" />
            <InfoSection/>   
            <InfoSection2 />
            <InfoSection5/>
            <InfoSection4 />
            <ScrollSection/>
            <FeaturedWork />
    
          </div> 

         
      </>
  );
}  

export default Home;
  