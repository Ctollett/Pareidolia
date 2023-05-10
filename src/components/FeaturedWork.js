import { Component } from "react";
import "./globalstyles.css";
import "./FeaturedWork.css";
import img from './stockimage1.jpg';
import img2 from './stockimage2.jpg';
import img3 from './stockimage3.jpg';
import img4 from './stockimage4.jpg';
import img5 from './stockimage5.jpg';



class FeaturedWork extends Component{
    render(){
        return(
       <section id="featuredWork">
            <div class="titleContainer">
                    <h1>Featured Work</h1>
                </div>
            <div class="featuredContainer">
                <div id="mainFeature">
                    <img src={img} />
                        <div id="mainFeatureInfo">
                    <h5>Article category</h5>
                    <h2>Article Title</h2>
                </div>
                </div>
                 <div class="articleContainer">
                    <div id="article">
                     <img src={img2} />
                     <div class="articleInfo">
                     <h5>Article category</h5>
                    <h2>Article Title</h2>
                </div>
                </div>
                    <div id="article">
                     <img src={img3} />
                     <div class="articleInfo">
                     <h5>Article category</h5>
                    <h2>Article Title</h2>
                </div>
                </div>
                     <div id="article">
                     <img src={img4} />
                     <div class="articleInfo">
                     <h5>Article category</h5>
                    <h2>Article Title</h2>
                </div>
                </div>
                    <div id="article">
                     <img src={img5} />
                     <div class="articleInfo">
                     <h5>Article category</h5>
                    <h2>Article Title</h2>
                    </div>
                </div>
                </div>
                </div>
       </section>

       
        )
    }
}

export default FeaturedWork;