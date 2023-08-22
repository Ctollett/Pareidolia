import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./index.css";
import "../../../assets/globalstyles.css";
import mushroom from "../../../assets/mushroom-1.svg"
import mushroom2 from "../../../assets/mushroom-2.svg"
import mushroom3 from "../../../assets/mushroom-3.svg"
import mushroom4 from "../../../assets/mushroom-4.svg"

export default function Gallery() {  

  useEffect(() => {
      let sections = gsap.utils.toArray(".scroll-item-wrapper");
      let scrollTitle = document.querySelector(".scroll-title-wrapper");
      let totalWidth = sections.reduce((acc, section) => acc + section.offsetWidth, 0);
      let scrollLine = document.querySelector('.scroll-line');
      const isMobile = window.innerWidth <= 768;
    
      

      gsap.to(scrollTitle, {
        scrollTrigger: {
          trigger: scrollTitle,
          start: "top top",
          endTrigger: ".section-wrapper",
          pin: true,
          scrub: 1
        }
      });



      gsap.to(scrollLine, 
        {
          width: '100%', // End value
          scrollTrigger: {  
            trigger: ".scroll",
            start: "top top",   
            endTrigger: ".section-wrapper",
            scrub: 7
          }
      });
 
      const spacingValue = isMobile ? "800px" : "1200px"; 

        sections.forEach((section, index) => {
        gsap.from(section, {
          marginLeft: isMobile ? 2 : 5,  // Adjust for mobile/desktop
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: `top+=${index * parseInt(spacingValue)} center`,
            end: "bottom bottom",
            scrub: 4,
            snap: 1,
            toggleActions: "play reverse play reverse"
          }  
        });

        gsap.from(section, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: `top+=${index * parseInt(spacingValue)} center`,
            end: "bottom bottom",
            scrub: 0.5,
            once: true,
            snap: 1,
            toggleActions: "play reverse play reverse"
          }
        });
      });
      
      const scrollContentHeight = document.querySelector('.scroll').offsetHeight;

      gsap.to(".scroll-section-container", {
        scrollTrigger: {
          trigger: ".scroll-section-container",
          start: "top top",
          end: `+=${scrollContentHeight - window.innerHeight +1000}`,
          pin: true,
          scrub: 4,
        }  
      });
    
      ScrollTrigger.refresh();
  }, []);    
  



  return (
    <div className="scroll-section-container">
      <div className="scroll-title-wrapper">
        <div className="scroll-line"></div>
          <span>Topics</span> <span>of</span> <span>Study</span>
        </div>
    <div className="section-wrapper scroll-wrap">
        <div className="scroll">
          <div className="galleryitem2 scroll-item-wrapper">
            <div className="scroll-item">
              <div className="scrollSectionTitle">
              <img className='scroll-title-image'src={mushroom} ></img>
                <h2>Criticism</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>  
            </div>
          </div>
          <div className="galleryitem3 scroll-item-wrapper">
            <div className="scroll-item">
              <div className="scrollSectionTitle">
              <img className='scroll-title-image'src={mushroom2} ></img>
                <h2>Art and Public Work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>    
          </div>
          <div className="galleryitem4 scroll-item-wrapper">
            <div className="scroll-item">
              <div className="scrollSectionTitle">
              <img className='scroll-title-image'src={mushroom3} ></img>
                <h2>Pedagogy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>      
            </div>
          </div>
          <div className="galleryitem4 scroll-item-wrapper">
            <div className="scroll-item">
              <div className="scrollSectionTitle">
              <img className='scroll-title-image'src={mushroom4} ></img>
                <h2>Research</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>  
            </div>
          </div>
        </div>
    </div>  
    </div>
  );
}
