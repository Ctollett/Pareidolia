
import { Component } from "react";
import "./ContactSection.css";
import portrait1 from './portrait1.jpg';
import portrait2 from './portrait2.jpg';
import portrait3 from './portrait3.jpg';
import portrait4 from './portrait4.jpg';
import portrait5 from './portrait5.jpg';
import portrait6 from './portrait6.jpg';
import websiteImg from './website.svg';
import socialImg2 from './twitter.svg';
import linkedinIcon from './linkedin.svg'


class ContactSection extends Component{
    render(){
        return(

            <section class="contactSection">
                 <div class="contactContainer">
                    <div class="person">  
                     <img id="portrait" src={portrait1} />
                     <h5>Photographer</h5>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="socials">
                        <a><img id="socialImage" src={socialImg2}></img></a>
                        <a><img id="socialImage" src={linkedinIcon}></img></a>
                        <a><img id="socialImage" src={websiteImg}></img></a>
                       
                    </div>
                </div>
                    <div class="person">
                     <img id="portrait" src={portrait2} />
                     <h5>Developer</h5>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="socials">
                        <a><img id="socialImage" src={socialImg2}></img></a>
                        <a><img id="socialImage" src={linkedinIcon}></img></a>
                        <a><img id="socialImage" src={websiteImg}></img></a>
                       
                    </div>
                </div>
                     <div class="person">  
                     <img id="portrait" src={portrait3} />
                     <h5>Writer</h5>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="socials">
                        <a><img id="socialImage" src={socialImg2}></img></a>
                        <a><img id="socialImage" src={linkedinIcon}></img></a>
                        <a><img id="socialImage" src={websiteImg}></img></a>
                       
                    </div>
                </div>
                    <div class="person">
                     <img id="portrait" src={portrait4} />
                     <h5>Artist</h5>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="socials">
                        <a><img id="socialImage" src={socialImg2}></img></a>
                        <a><img id="socialImage" src={linkedinIcon}></img></a>
                        <a><img id="socialImage" src={websiteImg}></img></a>
                       
                    </div>
                    </div>
                    <div class="person">
                     <img id="portrait" src={portrait5} />
                     <h5>Journalist</h5>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="socials">
                        <a><img id="socialImage" src={socialImg2}></img></a>
                        <a><img id="socialImage" src={linkedinIcon}></img></a>
                        <a><img id="socialImage" src={websiteImg}></img></a>
                       </div>
                    </div>
                    <div class="person">
                     <img id="portrait" src={portrait6} />
                     <h5>Designer</h5>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="socials">
                        <a><img id="socialImage" src={socialImg2}></img></a>
                        <a><img id="socialImage" src={linkedinIcon}></img></a>
                        <a><img id="socialImage" src={websiteImg}></img></a>
                       </div>
                    </div>
                </div>
       </section>
        )
    }  
}
         
export default ContactSection;  