import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./globalstyles.css";
import "./FeaturedWork.css";
import BlogPreview from "./BlogPreview";
import ReactCurvedText from 'react-curved-text';


const LatestWork = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ref = useRef(null);
  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/blogs?populate=coverimage");
        const responseData = await response.json();
        const blogs = responseData.data;
        setBlogs(blogs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
   
  if (error) {   
    return <div>Error: {error.message}</div>;    
  }

  return (
    <div className="featuredContainer" data-scroll-section ref={ref}>
            
      <div className="featuredWork">
        {blogs.slice(0, 5).map((blog, index) => {
          const urlFriendlyTitle = blog.attributes.title.toLowerCase().replace(/\s+/g, "-");
          const blogLink = `/work/${blog.id}/${encodeURIComponent(urlFriendlyTitle)}`;

          const imageURL = blog.attributes.coverimage.data.attributes.url;
          const createdAtDate = new Date(blog.attributes.createdAt);

          const formattedDate = createdAtDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          let gridArea = ""; // Grid area for the div

          // Set the gridArea based on the desired repeating pattern
          const patternIndex = index % 6; // Index within the repeating pattern
  
          if (patternIndex === 0) {
            gridArea = "largeDiv"; // First div within the pattern spans multiple columns and rows
          } else if (patternIndex === 5) {
            gridArea = "mediumDiv"; // Fourth div within the pattern spans multiple columns
          } else {
            gridArea = "smallDiv"; // Remaining divs within the pattern span one column
          }

          return (  
            <div key={blog.id} className={gridArea}>
              <Link to={blogLink}>
                <BlogPreview
                  date={formattedDate}
                  title={blog.attributes.title}
                  description={blog.attributes.description}
                  category={blog.attributes.category}
                  coverimage={`http://localhost:1337${imageURL}`}
                />
              </Link>
            </div>
          );      
        })}
      </div>  
      <div className="bottomSection">
        <button>VIEW ALL ARTICLES</button>
      </div>
    </div>   
  );
};  

export default LatestWork;
    