import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import displayArt from '../../../assets/Hallowed Halls.png';
import displayArt2 from '../../../assets/lifeofaboy-BW.png';
import "../../../assets/globalstyles.css";
import { gsap } from "gsap";

 




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
    <section className="infoSectionContainer6">
      <div className='infoSectionWrapper6'>
          <div className='infoSectionTitle6'>
          <h2>Our Latest Stories</h2>
        </div>
      </div>
          

        </section>
                 
       
  );          
}
         
export default InfoSection6;     