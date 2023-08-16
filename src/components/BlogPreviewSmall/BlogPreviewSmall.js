import { Link } from "react-router-dom";
import "./BlogPreviewSmall.css";



function BlogPreviewSmall ({title, description, id, category, coverimage, date, onClick}){




    return (
      <div>
        <div className='blog-sml-container' key={id}>
        <div className="blog-sml-wrapper">
          <div className="blog-sml-image-wrapper">   
          <img src={coverimage}/>
          </div>
            <div className="blog-sml-info-wrapper">
            <div className="blog-sml-category">  
                <h4>{category}  \</h4>
                <h4>{date}</h4> 
              </div> 
              <div className="blog-sml-title">
                <h2>{title}</h2>
                <p>{description}</p>
    
              </div>   
            </div>
         </div>
      </div>
      </div>  
    );   
    }   

      
export default BlogPreviewSmall; 