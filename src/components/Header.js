import React, { useEffect, useState } from 'react';
import ReactCurvedText from 'react-curved-text';
import './globalstyles.css';
import arrow2 from "./arrow2.svg";


const Background = ({ cursorX, movementSpeed }) => {
  const [prevCursorX, setPrevCursorX] = useState(cursorX);

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
          background.style.transform = `translate(-50%, -50%) translateX(${clampedTranslation}px)`;
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

const Header = ({ isContentVisible }) => {
  const [cursorX, setCursorX] = useState(window.innerWidth / 2);

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
    <header>
      <Background cursorX={cursorX} movementSpeed={1} />
      <div className={`titleSection ${isContentVisible ? '' : 'fade-out'}`}>
        <p className="hidden3">        
            Pareidolia: n. misperception of random stimuli as real things or people, <br /> as when faces are vividly seen in the flames of a fire.
        </p>
        <div className='titleInformation'>
          <div className='titleContainer'>
           <h1>Pareidolia.</h1>
           </div>
        <div className='scrollText-container rotate fadeIn'>
        <img src={arrow2} alt="Circular Text"/>
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}  
            cy={150}
            rx={36}
            ry={36}
            startOffset={0}
            reversed={false}
            text="Scroll Down - Scroll Down - Scroll Down -"
            textProps={{ style: { fontSize: 12 } }}
            textPathProps={null}
            tspanProps={{"dy": "30"}}
            ellipseProps={null}
            svgProps={null}
        />
         </div> 
         </div>  
        </div>
    </header>
  );
};

export default Header;
