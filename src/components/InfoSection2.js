import React, { useEffect, useRef, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './globalstyles.css';
import './InfoSection2.css';
import '../components/Locomotive.css';
import image from './technology-image.jpg';
import image2 from './art.jpg';
import image3 from './culture.jpg';
import image4 from './history.jpg';

function InfoSection2() {
  const ref = useRef(null);
  const { scroll } = useLocomotiveScroll();


  useEffect(() => {
    scroll.update(); // Update Locomotive Scroll when the component mounts

    scroll.on('scroll', () => {
      const menuItems = ref.current.querySelectorAll('.menu-item');
      const menuPhotos = ref.current.querySelectorAll('.menu-item-image');
      const menuContainer = document.querySelector('.infoSection2Container')


  


      menuPhotos.forEach((menuPhoto) => {
        const menuPhotoTop = menuPhoto.getBoundingClientRect().top;

        if(menuPhotoTop < window.innerHeight * 0.5) {
          menuPhoto.classList.add('showPhoto');
        } else {
          menuPhoto.classList.remove('showPhoto');
        }
      })

      menuItems.forEach((menuItem) => {
        const menuItemTop = menuItem.getBoundingClientRect().top;

        if (menuItemTop < window.innerHeight * 0.5) {
          menuItem.classList.add('fadeIn');
        } else {
          menuItem.classList.remove('fadeIn');
        }
      });

        const menuContainerTop = menuContainer.getBoundingClientRect().top;
        const menuContainerBottom = menuContainer.getBoundingClientRect().bottom;
        const body = document.body;

        if(menuContainerTop < window.innerHeight * 0.5) {
          body.style.backgroundColor = 'black';
        }

        if(menuContainerTop > window.innerHeight * 0.5) {
          body.style.backgroundColor = '#FFFFF0';
        }

        if(menuContainerBottom < window.innerHeight * 1.0) {
          body.style.backgroundColor = '#FFFFF0';
        } 

    });
  }, [scroll]);
  

   


  return (
    <div className="infoSection2Container" data-scroll-container ref={ref} data-scroll-speed="1">
      <div
        className="infoSection2Title"
        data-scroll
        data-scroll-speed="1"
        data-scroll-repeat="true"

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
                  <img src={image} alt="Image 1" className="menu-item-image" data-scroll data-scroll-speed="5" />
                  <a data-scroll data-scroll-speed="2" className='menu-item'>TECHNOLOGY
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>
                  </div>   
                  
                  <div className="image-overlay">
                  <img src={image2} alt="Image 2" className="menu-item-image" data-scroll data-scroll-speed="5"/>
                  <a data-scroll data-scroll-speed="1" className='menu-item'>ART
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>
                  </div> 

                  <div className="image-overlay">
                  <img src={image3} alt="Image 1" className="menu-item-image" data-scroll data-scroll-speed="5" />
                  <a data-scroll data-scroll-speed="2" className='menu-item'>CULTURE
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>
                  </div>   
                  
                  <div className="image-overlay">
                  <img src={image4} alt="Image 2" className="menu-item-image" data-scroll data-scroll-speed="5"/>
                  <a data-scroll data-scroll-speed="1" className='menu-item'>HISTORY
                  <h3 data-scroll data-scroll-speed="1">VIEW STORIES</h3></a>
                  </div> 
   
             
              </li>
          </ul>
         </div>
      </div>
  );
}

export default InfoSection2;

    