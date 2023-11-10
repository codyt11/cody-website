import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className="logo-dark">
          <div className='letter'>C</div>
      </Link>
     
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
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/#fun">Fun</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>    
    </div>
  );
}

export default Nav;
