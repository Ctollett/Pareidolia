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



        tl2.from(".infoSection2Title h2", 1.8, {
          top: 500,
          ease: "power4.out",
          delay: 2,
          duration: 0.3,
          skewY: 9,
          stagger: {  
            amount: 0.9
          }     
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

        
  
        tl.fromTo(".circle", {  
          scale: 1,    
          borderRadius: '50%',
        },
        {
  
          ease: Power4.easeIn,
          scale: 30,
          borderRadius: '0%',
          duration: 4,
          immediateRender: true,

        })  


    
     
      });
    }, []);        

  


  return (
    <section className="infoSection2Container" data-scroll-section ref={ref} data-scroll-speed="6">
     <div className='infoSection2Wrapper'>
        <div className='infoSection2Title' data-scroll data-scroll-sticky data-scroll-target=".infoSection2Wrapper">  
          <h2 className="infoSection2Title h2" data-scroll-data-scroll-speed="0.9">Who We Are</h2>  
          </div>    
          <div className='infoSection2Artwork'>
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
  
    