import React, { useEffect } from 'react';
import Typist from 'react-typist';
import './globalstyles.css';

const OpeningPage = ({ onAnimationComplete }) => {
  useEffect(() => {
    const background = document.querySelector('.openingBackground');
    background.classList.add('fade-background');

    const openingAnimationDuration = 0; // Adjust the duration as needed

    const animationTimeout = setTimeout(() => {
      onAnimationComplete();
    }, openingAnimationDuration);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [onAnimationComplete]);

  return (
    <header>
      <div className="openingBackground"></div>
      <div className="titleSection">
        <p className="hidden3">
          <Typist>
            <Typist.Delay ms={3000} />
            Pareidolia: n. misperception of random stimuli as real things or people, <br /> as when faces are vividly seen in the flames of a fire.
          </Typist>
        </p>
        <h1 className="hidden3"></h1>
      </div>
    </header>
  );
};

export default OpeningPage;
