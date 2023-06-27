import React, { useEffect, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import image from './AbstractImage.png';
import '../components/InfoSection.css';
import '../components/Locomotive.css';
import collageArt from './collageArt.jpg';

function InfoSection() {
  const ref = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    scroll.update(); // Update Locomotive Scroll when the component mounts

    scroll.on('scroll', () => {
      const paragraphs = ref.current.querySelectorAll('.paragraph');

      paragraphs.forEach((paragraph) => {
        const paragraphTop = paragraph.getBoundingClientRect().top;

        if(paragraphTop < window.innerHeight * 0.5) {
          paragraph.classList.add('showParagraph');
        } else {
          paragraph.classList.remove('showParagraph');
        }
      })
    })
  }, [scroll]);

  return (
    <section className="infoSectionContainer" data-scroll-container ref={ref}>
      <div className='infoSectionTitle' data-scroll data-scroll-speed="1">
        <div id='line'></div>
        <h1 className="InfoTitle" data-scroll data-scroll-class="scrollInTitle" data-scroll-keep="true">ABOUT</h1>    
      </div>
      <div className='infoSectionDesc' data-scroll data-scroll-repeat="true" data-scroll-speed="5">
        <div className='infoSectionParagraph'>
        <img data-scroll src={collageArt}></img>
        <p className="paragraph" data-scroll data-scroll-keep="true" data-scroll-speed="1">A brief description of what we do</p>
        </div>
        <div className='infoSectionParagraph'>
        <p className="paragraph" data-scroll data-scroll-keep="true">that maybe includes some basic information</p>
        <img data-scroll data-scroll-speed="2" src={collageArt}></img>
        </div>
        <div className='infoSectionParagraph'>
        <img data-scroll data-scroll-speed="2" src={collageArt}></img>
        <p className="paragraph" data-scroll data-scroll-keep="true">about us and the particular research we do</p>   
        </div>
        </div>
    </section> 
  );
}
         
export default InfoSection;
             