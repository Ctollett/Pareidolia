import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import profilePic from '../../../assets/portrait1.jpg';
import "./index.css";  
import "../../../components/ckeditor.css";
import "../../../assets/globalstyles.css";




function estimateReadingTime(content) {
  const wordsPerMinute = 225;
  const wordCount = content.split(/\s/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}



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
  

  const { title, description, coverimage, content, category, date} = blog.attributes;

  const formattedDate = new Date(blog.attributes.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });



  
  const changedContent = blog.attributes.blog
  .replace(/\/uploads\//g, `http://localhost:1337/uploads/`)

  const readingTime = estimateReadingTime(changedContent);
 


  

  return (
    <div className="blog-post" >
      <div key={id}>
      <div className='blog-post-heading'>
            <div className="blog-title-section">
              <h4>{category}</h4>
              <h1>{title}</h1>
              <p>{description}</p>
            <div className="blog-author-section">
              <div className="blog-author">
              <img src={profilePic} alt="Author" />
                <h2>Colton Tollett</h2>
              </div>
              <div className='blog-info'>
                <p>{formattedDate}</p>
                <p>{readingTime} min. read</p>
              </div>
              </div>
          </div> 
          <div className="blog-cover-image">
            <img src={`http://localhost:1337${blog.attributes.coverimage.data.attributes.url}`} alt="Cover" />
          </div>
              </div>
        <div className="blog-post-section">
          <div className='blog-post-wrapper'>
        <div className="ck-content" dangerouslySetInnerHTML={{__html: changedContent}} >
      </div> 
      </div> 
      </div> 
      </div>
    </div>
    
  );
}

export default FullBlogPost;
   