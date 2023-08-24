import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./index.css";
import "../../../assets/globalstyles.css";
import mushroom from "../../../assets/mushroom-1.svg"
import mushroom2 from "../../../assets/mushroom-2.svg"
import mushroom3 from "../../../assets/mushroom-3.svg"
import mushroom4 from "../../../assets/mushroom-4.svg"

export default function Categories() {  

  gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin with GSAP

  
  useEffect(() => {


  gsap.utils.toArray('.category-section-entry').forEach((entry, index) => {
    ScrollTrigger.create({
      trigger: entry,
      start: "top 60%",  // Adjust as needed
      onEnter: () => entry.classList.add('animate-in'),
      onLeaveBack: () => entry.classList.remove('animate-in'),
    });
  });



    // Initialize a timeline that will hold all our animations
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".category-section-container",
        start: "top 10%",
        end: () => "+=" + (gsap.utils.toArray('.category-section-entry').length * 100), // This will be dynamic depending on the number of items and the offset between them
        pin: true,
        scrub: 2, // This makes the animation smooth during scroll
      }  
    });
  
    // Loop through each entry and add to the timeline
    gsap.utils.toArray('.category-section-entry').forEach((entry, index) => {
      tl.from(entry, {
        duration: 0.2  // Or adjust duration as needed
      }, `+=${index * 100}`);  // Offset the start of each animation
    });
  
  }, []);
  
  return (
    <div className="category-section-container">
        <div className="category-section-title">
          <h2>Topics of Study</h2>
        </div>
      <div className="category-section-wrapper">
        <div className="category-section-entry">
          <div className="entry-title-wrapper">
          <div className="entry-line"></div>
          <div className="entry-title">
          <div className="entry-num">
            <h3>.01</h3>
          </div>
            <h2>Criticism</h2>
            <p></p>
            </div>
          </div>
        </div>
        <div className="category-section-entry">
          <div className="entry-title-wrapper">
          <div className="entry-line"></div>
          <div className="entry-title">
          <div className="entry-num">
            <h3>.02</h3>
          </div>
            <h2>Art and Public Work</h2>
            </div>
          </div>
        </div>
        <div className="category-section-entry">
          <div className="entry-title-wrapper">
          <div className="entry-line"></div>
          <div className="entry-title">
          <div className="entry-num">
            <h3>.04</h3>
          </div>
            <h2>Pedagogy</h2>
            </div>
          </div>
        </div>
        <div className="category-section-entry">
          <div className="entry-title-wrapper">
          <div className="entry-line"></div>
          <div className="entry-title">
          <div className="entry-num">
            <h3>.05</h3>
          </div>
            <h2>Research</h2>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  );
}
