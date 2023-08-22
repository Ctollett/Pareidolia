import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import BlogSection from "./BlogSection";
import BlogPost from "./BlogPost";
import BlogHeader from "./BlogHeader/index"
import Navbar2 from '../../components/navBar2';
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'react-gsap';
import { gsap } from 'gsap';


function Work() {
  const [isContentVisible, setContentVisible] = useState(true);

  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };

  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  

  return (
   
    <>
      <div>
       <Navbar2 handleMenuClick={handleMenuClick} />
       <div className={isContentVisible ? 'fade-in' : 'fade-out'}>
      <Switch>
        <Route exact path="/work" component={BlogSection} />
        <Route path="/work/:id/:title" component={BlogPost} />
      </Switch>
      </div>
      </div>
    </>   

  );
}

export default Work;