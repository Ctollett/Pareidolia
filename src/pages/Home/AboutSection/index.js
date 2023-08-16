import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import displayArt2 from '../../../assets/lifeofaboy-BW.png';
import "../../../assets/globalstyles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import flowerIcon from '../../../assets/flower-1.svg';


function AboutSection() {     
const ref = useRef(null);
const spansRef = useRef([]);  
gsap.registerPlugin(ScrollTrigger);

  

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      const spans = ref.current.querySelectorAll(".infoSectionHeadline span");
      spansRef.current = Array.from(spans)

      let tl = gsap.timeline({
        scrollTrigger: {
          start: "top center",
          trigger: ".infoSectionContainer",
          scrub: 3,   
          end: "bottom bottom",    
          toggleActions: "play reverse play reverse",
            
        },
      })
      
      tl.fromTo(spansRef.current, {  
        color: "#E0DACF",
      },
      {
        color: "#1A1918",
        stagger: 3,
        duration: 3,
        immediateRender: true,
      }) 

      const textSpans = document.querySelectorAll('.secondaryText span');

      gsap.to(textSpans, {
        duration: 5,  
        opacity: 1,
        stagger: 1, 
        scrollTrigger: {
          start: "top 80%",
          trigger: ".secondaryText span",
          scrub: 5,
          delay: 1,  
          once: true,
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },
      })  


      gsap.to(".contactBtn", { 
        duration: 10, 
        delay: 6,
        opacity: 1, 
        scrollTrigger: {
          start: "top 80%",
          trigger: ".contactBtn",
          scrub: 10,  
          once: true,
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },
      }) 


      gsap.to(".flowerIcon img", { 
        rotate: 5,
        duration: 4, 
        yoyo: true,
        repeat: 10,    
        scrollTrigger: {
          start: "top 60%",
          trigger: ".flowerIcon img",
          scrub: 4,  
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },    
      }) 

      gsap.to(".flowerIcon img", { 
        duration: 4, 
        opacity: 0.6, 
        scrollTrigger: {
          start: "top 60%",
          trigger: ".flowerIcon img",
          scrub: 4,  
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },    
      })

      gsap.to(".imageBackground", { 
        scale: 4.7,
        duration: 4,   
        opacity: 1, 
        scrollTrigger: {
          start: "top 60%",
          trigger: ".flowerIcon img",
          scrub: 4,  
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },    
      }) 


      gsap.to(".imageBackground img", { 
        duration: 2,   
        scale: 1.3, 
        top: -10,
        scrollTrigger: {
          start: "top 70%",   
          trigger: ".imageBackground img",
          delay: 1, 
          scrub: 5, 
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },    
      }) 

      gsap.to(".imageBackground img", { 
        opacity: 1,
        filter: "grayscale(0)",
        scrollTrigger: {
          start: "top 70%",   
          trigger: ".imageBackground img",
          delay: 1, 
          scrub: 5, 
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },    
      }) 

   

    
 
    });
  }, []);  

   
     

  return (
    <section className="infoSectionContainer" data-scroll-section ref={ref}>
         <div className='infoSectionWrapper' data-scroll>   
         <div className='infoSectionHeadlineWrapper'>
         <div className="infoSectionHeadline" data-scroll data-scroll-speed="1" data-scroll-repeat="true">      
          <span>What</span>
          <div className='flowerIcon'>
            <img src={flowerIcon}></img>
          </div>
          <div className='infoSectionHeadlineRow'>  
           <span>We</span>  <span>Do.</span>       
          </div>
          </div>   
          <div className='infoSectionImageSection'>
            <div className='imageBackground'>
              <img src={displayArt2}></img>
            </div>
          </div>
          </div>
          <div className='secondaryText'>
            <div className='secondaryTextContainer'>
          <span>Pareidolia is an interdisciplinary research and arts collective interrogating the role of digital </span>
          <span>technology and aesthetics in contemporary American culture. Consisting of researchers in the </span>
          <span>humanities and social sciences as well as artists and computer programmers, this group aims to </span>
          <span>expand our general understanding of technology in our current networked landscape. </span>   
          </div>  
            <div className='contactSection'>
              <button href="/about" className='contactBtn' >
                Learn More
              </button>
              </div>     
          </div>
          </div>
        </section>  
           
       
  );   
}
         
export default AboutSection;
             