import { Component } from "react";
import "./globalstyles.css";

class Footer extends Component{
    render(){
        return(

            <footer>
            <p>300 E St SW, Washington, DC 20546, USA</p>
            <div class="socialicons">
                <a href="https://twitter.com/NASA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="images/twitter.svg" alt=""/></a>
                 <a href="https://www.facebook.com/NASA/"><img src="images/facebook.svg" alt=""/></a>
            </div>
         </footer>
        )
    }
}

export default Footer;