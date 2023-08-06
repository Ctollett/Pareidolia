import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./scrollSection.css";
import useOnScreen from "../hooks/useOnScreen";
import cn from "classnames";
import categoryArt from "./collageArt.jpg";




export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);


  useEffect(() => {
    setTimeout(() => {
      let sections = gsap.utils.toArray(".scroll-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ".scroll",
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),

          end: () => `+=${document.querySelector(".scroll").offsetWidth}`,
        },
      });

      ScrollTrigger.refresh();
    }, 0); 
  }, []);


  return (
    <section data-scroll-section className="section-wrapper scroll-wrap">

      <div className="scroll" ref={ref}>
        <div className="titleScrollItem scroll-item-wrapper">
          <div className="scroll-item">
            <div className="titleWrapper">
            <h2>Topics of Study</h2>
          </div>
          </div>
        </div>
        <div className="galleryitem2 scroll-item-wrapper">
          <div className="scroll-item">
            <div className="scrollWrapper">
            <div className="scrollSectionTitle">
            <h2>Criticism</h2>
            </div>
          
            </div>
          </div>
        </div>
        <div className="galleryitem3 scroll-item-wrapper">
        <div className="scroll-item">
            <div className="scrollWrapper">
            <div className="scrollSectionTitle">
            <h2>Art and Public Work</h2>
            </div>
            </div>  
          </div>
          </div>
        <div className="galleryitem4 scroll-item-wrapper">
        <div className="scroll-item">
            <div className="scrollWrapper">
            <div className="scrollSectionTitle">
            <h2>Pedagogy</h2>
            </div>
            </div>
          </div>
          </div>
      </div>

    </section>
  );
  
}
