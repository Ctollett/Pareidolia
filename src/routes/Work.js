import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import BlogSection from "../components/BlogSection";
import BlogPost from "../components/BlogPost";
import BlogHeader from "../components/BlogHeader"
import FeaturedWork from "../components/FeaturedWork";
import Navbar2 from '../components/navBar2';
import useLocoScroll from "../hooks/useLocoScroll";


function Work() {
  const [isContentVisible, setContentVisible] = useState(true);

  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };

  const ref = useRef(null);
  useLocoScroll(true);



  return (
 
    <>
      <div data-scroll-container ref={ref} id='main-container'>
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