import React, { useState, useEffect, useRef } from 'react';
import Navbar2 from '../components/navBar2';
import AboutHeader from "../components/AboutHeader";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";



function About () {

    const [isContentVisible, setContentVisible] = useState(true);

  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };
  
    return(
        <>   
         <Navbar2 handleMenuClick={handleMenuClick} /> 
         <div className={isContentVisible ? 'fade-in' : 'fade-out'}>
          <AboutHeader /> 
          <ContactSection /> 
          <Footer />  
          </div>
        </>  
    )
}

export default About;    