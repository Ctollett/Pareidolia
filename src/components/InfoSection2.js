import { Component } from "react";
import "./globalstyles.css";
import "./InfoSection2.css";
import image from "./AbstractImage2.png";


class InfoSection2 extends Component{
    render(){
        return(

        <section id="aboutNasa">
        <div class="infoContainer2">
        <img src={image} class="hidden3"/>
            <div class="paragraphContainer2" id="info2">
                <h1 class="hidden3">Section 2.</h1>
            <p class="hidden3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        </div>
         </section>   
        
        )
    }  
}

export default InfoSection2;   