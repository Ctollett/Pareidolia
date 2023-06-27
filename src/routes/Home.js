import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import OpeningPage from '../components/openingPage';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import FeaturedWork from '../components/FeaturedWork';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRef } from 'react';

function Home() {
  const [isContentVisible, setContentVisible] = useState(true);
  const [isOpeningAnimationComplete, setOpeningAnimationComplete] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [cursorX, setCursorX] = useState(window.innerWidth / 2);
  const [scrollPosition, setScrollPosition] = useState(0);

  const ref = useRef(null);
  const { scroll } = useLocomotiveScroll();

  const options = {
    smooth: true,
    multiplier: 0.5
  };



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


  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div data-scroll-container ref={ref}>
        {!isOpeningAnimationComplete && <OpeningPage onAnimationComplete={handleOpeningAnimationComplete} />}
        {isOpeningAnimationComplete && (
          <div data-scroll-section>
            <Navbar handleMenuClick={handleMenuClick} />
            <div data-scroll data-scroll-speed="5">
              {isHeaderVisible && <Header isContentVisible={isContentVisible} />}
            </div>

            <Background cursorX={cursorX} movementSpeed={1} data-scroll data-scroll-speed="1" />

            <InfoSection/>

            <InfoSection2 />
            <FeaturedWork />
            <Footer />
          </div>
        )}
      </div>
    </LocomotiveScrollProvider>
  );
}

export default Home;
