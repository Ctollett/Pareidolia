import React, { useEffect, useState, useRef, useContext } from 'react';
import ReactCurvedText from 'react-curved-text';  
import './index.css'
import "../../../assets/globalstyles.css"
import arrow2 from "../../../assets/arrow2.svg";
import { gsap } from "gsap";
   


const Header = () => {
 
  const ref = useRef(null);
  const isMobile = () => window.innerWidth <= 768;
  const isTablet = () => window.innerWidth > 768 && window.innerWidth <= 1024;
  const isSmlDesktop = () => window.innerWidth > 1025 && window.innerWidth <= 1366;
  const islrgDesktop = () => window.innerWidth > 1367

  
  const deviceType = islrgDesktop() ? 'lrgDesktop' : isSmlDesktop() ? 'smallDesktop' : isMobile() ? 'mobile' : isTablet() ? 'tablet' : 'desktop';
  
  const curvedTextProps = {
    mobile: {
      width: 200,
      height: 200,
      cx: 100,
      cy: 100,
      rx: 34,  
      ry: 35,
      textProps: { style: { fontSize: 13 } },
      tspanProps: { dy: '20' }
    },
    tablet: {
      width: 250,
      height: 250,  
      cx: 125,  
      cy: 125,
      rx: 36,
      ry: 36,
      textProps: { style: { fontSize: 13 } },
      tspanProps: { dy: '25' }
    },
    desktop: {
      width: 300,
      height: 300,
      cx: 150,  
      cy: 150,
      rx: 40,
      ry: 40,
      textProps: { style: { fontSize: 14 } },
      tspanProps: { dy: '30' }
    },

    smallDesktop: {
      width: 300,
      height: 300,
      cx: 150,  
      cy: 150,
      rx: 36,
      ry: 36,
      textProps: { style: { fontSize: 12.6 } },
      tspanProps: { dy: '30' }
    },

    lrgDesktop: {
      width: 300,
      height: 300,
      cx: 150,  
      cy: 150,
      rx: 45,
      ry: 45,
      textProps: { style: { fontSize: 16 } },
      tspanProps: { dy: '30' }
    }
  }[deviceType];





  useEffect(() => {
    let tl = gsap.timeline();

      tl.to(".header-title-container h1", 1.8, {
        ease: "power4.out",
        opacity: 1,
        delay: 1,
        duration: 4,
        scrub: 1,
       
      });


    
  
      tl.from(".scrollText-container", 1.8, {
        opacity: 1, 
        ease: "power4.out",
      }); 
  }, []);



      
  return (

    
    <header>
      <div className="header-title">
      <div class="paper-overlay"></div>
        <p>        
          Pareidolia: n. misperception of random stimuli as real things or people, as when faces are vividly seen in the flames of a fire.
        </p>
        <div className='header-title-information'>
          <div className='header-title-container'>
            <h1>Pareidolia.</h1>
          </div>
          <div className={`scrollText-container`}>
            <img src={arrow2} alt="Circular Text" />
            <ReactCurvedText
             {...curvedTextProps}
              startOffset={0} 
              reversed={false}
              text="Scroll Down - Scroll Down - Scroll Down -"
              textPathProps={null}
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