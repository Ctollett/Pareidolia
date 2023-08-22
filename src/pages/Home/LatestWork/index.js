import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../../assets/globalstyles.css";
import "./index.css";
import BlogPreviewLarge from "../../../components/BlogPreviewLarge/BlogPreviewLarge";
import BlogPreviewSmall from "../../../components/BlogPreviewSmall/BlogPreviewSmall";

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
      <Link to={blogLink} key={blog.id}>
        <BlogComponent
          date={formattedDate}
          title={blog.attributes.title}
          description={blog.attributes.description}
          category={blog.attributes.category}
          coverimage={`http://localhost:1337${imageURL}`}
        />
      </Link>  
    );
  };

  return (
    <div className="featuredContainer">
      <div className="featured-work-title">
        <h2>Our Latest Stories</h2>
      </div>
      <div className="featuredWork">
        {blogs.slice(0, 4).map((blog, index) => {
          if (index === 0) {
            return <div key={blog.id} className="largeBlog">{renderBlog(blog, true)}</div>;
          } else {
            return <div key={blog.id}>{renderBlog(blog)}</div>;
          }
        })}
      </div>
      <div className="bottomSection">
        <button>VIEW ALL STORIES</button>
      </div>
    </div>
  );
};

export default LatestWork;

    