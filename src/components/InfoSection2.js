import React, { useEffect, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './globalstyles.css';
import './InfoSection2.css';
import '../components/Locomotive.css';
import image from './AbstractImage2.png';

function InfoSection2() {
  const ref = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    scroll.update(); // Update Locomotive Scroll when the component mounts

    scroll.on('scroll', () => {
      const menuItems = ref.current.querySelectorAll('.menu-item');

      menuItems.forEach((menuItem) => {
        const menuItemTop = menuItem.getBoundingClientRect().top;

        if (menuItemTop < window.innerHeight * 0.5) {
          menuItem.classList.add('fadeIn');
        } else {
          menuItem.classList.remove('fadeIn');
        }
      });
    });
  }, [scroll]);
   



  return (
    <div className="infoSection2Container" data-scroll-container ref={ref} data-scroll-speed="1">
      <div
        className="infoSection2Title"
        data-scroll
        data-scroll-speed="1"
        data-scroll-repeat="true"
        data-scroll-sticky
        data-scroll-target=".infoSection2Container"
      >
        <h1    
          data-scroll   
          data-scroll-direction="horizontal"   
          
          data-scroll-speed="10"   
        >
          AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH -           AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH -  AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH -           AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH -  AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH -           AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH -  AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH -           AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - AREAS OF RESEARCH - 
        </h1>
        </div>
        <div className='InfoSection2Menu' data-scroll data-scroll-speed="1">
          <ul>
            <li>
            <div className="image-overlay">
                  <img src={image} alt="Image 1" className="menu-item-image" />
                  <a data-scroll data-scroll-speed="2" className='menu-item'>TECHNOLOGY
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>
                  </div>   
                  
                  <div className="image-overlay2">
                  <img src={image} alt="Image 1" className="menu-item-image" />
                  <a data-scroll data-scroll-speed="2" className='menu-item'>TECHNOLOGY
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>
                  </div> 

                  <a data-scroll data-scroll-speed="5" className='menu-item'>CULTURE
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>  

                  <a data-scroll data-scroll-speed="5" className='menu-item'>HISTORY
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>  
             
              </li>
          </ul>
         </div>
      </div>
  );
}

export default InfoSection2;

    