import React, { useEffect, useState } from 'react';
import ReactCurvedText from 'react-curved-text';
import './globalstyles.css';
import arrow2 from "./arrow2.svg";
import { Parallax } from 'react-scroll-parallax';
import collagePhoto from './collageArt.jpg';



const Header = ({ isContentVisible }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);


  return (
    <header>
      <div className={`titleSection ${isContentVisible ? '' : 'fade-out'}`}>
        <p className="hidden3">        
          Pareidolia: n. misperception of random stimuli as real things or people, <br /> as when faces are vividly seen in the flames of a fire.
        </p>
        <div className='titleInformation'>
          <div className='titleContainer'>
            <h1>Pareidolia.</h1>
          </div>
          <div className={`scrollText-container ${fadeIn ? 'fadeIn' : ''}`}>
            <img src={arrow2} alt="Circular Text" />
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
              tspanProps={{ dy: '30' }}
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