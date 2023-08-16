import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Header from './Header/index';
import InfoSection from './AboutSection';
import InfoSection2 from './QuoteSection';
import InfoSection5 from './PeopleSection'
import InfoSection4 from './ScrollText'
import InfoSection6 from './LatestWorkHeader';
import ScrollSection from './ScrollComponent';
import { useRef } from 'react';
import FeaturedWork from "./LatestWork" 
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import MobileButtonContext from '../../context/MobileButtonContext';
import Lenis from "@studio-freight/lenis"
import "../../assets/globalstyles.css"
import { useHistory } from 'react-router-dom';





  
function Home() {
  const [isContentVisible, setContentVisible] = useState(true);


  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      // Scroll to the top when the route changes
      window.scrollTo(0, 0);
    });

    // Clean up the listener when the component unmounts
    return () => { 
      unlisten();
    };
  }, [history])



  
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Create the lenis object and set up event listeners only after everything has loaded
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Clean up the lenis object when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Listen for changes in the URL
    const handleLocationChange = () => {
      if (window.location.pathname === '/') {
        // If the URL is the home page, scroll to the top
        window.scrollTo(0, 0);
      }
    };

    // Add the event listener to detect URL changes
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };


  
  return (   
      <MobileButtonContext.Provider value={isContentVisible}>
        <div>
          <Navbar handleMenuClick={handleMenuClick} />
          <div className={isContentVisible ? 'fade-in' : 'fade-out'}>
            <Header/>
            <InfoSection/>   
            <InfoSection2 />
            <InfoSection5/>
            <InfoSection4 />
            <ScrollSection/>
            <FeaturedWork />
          </div> 
        </div>
      </MobileButtonContext.Provider>
  );
}  

export default Home;
  