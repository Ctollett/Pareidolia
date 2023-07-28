import React, { useEffect, useState, useRef } from 'react';
import ReactCurvedText from 'react-curved-text';
import './globalstyles.css';
import arrow2 from "./arrow2.svg";
import { Parallax } from 'react-scroll-parallax';
import { gsap } from "gsap";
import collageArt from './collageArt.png';

const Header = ({ isContentVisible }) => {
  const ref = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);



  useEffect(() => {
    // This does not seem to work without a settimeout
 
     

      let tl = gsap.timeline()
        
      
      tl.from(".titleContainer h1", 1.8, {
        top: 500,
        ease: "power4.out",
        delay: 1,
        duration: 0.3,
        scrub: 1,
        skewY: 9,
        stagger: {  
          amount: 0.9
        }     
      })   

      tl.from(".scrollText-container", 1.8, {
        opacity: 1, 
        ease: "power4.out",

           
      })      
          
     
        
  }, []);  


    
  return (
    <header data-scroll data-scroll-section ref={ref}>
      <div className="titleSection">
        <div className='headerPhotoContainer'>
      </div>
        <p className="hidden3">        
          Pareidolia: n. misperception of random stimuli as real things or people, <br /> as when faces are vividly seen in the flames of a fire.
        </p>
        <div className='titleInformation'>
          <div className='titleContainer'>
            <h1>Pareidolia.</h1>
          </div>
          <div className={`scrollText-container`}>
            <img src={arrow2} alt="Circular Text" />
            <ReactCurvedText
              width={300}
              height={300}
              cx={150}
              cy={150}
              rx={46}
              ry={46}
              startOffset={0}
              reversed={false}
              text="Scroll Down - Scroll Down - Scroll Down -"
              textProps={{ style: { fontSize: 15 } }}
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