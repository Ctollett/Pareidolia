import { Link } from "react-router-dom";
import "./BlogPreview.css";


function BlogPreview ({title, description, id, category, coverimage, onClick}){




    return (
      <div>
          <div key={id}>
          <img id="blogPreviewImage" src={coverimage}/>
            <div className="postInfo">
              <div className="titleInfo">
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
    );   
    }

    
export default BlogPreview; 
