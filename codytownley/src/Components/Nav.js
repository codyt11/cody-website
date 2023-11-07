import React, { useState } from 'react';
import '../styles.scss';
// Import the Golf image if needed: import Golf from "../images/golf.jpg";

const Nav = () => {
  // State to handle the visibility of the nav links on mobile view
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the nav visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="nav">
      <div className="logo-dark" href="#home">
        <div className='letter'>C</div>
      </div>
     
      <button 
        className={`hamburger ${isNavVisible ? 'active' : ''}`} 
        aria-label="Toggle menu" 
        aria-expanded={isNavVisible} 
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`links ${isNavVisible ? 'active' : ''}`}>
        <ul>
          <li><a className="projects" href="#projects">Projects</a></li>
          <li><a className="fun" href="#fun">Fun</a></li>
          <li><a className="contact" href="#contact">Contact</a></li>
        </ul>
      </div>    
    </div>
  );
}

export default Nav;
