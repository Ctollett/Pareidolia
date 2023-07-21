import React, { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ReactCurvedText from 'react-curved-text';
import image from './AbstractImage.png';
import '../components/InfoSection5.css';
import '../components/Locomotive.css';
import collageArt from './collageArt.png';
import displayArt from './RachelsArt/Hallowed Halls.png';
import displayArt2 from './RachelsArt/lifeofaboy-BW.png';
import displayArt3 from './RachelsArt/the dressmaker.png';
import portrait from './portrait1.jpg';
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
    <section className="infoSectionContainer5" data-scroll-section  data-scroll-speed="1" ref={ref}>
      <div className='infoSectionWrapper5'>
        <div className='infoSection5Content'>
         <div className='peopleImage' data-scroll data-scroll-speed="1">
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Contact</button>
            </div>
        </div>
        <div className='infoSection5Content'>
        <div className='peopleTitle'>
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Contact</button>
            </div>
            <div className='peopleImage' data-scroll data-scroll-speed="1">
            <img src={portrait} ></img>
            </div>
        </div>
        <div className='infoSection5Content'>
         <div className='peopleImage' data-scroll data-scroll-speed="1">
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Contact</button>
            </div>
        </div>
        <div className='infoSection5Content'>
        <div className='peopleTitle'>
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Contact</button>
            </div>
            <div className='peopleImage' data-scroll data-scroll-speed="1">
            <img src={portrait} ></img>
            </div>
        </div>
        <div className='infoSection5Content'>
         <div className='peopleImage' data-scroll data-scroll-speed="1">
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Contact</button>
            </div>
        </div>
        <div className='infoSection5Content'>
        <div className='peopleTitle'>
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Contact</button>
            </div>
            <div className='peopleImage' data-scroll data-scroll-speed="1">
            <img src={portrait} ></img>
            </div>
        </div>
        </div>
   
        </section>
           
       
  );   
}
         
export default InfoSection;   