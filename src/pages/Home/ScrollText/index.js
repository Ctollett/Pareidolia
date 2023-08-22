import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { gsap } from "gsap";
import "../../../assets/globalstyles.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import fish from "../../../assets/fishwoman-2.png";
import fish2 from "../../../assets/fish3.png";

 



  
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




 
}, []);


  

  
  

  return (
    <section className="infoSectionContainer4">
      <div className='infoSectionWrapper4'>
      <div className='art-circle'> 
        <img data-scroll data-scroll-speed="0.07" className='fish-woman' src={fish} ></img>
        </div>
        <h2 className='scroll-text'> Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy </h2>
        <h2 className='scroll-text-2'>Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy - Criticism - Art and Public Work - Pedagogy -  - Criticism</h2>
      
    
  
        </div>
      

        </section>  
               
         
  );       
}  
         
export default InfoSection4;     