import React, { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRef } from 'react';
import './globalstyles.css';
import '../components/Locomotive.css';
const Background = ({ cursorX, movementSpeed }) => {
    const [prevCursorX, setPrevCursorX] = useState(cursorX);
    const ref = useRef(null);
    const { scroll } = useLocomotiveScroll();
  
    useEffect(() => {
      const updateBackgroundPosition = () => {
        setPrevCursorX((prevCursorX) => {
          if (prevCursorX !== cursorX) {
            const background = document.querySelector('.background');
            const windowWidth = window.innerWidth;
            const backgroundWidth = background.offsetWidth;
            const maxTranslation = (windowWidth - backgroundWidth) / 2;
            const translation = (cursorX - windowWidth / 2) * movementSpeed;
            const clampedTranslation = Math.max(-maxTranslation, Math.min(maxTranslation, translation));
            background.style.transform = `translate(-50%, -50%) translate(${clampedTranslation}px)`;
            return cursorX;
          }
          return prevCursorX;
        });
      };
  
      const animationFrame = requestAnimationFrame(updateBackgroundPosition);
  
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, [cursorX, movementSpeed]);
    

  
    return <div className="background"></div>;
  };
  
  export default Background;