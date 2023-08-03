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
import useLocoScroll from '../hooks/useLocoScroll';
import SplitText from "../components/SplitText3.min";

 




function InfoSection5() {  
const ref = useRef(null);

const onScreen = useOnScreen(ref);
const [revealed, setRevealed] = useState(false);

useEffect(() => {
    if(onScreen) setRevealed(true);
}, [onScreen])

useEffect(() => {
    if(revealed) {
        gsap.to(".infoSection5Title h2", {
            duration: 0.8,
            top: 20,
            opacity: 1,
            ease: "power1.out",
            toggleActions: "reverse play reverse play",
        
        })
    }
}, [revealed])





  

  return (
    <section className="infoSectionContainer5" data-scroll-section  data-scroll-speed="1" ref={ref}>
      <div className='infoSectionWrapper5'>
      <div className='infoSection5Title' data-scroll> 
          <h2 data-scroll >Who We Are</h2>  
          </div>  
          <div id='infoLine'></div>
        <div className='infoSection5Content'>
         <div className='peopleImage'>
            <img src={portrait} ></img>
            </div>
            <div className='peopleImageMobile'>
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>First Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='peopleTitleSocialSection'>
            <button></button>
            <button></button>
            <button></button>
            </div>
            </div>
        </div>
        <div id='infoLine'></div>
        <div className='infoSection5Content'>
        <div className='peopleImageMobile'>
            <img src={portrait} ></img>
            </div>
            <div className='peopleImage2'>
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>First Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='peopleTitleSocialSection'>
            <button></button>
            <button></button>
            <button></button>
            </div>
            </div>
            <div className='peopleImage'>
            <img src={portrait} ></img>
            </div>
        </div>
        <div id='infoLine'></div>
        <div className='infoSection5Content'>
        <div className='peopleImageMobile'>
            <img src={portrait} ></img>
            </div>
         <div className='peopleImage'>
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>First Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='peopleTitleSocialSection'>
            <button></button>
            <button></button>
            <button></button>
            </div>
            </div>
        </div>
        <div id='infoLine'></div>
        <div className='infoSection5Content'>
        <div className='peopleImageMobile'>
            <img src={portrait} ></img>
            </div>
            <div className='peopleImage2'>
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>First Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='peopleTitleSocialSection'>
            <button></button>
            <button></button>
            <button></button>
            </div>
            </div>
            <div className='peopleImage'>
            <img src={portrait} ></img>
            </div>
        </div>
        <div id='infoLine'></div>
        <div className='infoSection5Content'>
        <div className='peopleImageMobile'>
            <img src={portrait} ></img>
            </div>
         <div className='peopleImage'>
            <img src={portrait} ></img>
            </div>
        <div className='peopleTitle'>
            <h2>First Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='peopleTitleSocialSection'>
            <button></button>
            <button></button>
            <button></button>
            </div>
            </div>
        </div>
        <div id='infoLine'></div>
        <div className='infoSection5Content'>
        <div className='peopleImageMobile'>
            <img src={portrait} ></img>
            </div>
            <div className='peopleImage2'>
            <img src={portrait} ></img>   
            </div>
        <div className='peopleTitle'>
            <h2>First Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='peopleTitleSocialSection'>
            <button></button>
            <button></button>
            <button></button>
            </div>
            </div>
            <div className='peopleImage'>
            <img src={portrait} ></img>
            </div>
        </div>
     
        </div>
   
        </section>
           
       
  );   
}
         
export default InfoSection5;   