import React, { useEffect, useRef, useState } from 'react';

import { Power4, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './globalstyles.css';
import './InfoSection2.css';
import '../components/Locomotive.css';
import portrait from "./portrait1.jpg";
import fishWoman from "./RachelsArt/fishwoman-2.png"
import fish1 from "./RachelsArt/fishwoman-fish.png"
import eel from "./RachelsArt/fishwoman-eel.png"
import fishwoman2 from "./RachelsArt/fishwoman-woman2.png"
import SplitText from "../components/SplitText3.min.js";
import useOnScreen from "../hooks/useOnScreen.js";





function InfoSection2() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref);

  gsap.registerPlugin(ScrollTrigger);

  


    useEffect(() => {
      // This does not seem to work without a settimeout
      setTimeout(() => {

  
        let tl = gsap.timeline({
          scrollTrigger: {
            start: "top top",
            trigger: ".infoSection2Container",
            scroller: "#main-container",
            scrub: 4, 
            end: "bottom bottom",  
            toggleActions: "play reverse play reverse",
              
          },
        })

        let tl2 = gsap.timeline({
          scrollTrigger: {
            start: "top top",
            trigger: ".infoSection2Container",
            scroller: "#main-container",
            scrub: 8, 
            end: "bottom bottom",  
            toggleActions: "reverse play reverse play",
              
          },
        })




        let tl4 = gsap.timeline({
          scrollTrigger: {
            start: "top top",
            trigger: ".infoSection2Container",
            scroller: "#main-container",
            scrub: 8, 
            end: "bottom bottom",  
            toggleActions: "reverse play reverse play",
              
          },
        })



 

        let tl3 = gsap.timeline({
          scrollTrigger: {
            start: "top top",
            trigger: ".infoSection2Artwork",
            scroller: "#main-container",
            scrub: 1, 
            end: "bottom bottom",  
            toggleActions: "play reverse play reverse",
              
          },
        })

        
  


    
     
      });
    }, []);    
    
    

const [revealed, setRevealed] = useState(false);

useEffect(() => {
    if(onScreen) setRevealed(true);
}, [onScreen])

useEffect(() => {
  if(onScreen) {
      gsap.to(".circle", {
          scrollTrigger: {
              trigger: ".infoSection2Container",
              scroller: "#main-container",
              start: "top top",
              end: "bottom bottom",
           
              toggleActions: "play none reverse reverse",
          },
          scale: 30,
          ease: Power4.easeIn,     
          duration: 1, 
      });
  }      
}, [onScreen])     
   
   
    


  return (
    <section className="infoSection2Container" data-scroll-section ref={ref} data-scroll-speed="6">
     <div className='infoSection2Wrapper'>  
          <div className='infoSection2Artwork' data-scroll data-scroll-sticky data-scroll-target=".infoSection2Container">
            <div className='artImages' data-scroll data-scroll-speed="0.1">
          <img className='artImage'  src={fishWoman}/>
          </div>
          <div data-scroll className='circle'></div>
        </div>      
          </div>      
         </section>       
    
  );  
}            
       
export default InfoSection2;
  
    