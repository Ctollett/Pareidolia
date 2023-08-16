import { Link } from "react-router-dom";
import "./BlogPreviewLarge.css";



function BlogPreviewLarge ({title, description, id, category, coverimage, date, onClick}){




    return (
      <div>
        <div className='blog-lrg-container' key={id}>
        <div className="blog-lrg-wrapper">
          <div className="blog-lrg-image-wrapper">   
          <img src={coverimage}/>
          </div>
            <div className="blog-lrg-info-wrapper">
            <div className="blog-lrg-category">
                <h4>{category}  \</h4>
                <p>{date}</p> 
              </div> 
              <div className="blog-lrg-title">
                <h2>{title}</h2>
                <p>{description}</p>
    
              </div>
            </div>
         </div>
      </div>
      </div>  
    );   
    }   

      
export default BlogPreviewLarge; 
