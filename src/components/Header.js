import React, { useEffect, useState, useRef } from 'react';
import "./globalstyles.css";
import Typist from 'react-typist';



const Header = () => {
   const [cursorX, setCursorX] = useState(window.innerWidth / 2);
   const [prevCursorX, setPrevCursorX] = useState(window.innerWidth / 2);
   const maxTranslation = 30;


   
   useEffect(() => {
   const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setPrevCursorX(cursorX)
   };

   document.addEventListener('mousemove', handleMouseMove);

   return () => {
    document.removeEventListener('mousemove', handleMouseMove);
   };

}, []);

const calculateTranslation = () => {
    const windowWidth = window.innerWidth;
    const translationRange = maxTranslation * 2;
    const cursorRange = windowWidth - translationRange;
    const translationPercentage = ((cursorX - translationRange / 2) / cursorRange) * 100;
 
    return translationPercentage;
  };  

  const calculateTransitionDuration = () => {
    const transitionDuration = Math.abs(cursorX - prevCursorX) * 0.005;
    return `${transitionDuration}s`;
  }
  
  
        return(

        <header>
            <div className="background" style={{
                transform: `translateX(${calculateTranslation()}%`,
                transitionDuration: calculateTransitionDuration(),
                
                }} ></div>
            <div class="titleSection">   
            <p class="hidden3">
            <Typist> <Typist.Delay ms={500} />Pareidolia: n. misperception of random stimuli as real things or people, as when faces are vividly seen in the flames of a fire.</Typist></p>
            <a id="exploreButton">Explore</a>
            <div class="socialsSection">
            </div>
            <h1 class="hidden3">Pareidolia.</h1>
       </div>
       
       
       </header>
        )
    }

export default Header;