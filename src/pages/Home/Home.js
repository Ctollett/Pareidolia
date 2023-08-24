import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Header from './Header/index';
import InfoSection from './AboutSection';
import InfoSection2 from './QuoteSection';
import InfoSection5 from './PeopleSection';
import InfoSection4 from './ScrollText';
import InfoSection6 from './LatestWorkHeader';
import ScrollSection from './ScrollComponent';
import FeaturedWork from "./LatestWork"; 
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import MobileButtonContext from '../../context/MobileButtonContext';
import Lenis from "@studio-freight/lenis";
import "../../assets/globalstyles.css";
import { useHistory } from 'react-router-dom';

function Home() {
  const [isContentVisible, setContentVisible] = useState(true);
  const ref = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const history = useHistory();


  // Disabling native browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // Locomotive scroll setup
  useEffect(() => {
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      console.log("Initializing LocomotiveScroll...");
locomotiveScrollRef.current = new LocomotiveScroll();
console.log("Initialized LocomotiveScroll.");

      // Scroll to top
      locomotiveScrollRef.current.scrollTo(0);
    };
    initializeLocomotiveScroll();

    return () => {
      // Cleanup: destroy the locomotive scroll instance when the component unmounts
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  // Reset Locomotive Scroll on Route Change
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (location.pathname === "/") {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.update();
          locomotiveScrollRef.current.scrollTo(0, 0, 0); // Instant scroll to the top
        }
      }
    });

    return () => {
      unlisten();
    };
  }, [history, locomotiveScrollRef]);

  // Handle menu click
  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };



  return (
    <MobileButtonContext.Provider value={isContentVisible}>
      <div>
        <Navbar handleMenuClick={handleMenuClick} />
        <div className={isContentVisible ? 'fade-in' : 'fade-out'}>
          <Header />
          <InfoSection /> 
          <div className='group'>
            <InfoSection2 />
            <InfoSection5 />  
          </div>
          <div className='group-2'> 
            <InfoSection4 />
            <ScrollSection />
            <FeaturedWork />
          </div> 
        </div> 
      </div>
    </MobileButtonContext.Provider>
  );
}

export default Home;
