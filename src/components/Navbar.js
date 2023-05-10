
import React, {useState, useEffect} from 'react';
import "./globalstyles.css";


const Navbar = () => {

            //NavBar disappear on scroll function
            const [navbar, setNavbar] = useState(false);
                const changeBackground = () => {
                    if(window.scrollY >= 80) {
                        setNavbar(true);
                    } else {
                        setNavbar(false);
                    }
                }

                window.addEventListener('scroll', changeBackground);

            
            //NavBar button menu function
            const [click, setClick] = useState(false)
            const handleClick = () => setClick(!click) 
            const [isMobile, setIsMobile] = useState(false)
            
            

        return(   
        <nav className={navbar ? 'navbar active' : 'navbar'}>  
            <h1 id="navLogo">P<span></span></h1>
           <ul className={isMobile ? "mobile-menu" : ""}
           onClick={() => setIsMobile(false)}>    
                <li><a href="/">HOME</a></li>
                <li><a href="/work">WORK</a></li>   
                <li><a href="/about">PEOPLE</a></li>          
            </ul>
                <button className="mobile-icon"
            onClick={() => setIsMobile(isMobile)} >
                {isMobile ? (
                    <i className="fas fa-times"></i> 
                ) : (
                    <i className="fas fa-bars"></i> 
                )} 
                </button>
        </nav>
       
        )

        }  

export default Navbar;   