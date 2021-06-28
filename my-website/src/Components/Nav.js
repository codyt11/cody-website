import React from 'react';
import '../styles.scss';
import { useDarkMode } from '../hooks/useDarkMode';
import Logo from "../images/logo.svg";


const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
      
      <div class = "nav">
        <img class = "logo" src= {Logo}/>
        <div class = "button">
          <div>Dark Mode</div>
          <div className="dark-mode__toggle" onClick={toggleMode}>
          <div
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
          </div>
        </div>
            
            <ul class = "dropdown"><a href = "#home">Home</a></ul>
            <ul class = "dropdown"><a href = "#projects">Projects</a></ul>
            <ul class = "dropdown"><a href = "#about">About</a></ul>
            <ul class = "dropdown"><a href="https://drive.google.com/file/d/16KCoF9TV2jN1qYFJ8uJ3xqkDW7sa4UvH/view?usp=sharing" title="my resume" rel="noreferrer" target="_blank">Resume</a></ul> 
          
      </div>
  );
}

export default Nav;