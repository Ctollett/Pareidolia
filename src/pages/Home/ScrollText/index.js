import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { gsap } from "gsap";
import "../../../assets/globalstyles.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mushroom5 from "../../../assets/mushroom-5.svg";
import mushroom6 from "../../../assets/mushroom-6.svg";

 



  
function InfoSection4() {  
const ref = useRef(null);




useEffect(() => {

let scrollText1 = document.querySelector('.scroll-text');
let scrollText2 = document.querySelector('.scroll-text-2');
let scrollText3 = document.querySelector('.scroll-text-3');
let mushroom = document.querySelector('.mushroom');
let mushroom2 = document.querySelector('.mushroom-2')


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".infoSectionContainer4",
    start: "10% 90%", 
    end: "90% 90%",   
    scrub: 10,        

    toggleActions: "play reverse play reverse",
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".infoSectionContainer4",
    start: "10% 90%", 
    end: "90% 90%",   
    scrub: 10,        

    toggleActions: "play reverse play reverse",
  },
});


tl.to(scrollText1, {
  x: "-10%",
  ease: "linear"
});   


tl2.to(scrollText2, {
  x: "15%",
  ease: "linear"
}); 

gsap.to(mushroom, {
  scrollTrigger: {
    start: "35% 20%",  
    trigger: mushroom,
    scrub: 10,
    end: "bottom center",
    onUpdate: function(self) {
      if (self.direction === 1) {
        // Scrolling down
        gsap.to(mushroom, { rotate: 30 });
      } else if (self.direction === -1) {
        // Scrolling up
        gsap.to(mushroom, { rotate: -30 });
      }
    }  
  }
});


gsap.to(mushroom2, {
  scrollTrigger: {
    start: "35% 20%",  
    trigger: mushroom2,
    scrub: 10,
    end: "bottom center",
    onUpdate: function(self) {
      if (self.direction === 1) {
        // Scrolling down
        gsap.to(mushroom2, { rotate: -30 });
      } else if (self.direction === -1) {
        // Scrolling up
        gsap.to(mushroom2, { rotate: 30 });
      }
    }  
  }
});


 
}, []);


  

  
  

  return (
    <section className="infoSectionContainer4">
      <div className='infoSectionWrapper4'>
        <img className='mushroom' src={mushroom5} ></img>
        <img className='mushroom-2' src={mushroom6} ></img>
        <h2 className='scroll-text'> Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy </h2>
        <h2 className='scroll-text-2'>Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy</h2>
      
    
  
        </div>
      

        </section>  
               
         
  );       
}
         
export default InfoSection4;     