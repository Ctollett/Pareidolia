import React, { useState } from 'react';
import "./globalstyles.css";
import arrow from "./arrow.svg";

const Navbar = ({ handleMenuClick, isContentVisible }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
    handleMenuClick();

    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';

  };

  return (
    <div className='navContainer'>
      <nav className='navbar'>  
        <h1 id="navLogo">P.<span></span></h1>
        <button className={`mobile-icon ${!isContentVisible && isMenuOpen ? 'active' : ''}`} onClick={handleButtonClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='/work'><img src={arrow}></img>WORK</a></li>
          <li><a href='/about'><img src={arrow}></img>PEOPLE</a></li>
          <li><a href='/contact'><img src={arrow}></img>CONTACT</a></li>
        </ul>
      </div>
      <div id='navLine'></div>
    </div>
  );
};

export default Navbar;
