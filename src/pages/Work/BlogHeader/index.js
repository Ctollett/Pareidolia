import React, { useRef } from "react";
import "./index.css"

function BlogHeader() {
  const ref = useRef(null);

  return (
      <div className="blog-header-wrapper">
        <div className="blog-header-info">
          <h1>Our Work</h1>
          <p>
            Blending creative arts, social science, and digital media, we
            explore culture and technology through suspicious lenses. Upcoming
            projects include Transformers and memory of war, fursuit pricing
            analysis, and flash nonfiction on VR objects.
          </p>
        </div>
      </div>
  );
};
  
export default BlogHeader;   
    