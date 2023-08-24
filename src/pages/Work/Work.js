import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import BlogSection from "./BlogSection";
import BlogPost from "./BlogPost";
import BlogHeader from "./BlogHeader/index"
import Navbar2 from '../../components/navBar2';
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from 'gsap';


function Work() {
  const [isContentVisible, setContentVisible] = useState(true);
  const locomotiveScrollRef = useRef(null);

  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };

  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
 


  

  return (
   
    <>
      <div>
       <Navbar2 handleMenuClick={handleMenuClick} />
       <div className={isContentVisible ? 'fade-in' : 'fade-out'}>
      <Switch>
        <Route exact path="/work/:category?" component={BlogSection} />
        <Route path="/work/:id/:title/" component={BlogPost} />
      </Switch>
      </div>
      </div>
    </>   

  );
}

export default Work;