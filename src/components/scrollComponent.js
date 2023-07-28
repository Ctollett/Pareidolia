import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./scrollSection.css";
import useOnScreen from "../hooks/useOnScreen";
import useLocoScroll from "../hooks/useLocoScroll";
import { update } from "react-spring";
import cn from "classnames";
import categoryArt from "./collageArt.jpg";




const images = [
  {
    src:
      categoryArt,
    title: "Criticism",

  },
  {
    src:
    categoryArt,
    title: "Art and Public Work",

  },
  { 
    src:
    categoryArt,
    title: "Pedagogy",
   
  },  
  {
    src:
     categoryArt,
    title: "Research",

  },
];

function GalleryItem({
  src,
  category,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("scroll-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"scroll-item"}>
        <div
          className="scroll-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div className="scroll-item-info">
          <h1 className="scroll-info-title">{title}</h1>
          <button className="scroll-info-category">{category}</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

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
    }, 0); // Use 0 instead of setTimeout if you are sure the elements are already in the DOM
  }, []);


  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper scroll-wrap">
      <div className="scroll" ref={ref}>
        {images.map((image, index) => (
          <GalleryItem
            key={index} // Use the index as the key prop
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}