import React, { useEffect, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import image from './AbstractImage.png';
import '../components/InfoSection.css';
import '../components/Locomotive.css';

function InfoSection() {
  const ref = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    scroll.update(); // Update Locomotive Scroll when the component mounts
  }, [scroll]);

  return (
    <section className="infoSectionContainer" data-scroll-container ref={ref}>
      <div className='infoSectionTitle' data-scroll data-scroll-sticky data-scroll-target=".infoSectionContainer" data-scroll-repeat="true">
        <div id='line'></div>
        <h1 className="InfoTitle" data-scroll data-scroll-class="scrollInTitle" data-scroll-keep="true">ABOUT</h1>    
      </div>
      <div className='infoSectionDesc' data-scroll data-scroll-sticky data-scroll-target=".infoSectionContainer" data-scroll-repeat="true">
        <p className="sentence1" data-scroll data-scroll-class="fadeInSentence1" data-scroll-keep="true" >A brief description of what we do</p>
        <p className="sentence2" data-scroll data-scroll-class="fadeInSentence2" data-scroll-keep="true">that maybe includes some basic information</p>
        <p className="sentence3" data-scroll data-scroll-class="fadeInSentence3" data-scroll-keep="true">about us and the particular research we do</p>
      </div>
      <div className='aboutBackground' data-scroll data-scroll-speed="5" data-scroll-class="scaleUpArt"></div>
    </section>
  );
}
    
export default InfoSection;
             