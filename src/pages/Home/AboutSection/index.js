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
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  // Function to handle updates to resize event
  const handleResize = () => {
      setWindowWidth(window.innerWidth);
  }

  // Attach the event listener
  window.addEventListener("resize", handleResize);

  // Clean up the event listener on component unmount
  return () => {
      window.removeEventListener("resize", handleResize);
  }
}, []);

  

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      const spans = ref.current.querySelectorAll(".infoSectionHeadline span");
      spansRef.current = Array.from(spans)
      const title = document.querySelector(".about-section-title")

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


      gsap.from(title, { 
        scrollTrigger: {
          start: "top 50%",
          trigger: ".about-section-title",
          onEnter: () => title.classList.add('animate-in'),
          onLeaveBack: () => title.classList.remove('animate-in'),
          once: true,
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },
      }) 



      gsap.to(".imageBackground", { 
        scale: 4.7,
        duration: 4,   
        opacity: 1, 
        scrollTrigger: {
          start: "top 80%",
          trigger: ".infoSectionContainer",
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
          start: "top center",   
          trigger: ".imageBackground img",
          delay: 1, 
          scrub: 5, 
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },    
      }) 


      gsap.from(".line", { 
        duration: 2,   
        height: 0, 
        scrollTrigger: {
          start: "top center",   
          trigger: ".line",
          delay: 1, 
          once: true,
          scrub: 5, 
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
        },    
      }) 


      gsap.to(".imageBackground img", { 
        opacity: 1,
        filter: "grayscale(0)",
        scrollTrigger: {
          start: "top center",   
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
    <section className="infoSectionContainer"ref={ref}>
         <div className='infoSectionWrapper'> 
          <div className='infoSectionImageSection'>
            <div className='imageBackground'>
              <img src={displayArt2}></img>
            </div>
          </div> 
          <div className='line'></div>
         <div className="about-section-title-container">
         <div className='about-section-title'>
                    {
                        windowWidth <= 1364 ? (
                            // JSX for mobile view
                            <div>
                                <h2>What We Do</h2>
                            </div>
                        ) : (
                            // JSX for desktop view
                            <>  
                                <h2>What</h2>
                                <h2>We Do</h2>
                            </>
                        )
                    }
                </div>
            <div className='line-2'></div>
            <div className='secondaryTextContainer'>
          <p>Pareidolia is an interdisciplinary research and arts collective interrogating the role of digital 
          technology and aesthetics in contemporary American culture. Consisting of researchers in the
          humanities and social sciences as well as artists and computer programmers, this group aims to 
          expand our general understanding of technology in our current networked landscape.</p>  
          </div> 
            <div className='contactSection'>
              <button href="/about" className='contactBtn' >
                Contact Us
              </button>
              </div>     
          </div>
          </div>
                
     

        </section>  
           
       
  );   
}
         
export default AboutSection;
             