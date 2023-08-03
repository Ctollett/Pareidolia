import React, { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ReactCurvedText from 'react-curved-text';
import image from './AbstractImage.png';
import '../components/InfoSection6.css';
import '../components/Locomotive.css';
import collageArt from './collageArt.png';
import displayArt from './RachelsArt/Hallowed Halls.png';
import displayArt2 from './RachelsArt/lifeofaboy-BW.png';
import displayArt3 from './RachelsArt/the dressmaker.png';
import fbIcon from './facebook.svg';
import useOnScreen from '../hooks/useOnScreen';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import fishwoman from "./RachelsArt/fishwoman-woman.png"

 




function InfoSection6() {  
const ref = useRef(null);
const spansRef = useRef([]);
const [currentSlide, setCurrentSlide] = useState(0);
const slides = [displayArt, displayArt2];




useEffect(() => {
  // This does not seem to work without a settimeout
  setTimeout(() => {

   
let tl2 = gsap.timeline({
  scrollTrigger: {
    start: "top top",
    trigger: ".infoSectionContainer6",
    scroller: "#main-container",
    scrub: 0.2, 
    end: "bottom bottom",  
    toggleActions: "reverse play reverse play",
    once: true
       
  },
})

tl2.from(".infoSectionTitle6 span", 1.8, {
  top: 500,   
  ease: "power4.out",
  duration: 2,
  skewY: 9,
  stagger: {  
    amount: 0.9
  }     
})   

});
}, []);        

  

  return (
    <section className="infoSectionContainer6" data-scroll-section  data-scroll-speed="1" ref={ref}>
      <div className='infoSectionWrapper6'>
        <div className='infoSectionTitle6'>
          <span>Our Latest Stories</span>
        </div>
       <div className='imageSection6' data-scroll data-scroll-speed="1">
        <div data-scroll className='imageSection6Background'>
        <img data-scroll data-scroll-speed="1" src={fishwoman}></img>
        </div>
       </div>
      </div>
          

        </section>
                 
       
  );          
}
         
export default InfoSection6;     