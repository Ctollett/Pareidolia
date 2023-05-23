import React, { useEffect, useState } from 'react';
import './globalstyles.css';


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
        <h1 className="hidden3">Pareidolia.</h1>
      </div>
    </header>
  );
};

export default Header;
