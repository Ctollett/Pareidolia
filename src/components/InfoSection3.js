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

function InfoSection3() {
  const ref = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [displayArt, displayArt2];
    
      
    
      return (
        <section className="infoSectionContainer" data-scroll-section ref={ref}>
      <div className='teamSectionTitle' data-scroll >
           <div id='teamSectionline'></div>
      <h2>PEOPLE</h2>
  
      </div>
           <div className='section-2' data-scroll data-scroll-speed="3"> 
                <div className='paragraph' data-scroll data-scroll-speed="1"> 
                  <span>Meet</span> <span>the</span>  
                  <span>team</span>    
                  </div>  
                  <div className='teamSecondaryText' data-scroll data-scroll-speed="1">
                  <div className='secondaryParagraph' data-scroll>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscingit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <div className='teamContactSection'>
                            <button className='learnMoreButton'>
                                 <div>LEARN MORE</div> 
                            </button>  
                         </div>
                  </div>
                  <div className='teamSectionImage' data-scroll  data-scroll-speed="1">
                  <img data-scroll data-scroll-speed="1" data-scroll-repeat="true" src={collageArt}></img>    
                  </div> 
                    </div> 
                     
                </div>
                  </section>
               
           
      );   
    }
             
    export default InfoSection3;
           
       
