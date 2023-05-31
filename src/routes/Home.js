import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import OpeningPage from '../components/openingPage';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import FeaturedWork from '../components/FeaturedWork';
import Background from '../components/Background';
import Footer from '../components/Footer';
import '../components/globalstyles.css';


   

function Home() {
  const [isContentVisible, setContentVisible] = useState(true);
  const [isOpeningAnimationComplete, setOpeningAnimationComplete] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [cursorX, setCursorX] = useState(window.innerWidth / 2);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMenuClick = () => {
    setContentVisible(!isContentVisible);
  };

  const handleOpeningAnimationComplete = () => {
    setOpeningAnimationComplete(true);
    setHeaderVisible(true);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <>
      {!isOpeningAnimationComplete && (
        <OpeningPage onAnimationComplete={handleOpeningAnimationComplete} />
      )}

      {isOpeningAnimationComplete && (
        <>
          <Navbar handleMenuClick={handleMenuClick} />
          {isHeaderVisible && <Header isContentVisible={isContentVisible} />}
          <Background cursorX={cursorX} movementSpeed={1} />
          <InfoSection />
          <InfoSection2 />
          <FeaturedWork />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
