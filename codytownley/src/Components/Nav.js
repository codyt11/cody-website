import React from 'react';
import '../styles.scss';
import { useDarkMode } from '../hooks/useDarkMode';
import Logo from "../images/logo.svg";


const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleDark = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
      
      <div class = "nav">
        <div class = "logo-dark">
          <img class = "logo" alt = "ct logo" src= {Logo}/>
          <button onClick={toggleDark}>
            <div>Dark Mode</div>
          </button>
        </div>
        <div class = "links">
          <ul>
            <a class = "home" href = "#home" >Home</a>
            <a class = "projects" href = "#projects">Projects</a>
            <a class = "resume" href="https://drive.google.com/file/d/16KCoF9TV2jN1qYFJ8uJ3xqkDW7sa4UvH/view?usp=sharing" title="my resume" rel="noreferrer" target="_blank">Resume</a>
          </ul>
        </div>    
          
      </div>
  );
}

export default Nav;