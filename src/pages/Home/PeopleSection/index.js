import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import portrait from '../../../assets/portrait1.jpg';
import { gsap } from "gsap";
import flower4 from "../../../assets/flower-4.svg"
import "../../../assets/globalstyles.css";
import { Elastic } from 'gsap';


function Person({number, imageUrl, title, name, description}) {
    return (
        <div className='people-section'>
          <div className='people-title-section'>
            <div className='people-num'>
              <h3>{number}</h3>
            </div>
            <div className='people-title'>
              <div className='people-name-title'>
                <div className='people-image'>
                  <img src={imageUrl} alt={name} />
                </div>
                <div className='people-name'>
                  <h4>{title}</h4>
                  <h2>{name}</h2>
                </div>
              </div>
              <div className='peopleDesc'>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }



function InfoSection5() {  

const peopleData = [
{
    number: "01.",
    imageUrl: portrait,
    title: "\\ developer \\ designer \\ etc \\",
    name: "First Last",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim id est laborum",

},

{
    number: "02.",
    imageUrl: portrait,
    title: "\\ developer \\ designer \\ etc \\",
    name: "First Last",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim id est laborum",
},

{
    number: "03.",
    imageUrl: portrait,
    title: "\\ developer \\ designer \\ etc \\",
    name: "First Last",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim id est laborum",
},

{
    number: "04.",
    imageUrl: portrait,
    title: "\\ developer \\ designer \\ etc \\",
    name: "First Last",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim id est laborum",
},


{
    number: "05.",
    imageUrl: portrait,
    title: "\\ developer \\ designer \\ etc \\",
    name: "First Last",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim id est laborum",
},

{
    number: "06.",
    imageUrl: portrait,
    title: "\\ developer \\ designer \\ etc \\",
    name: "First Last",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit anim id est laborum",
}

]
const ref = useRef(null);
const [revealed, setRevealed] = useState(false);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 1365);

 useEffect(() => {

let stickyMenuTitle = document.querySelector(".sticky-menu-title");
let divideLine = document.querySelector(".divide-line");
let peopleSection = document.querySelectorAll(".people-section");
let flower4 = document.querySelector(".flower4");
let title = document.querySelector('.sticky-menu-title');

const mobileSettings = {
  scrollTrigger: {
    trigger: ".sticky-menu-title",
    start: "top top",
    endTrigger: ".infoSectionContainer5",
    end: "bottom bottom",
    pin: false,
    scrub: 1
  },
};

const desktopSettings = {
  scrollTrigger: {
    trigger: ".sticky-menu-title",
    start: "top top",
    endTrigger: ".infoSectionContainer5",
    end: "bottom bottom",
    pin: true,
    scrub: 1
  }
};
gsap.to(".sticky-menu-title", isMobile ? mobileSettings : desktopSettings);


gsap.to(peopleSection, {
    opacity: 1,
    duration: 0.5, // Half a second animation for each
    stagger: 0.2, // 0.2 seconds delay for each consecutive animation
    scrollTrigger: {
      trigger: ".people-section",
      start: "top 50%",
      endTrigger: ".infoSectionContainer5",
      end: "bottom bottom",
      scrub: 1
    }
  });

  gsap.from(title, { 
    scrollTrigger: {
      start: "top 80%",
      trigger: ".sticky-menu-wrapper",
      onEnter: () => title.classList.add('animate-in'),
      onLeaveBack: () => title.classList.remove('animate-in'),
      once: true,
      end: "bottom bottom",  
      toggleActions: "play reverse play reverse",
    },
  }) 

    gsap.to(divideLine, {
        width: 1150,
        scrollTrigger: {
          trigger: ".divide-line",
          start: "65% 60%",
          end: "bottom bottom",
          scrub: 5,
        }   
      });
     
      
      }, []); 

return (
    <section className="infoSectionContainer5">
      
        <div className='sticky-menu-wrapper'>
        <div className='divide-line'></div>
            <div className='sticky-menu-title'>
                <h2>Who We Are</h2>
            </div>
            <div className='sticky-menu-content'>
            {peopleData.map(person => 
          <Person 
            key={person.number}
            number={person.number}
            imageUrl={person.imageUrl}
            title={person.title}
            name={person.name}
            description={person.description}
          />
        )}
            </div>
        </div>   

    </section>
);
}
export default InfoSection5;
  