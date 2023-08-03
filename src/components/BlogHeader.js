import React, { useRef } from "react";
import "./BlogHeader.css";

function BlogHeader() {
  const ref = useRef(null);

  return (
    <div className="blogWrapper" data-scroll-section ref={ref}>
      <div className="blogHeader">
        <div className="workHeaderInfo">
          <h1 className="hidden3">Our Work</h1>
          <p className="hidden3">
            Blending creative arts, social science, and digital media, we
            explore culture and technology through suspicious lenses. Upcoming
            projects include Transformers and memory of war, fursuit pricing
            analysis, and flash nonfiction on VR objects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
  