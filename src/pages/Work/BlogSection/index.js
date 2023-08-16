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

  const ref = useRef(null);  

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
    <>

    <div className="blog-section-container">
      <div className="buttonSection">
        <div className="searchBar">
          <input type="search" placeholder="Search" name="search" value={searchQuery} onChange={handleSearch} />
          <button type="submit">
            <img id="searchIcon" src={searchIcon} alt="Search" />
          </button>
        </div>
        <select value={selectedFilter} onChange={handleFilter}>
          <option value="all">All</option>  
          <option value="Criticism">Criticism</option>  
          <option value="Art and Public Work">Art and Public Work</option>
          <option value="Pedagogy">Pedagogy</option>
          <option value="Research">Research</option>
        </select>   
      </div>  
      <div className="blog-section-wrapper">
        {filteredBlogs.map((blog, index) => {
          if (index % 4 === 0) {
            return <div className="largeBlog">{renderBlog(blog, true)}</div>;
          } else {
            return renderBlog(blog);
          }
        })}
      </div>
    </div>
    </>
  );
};

export default BlogSection;
