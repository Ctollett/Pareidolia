import React, { useEffect, useRef, useState } from 'react';

import { Power4, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./index.css";
import "../../../assets/globalstyles.css";
import flower2 from '../../../assets/flower-2.svg'
import flower3 from '../../../assets/flower-4.svg';
import { Elastic } from 'gsap';





function InfoSection2() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);



  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let backgroundCircle = document.querySelector(".background-circle");
    let artContainer = document.querySelector(".artImageContainer");
    let quoteSpans = document.querySelectorAll(".quote-div span");
    let flower2 = document.querySelector(".artImage2");
    let circle2 = document.querySelector(".flower2Background");

    gsap.set(quoteSpans, { autoAlpha: 0, y: 50 });  // autoAlpha is a combination of opacity and visibility


    gsap.to(backgroundCircle, { 
      duration: 5,
      scale: 30,
      scrollTrigger: {
        start: "35% 80%",  
        trigger: ".background-circle",   
        once: true,
        end: "bottom 20%",  
      }
    });  


    gsap.to(circle2, { 
      duration: 5,
      scale: 6,
      scrollTrigger: {
        start: "35% 80%",  
        trigger: ".background-circle",   
        once: true,
        end: "bottom 20%",  
      }
    });  

        

    gsap.to(flower2, { 
      filter: "blur(0px)", 
      scrollTrigger: {
        start: "top center",  
        trigger: flower2,
        ease: Elastic.easeOut(1, 0.3),   
        scrub: 8,
        end: "center center",
        onUpdate: function(self) {
          if (self.direction === 1) {
            // Scrolling down
            gsap.to(flower2, { rotate: 70 });
          } else if (self.direction === -1) {
            // Scrolling up
            gsap.to(flower2, { rotate: -70 });
          }
        }  
      }
    });
    


    // Pinning the flower to the top while scrolling
    gsap.to(artContainer, {
      scrollTrigger: {
        trigger: ".artImageContainer",
        start: "top top",
        endTrigger: ".infoSection2Container",
        end: "bottom bottom",
        pin: true,
        scrub: 1
      }
    });

    quoteSpans.forEach((span, index) => {
      gsap.to(span, {
          autoAlpha: 1,
          y: 0,
          ease: Power4.easeOut,
          scrollTrigger: {
              trigger: span,
              scrub: true,
              start: "top 50%",  // adjust this to control when the animation starts
              toggleActions: "play none none reverse",
          }
      });
  });

  }, []);




              

  return (
    <section className="quote-section-container">
           <img className='artImage2' src={flower3}></img>
     <div className='quote-section-wrapper'>
            <div className='art-image-container'>
          <img className='artImage' src={flower2}/>
          <div className='background-circle'> </div>
          <div className='quote-div'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span> 
                  <span>sed do eiusmod tempor incididunt ut </span>
                  <span>labore et dolore magna aliqua. Ut enim ad minim veniam </span>
                  <span>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                  <div className='nameDiv'>
              <span>- Name </span>
              </div>
              </div>
          </div>
        </div>        
         </section>           
        
  );  
}             
       
export default InfoSection2;  
  
             