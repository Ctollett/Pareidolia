import React, { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ReactCurvedText from 'react-curved-text';
import image from './AbstractImage.png';
import '../components/InfoSection4.css';
import '../components/Locomotive.css';
import collageArt from './collageArt.png';
import displayArt from './RachelsArt/Hallowed Halls.png';
import displayArt2 from './RachelsArt/lifeofaboy-BW.png';
import displayArt3 from './RachelsArt/the dressmaker.png';
import fbIcon from './facebook.svg';
import useOnScreen from '../hooks/useOnScreen';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import fish from "./RachelsArt/fish3.png"

 




function InfoSection() {  
  const ref = useRef(null);
const spansRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [displayArt, displayArt2];




  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      const spans = ref.current.querySelectorAll(".infoSection h2");
      spansRef.current = Array.from(spans)

      let tl = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          trigger: ".infoSectionWrapper4 h2",
          scroller: "#main-container",
          scrub: 7, 
          end: "bottom bottom",  
          toggleActions: "play reverse play reverse",
            
        },
      })
        

      tl.fromTo(spansRef.current, {
        xPercent: 0,
      },
      {
        xPercent: 10,
        duration: 7,
        immediateRender: true,
      })  
      
 
    });
  }, []);  

   
  

  return (
    <section className="infoSectionContainer4" data-scroll-section  data-scroll-speed="1" ref={ref}>
      <div className='infoSectionWrapper4'>
        <h2 id='h2-1'data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH</h2>
        <h2 id='h2-2'data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH</h2>
        <h2 id='h2-3'data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH</h2>
        <img data-scroll data-scroll-speed="2" src={fish} />
      </div>
      

        </section>
             
       
  );   
}
         
export default InfoSection;     