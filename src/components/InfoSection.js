import React, { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ReactCurvedText from 'react-curved-text';
import image from './AbstractImage.png';
import '../components/InfoSection.css';
import '../components/Locomotive.css';
import collageArt from './collageArt.png';
import displayArt from './RachelsArt/Hallowed Halls.png';
import displayArt2 from './RachelsArt/lifeofaboy-BW.png';
import displayArt3 from './RachelsArt/the dressmaker.png';
import fbIcon from './facebook.svg';
import useOnScreen from '../hooks/useOnScreen';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

 




function InfoSection() {  
  const ref = useRef(null);
const spansRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [displayArt, displayArt2];




  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      const spans = ref.current.querySelectorAll(".infoSectionHeadline span");
      spansRef.current = Array.from(spans)

      let tl = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          trigger: ".infoSectionContainer",
          scroller: "#main-container",
          scrub: 3, 
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
            
        },
      })
      
      tl.fromTo(spansRef.current, {
        color: "#E0DACF",
      },
      {
        color: "black",
        stagger: 3,
        duration: 3,
        immediateRender: true,
      })  
      
 
    });
  }, []);  

 
  

  return (
    <section className="infoSectionContainer" data-scroll-section ref={ref}>
         <div className='infoSectionWrapper' data-scroll>
         <div className="infoSectionHeadline" data-scroll data-scroll-speed="1" data-scroll-repeat="true">                
            <span>What</span>
            <div className='imageBackground'>
            <img data-scroll data-scroll-speed="1" data-scroll-repeat="true"src={displayArt2}></img>
            </div> <span>We</span>  <span>Do</span>     
          </div>
          <div className='secondaryText'>
          <p>Pareidolia is an interdisciplinary research and arts collective interrogating the role of digital
technology and aesthetics in contemporary American culture. Consisting of researchers in the
humanities and social sciences as well as artists and computer programmers, this group aims to
expand our general understanding of technology in our current networked landscape.</p>      
            <div className='contactSection'>
              <button href="/about" className='contactBtn' >
                Contact
              </button>
              </div>     
          </div>
          </div>
        </section>  
           
       
  );   
}
         
export default InfoSection;
             