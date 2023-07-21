import React, { useEffect, useRef, useState } from 'react';

import { Power4, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './globalstyles.css';
import './InfoSection2.css';
import '../components/Locomotive.css';
import portrait from "./portrait1.jpg";
import fishWoman from "./RachelsArt/fishwoman-woman.png"
import fish1 from "./RachelsArt/fishwoman-fish.png"
import eel from "./RachelsArt/fishwoman-eel.png"
import fishwoman2 from "./RachelsArt/fishwoman-woman2.png"
import SplitText from "../components/SplitText3.min.js";
import useOnScreen from "../hooks/useOnScreen.js";
import cn from "classnames";




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
            scrub: 8, 
            end: "bottom bottom",  
            toggleActions: "play reverse play reverse",
              
          },
        })

        let tl2 = gsap.timeline({
          scrollTrigger: {
            start: "top top",
            trigger: ".infoSection2Title",
            scroller: "#main-container",
            scrub: 1, 
            end: "bottom bottom",  
            toggleActions: "play reverse play reverse",
              
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

        
  
        tl.fromTo(".circle", {  
          scale: 1,    
          borderRadius: '50%',
        },
        {
  
          ease: Power4.easeIn,
          scale: 30,
          borderRadius: '0%',
          duration: 8,
          immediateRender: true,
        })  

        tl3.fromTo(".artImages", {  
          opacity: 1,  
          ease: Power4.easeIn,  
       
        },
        {
  
          ease: Power4.easeIn,
         opacity: 0,
         duration: 1,
        })     


    
     
      });
    }, []);      

  


  return (
    <section className="infoSection2Container" data-scroll-section ref={ref} data-scroll-speed="6">
     <div className='infoSection2Wrapper'>
        <div className='infoSection2Title' data-scroll data-scroll-sticky data-scroll-target=".infoSection2Wrapper">  
          <h2 ref={ref} className={cn("infoSection2Title h2", { "is-reveal": reveal })}>This is a Section Title</h2>      
          <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='infoSection2Artwork' data-scroll data-scroll-sticky data-scroll-target=".infoSection2Container">
            <div className='artImages'>
          <img className='artImage' src={fishWoman}/>
          <img className='artImage2' data-scroll data-scroll-speed="0.2" data-scroll-direction="horizontal" src={fish1}/>
          <img className='artImage3' data-scroll data-scroll-speed="0.9" data-scroll-direction="horizontal" src={eel}/>
          </div>
          <div className='circle'></div>
        </div>      
          </div>  
         </section>       
    
  );  
}            
   
export default InfoSection2;
  
    