
import { Component } from "react";
import "./ContactHeader.css";
import Contact from "../routes/Contact";
import displayArt2 from './RachelsArt/fish3.png';


class ContactHeader extends Component{
    render(){
        return(

            <div class="contactWrapper">   
                <div class="contactHeader">
                <h1>Get In Touch With Us</h1>
                <div className='contactImageBackground'>
            <img data-scroll data-scroll-speed="1" data-scroll-repeat="true"src={displayArt2}></img>
             </div>
             </div>
       </div>
        )
    }  
}
    
export default ContactHeader;   