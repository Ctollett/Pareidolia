import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import searchIcon from '../../../assets/search.svg';
import "./index.css";
import "../../../assets/globalstyles.css";
import BlogPreviewLarge from "../../../components/BlogPreviewLarge/BlogPreviewLarge";
import BlogPreviewSmall from "../../../components/BlogPreviewSmall/BlogPreviewSmall";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [inTransition, setInTransition] = useState(false);  // New state for transition

  const handleSearch = (event) => {   
    setInTransition(true);
    setTimeout(() => {
      setSearchQuery(event.target.value);
      setInTransition(false);
    },)  
  };

  const handleFilter = (value) => {
    setInTransition(true);
    setTimeout(() => {
      setSelectedFilter(value);
      setInTransition(false);
    }, 300); // Adjust time as per your desired transition duration
  };
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/blogs?populate=coverimage");
        const responseData = await response.json();
        const fetchedBlogs = responseData.data;
        setBlogs(fetchedBlogs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }  
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog => {
    const blogTitle = blog.attributes.title ? blog.attributes.title.toLowerCase() : "";
    const matchesSearch = blogTitle.includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" ? true : blog.attributes.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const renderBlog = (blog, isLarge = false) => {
    const BlogComponent = isLarge ? BlogPreviewLarge : BlogPreviewSmall;
    const urlFriendlyTitle = blog.attributes.title.toLowerCase().replace(/\s+/g, "-");
    const blogLink = `/work/${blog.id}/${encodeURIComponent(urlFriendlyTitle)}`;
    const imageURL = blog.attributes.coverimage.data.attributes.url;
    const formattedDate = new Date(blog.attributes.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div key={blog.id}>
        <Link to={blogLink}>
          <BlogComponent
            date={formattedDate}
            title={blog.attributes.title}
            description={blog.attributes.description}
            category={blog.attributes.category}
            coverimage={`http://localhost:1337${imageURL}`}
          />
        </Link>
      </div>
    );
  };

  return (
    <div className="blog-section-container">
      <div className="blog-header-section">
        <div className="blog-header-title">
          <h2>Our Work</h2>
        </div>
        <div className="blog-header-desc">
          <p>Blending creative arts, social science, and digital media, we explore culture and technology through suspicious lenses. Upcoming projects include Transformers and memory of war, fursuit pricing analysis, and flash nonfiction on VR objects.</p>
        </div>
      </div>

      <div className="blog-line"></div>

      <div className="button-section">
        <form className="search-bar">
          <button type="submit">
            <img id="searchIcon" src={searchIcon} alt="Search" />
          </button>
          <input type="search" placeholder="Search" name="search" value={searchQuery} onChange={handleSearch} />
        </form>

        <div className="filter-buttons">
          <button className={selectedFilter === "all" ? "active" : ""} onClick={() => handleFilter("all")}>All</button>
          <button className={selectedFilter === "Criticism" ? "active" : ""} onClick={() => handleFilter("Criticism")}>Criticism</button>
          <button className={selectedFilter === "Art and Public Work" ? "active" : ""} onClick={() => handleFilter("Art and Public Work")}>Art and Public Work</button>
          <button className={selectedFilter === "Pedagogy" ? "active" : ""} onClick={() => handleFilter("Pedagogy")}>Pedagogy</button>
          <button className={selectedFilter === "Research" ? "active" : ""} onClick={() => handleFilter("Research")}>Research</button>
        </div>  
      </div>

         <div className={`blog-section-wrapper ${inTransition ? 'transition' : ''}`}>
        {filteredBlogs.length === 0 ? (
          <div className="no-titles-found">No titles found</div>
        ) : (
          filteredBlogs.map((blog, index) => {
            if (index % 4 === 0) {
              return <div className="largeBlog">{renderBlog(blog, true)}</div>;
            } else {
              return renderBlog(blog);
            }
          })
        )}
      </div>
    </div>
  );
};

export default BlogSection;

