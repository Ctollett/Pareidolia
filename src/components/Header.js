import { Component } from "react";
import "./globalstyles.css";
import socialImg from './facebook.svg';
import socialImg2 from './twitter.svg';

class Header extends Component{
    render(){
        return(

        <header>
            <div class="titleSection">
            <h1 class="hidden3">Pareidolia.</h1>
            
            <p class="hidden3">Pareidolia: n. misperception of random stimuli as real things or people, as when faces are vividly seen in the flames of a fire.</p>
            <a id="exploreButton">Explore</a>
            <div class="socialsSection">
            <a href="#aboutNasa">
                <img src={socialImg}></img>
            </a>
            <a href="#aboutNasa">
                <img src={socialImg2}></img>
            </a>
                
            </div>
       </div>
       
       
       </header>
        )
    }
}

export default Header;