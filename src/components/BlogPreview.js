import { Link } from "react-router-dom";
import "./BlogPreview.css";
import "./FeaturedWork.css";


function BlogPreview ({title, description, id, category, coverimage, date, onClick}){




    return (
      <div>
          <div key={id}>
        <div className="blogPreviewWrapper">
          <div className="imageWrapper">
          <img src={coverimage}/>
          </div>
            <div className="postInfo">
              <div className="titleInfo">
                <p>{date}</p>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <div className="categorySection">
                <h4>{category}</h4>
                <button onClick={onClick}>Read More</button>
              </div>
            </div>
         </div>
      </div>
      </div>
    );   
    }

    
export default BlogPreview; 
