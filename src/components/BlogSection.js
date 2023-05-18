import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import searchIcon from '../components/search.svg';
import "./BlogSection.css";
import BlogPreview from "./BlogPreview";
import BlogHeader from "./BlogHeader";




const BlogSection = () => {
  const [blog, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);  
  };

  const handleFilter = (event) => {
    setSelectedFilter(event.target.value);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/blogs?populate=coverimage");
        const responseData = await response.json();
        const blogs = responseData.data; // Access the array of blogs from the 'data' property
    
        setBlogs(blogs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blog.filter((blog) => {
    const blogTitle = blog.attributes.title ? blog.attributes.title.toLowerCase() : ""; // Check if title exists
    const matchesSearch = blogTitle.includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" ? true : blog.attributes.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });
  
  return (
    <>
    <BlogHeader/>
    <div className="blogContainer">
      <div className="buttonSection">
        <div className="searchBar">
          <input type="search" placeholder="Search" name="search" value={searchQuery} onChange={handleSearch} />
          <button type="submit">
            <img id="searchIcon" src={searchIcon} alt="Search" />
          </button>
        </div>
        <select value={selectedFilter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="category4">Category 4</option>
        </select>
      </div>
    
      <div className="blogSection">
        {filteredBlogs.map((blog, index) => {
          const urlFriendlyTitle = blog.attributes.title.toLowerCase().replace(/\s+/g, "-");
          const blogLink = `/work/${blog.id}/${encodeURIComponent(urlFriendlyTitle)}`;

          const imageURL = blog.attributes.coverimage.data.attributes.url
  
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
                <div className="blogPreview">
                  <BlogPreview
                    title={blog.attributes.title}
                    description={blog.attributes.description}
                    category={blog.attributes.category}
                    coverimage={`http://localhost:1337${imageURL}`} 
            
                  />
                </div>   
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default BlogSection;