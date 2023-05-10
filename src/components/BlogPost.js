import React, { useState, useEffect } from 'react';
import "./BlogPost.css";
import profilePic from "./portrait1.jpg"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import  ReactHtmlParser  from 'react-html-parser';



function BlogPost (){
    const { postId } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const renderImage = {
        image: ({ src, alt}) => <img src={src} alt={alt} />
    }

    useEffect (() => {
        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`http://localhost:1337/blogs/${postId}`);
                const data = await response.json();
                setBlogPost(data);
                setLoading(false); 
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchBlogPost();
    }, [postId]);

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {  
        return <div>Error</div>
    }
    const renderMarkdown = (markdown) => {
        const tokens = marked.lexer(markdown);
    
        return tokens.map((token, index) => {
          if (token.type === 'image') {
            return (
              <img
                key={index}
                src={token.href}
                alt={token.text}
              />
            );
          } else if (token.type === 'text') {
            return <span key={index}>{token.text}</span>;
          } else {
            return null;
          }
        });
      };
    
      return (
        <div className="blogPost">
          {blogPost ? (
            <div key={blogPost.id}>
              <div className="blogHeaderSection">
                <div className="blogCoverImage">
                  <img src={`http://localhost:1337${blogPost.coverimage.url}`} alt="Cover" />
                </div>
                <div className="blogInfoSection">
                  <div className="blogTitleSection">
                    <h4>{blogPost.category}</h4>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.description}</p>
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
              <div className="blogBodySection">
                <div className="blogPostBody">
                  {renderMarkdown(blogPost.body)}
                </div>
              </div>
            </div>
          ) : (
            <div>No blog post found.</div>
          )}
        </div>
      );
    }
    
    export default BlogPost;
    