import React, { useState, useEffect, useRef } from 'react';
import Navbar2 from '../../components/navBar2';
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import "./index.css";



function Contact () {

    const [isContentVisible, setContentVisible] = useState(true);

  const handleMenuClick = () => {
    setContentVisible(prevState => !prevState);
  };
  
    return(
        <>   
         <Navbar2 handleMenuClick={handleMenuClick} /> 
         <div className={isContentVisible ? 'fade-in' : 'fade-out'} id='contactSection'>
          <ContactHeader /> 
          <ContactForm /> 
          </div>
        </>  
    )  
}

export default Contact;    