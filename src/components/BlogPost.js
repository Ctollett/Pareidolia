import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profilePic from './portrait1.jpg';
import "./BlogPost.css";  
import "./ckeditor.css";


const FullBlogPost = () => {
  const { id } = useParams(); // Retrieve the blog post ID from the URL parameter

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs/${id}?populate=coverimage`);
        const responseData = await response.json();
        const blog = responseData.data;
        console.log(response);

        setBlog(blog);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    fetchBlog();
  }, [id]);


   
   
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!blog || !blog.attributes) {
    return <div>No blog post found.</div>;
  }
  

  const { title, description, coverimage, content } = blog.attributes;
  
  const changedContent = blog.attributes.blog
  .replace(/\/uploads\//g, `http://localhost:1337/uploads/`)

  
  console.log(changedContent);
 


  

  return (
    <div className="blogPost">
      <div key={blog.id}>
        <div className="blogHeaderSection">
          <div className="blogCoverImage">
            <img src={`http://localhost:1337${blog.attributes.coverimage.data.attributes.url}`} alt="Cover" />
          </div>
          <div className="blogInfoSection">
            <div className="blogTitleSection">
              <h4>category</h4>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="blogAuthorSection">
              <div className="blogProfilePic">
                <img src={profilePic} alt="Author" />
              </div>
              <div className="blogAuthor">
                <h2>Colton Tollett</h2>
                <p>May 8, 2023</p>
              </div>
            </div>
          </div>  
        </div>
        <div className="line"></div>

        <div className="ck-content" dangerouslySetInnerHTML={{__html: changedContent}} >

        </div>
      </div>  
    </div>
  );
}

export default FullBlogPost;
   