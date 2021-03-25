import React from 'react';
import '../styles.scss';
import { useDarkMode } from '../hooks/useDarkMode';


const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
      <div class = "nav">
        <div class = "button">
          <div>Dark Mode</div>
          <div className="dark-mode__toggle" onClick={toggleMode}>
          <div
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
          </div>
        </div>
            
            <ul><a href = "./Body.js#title">Home</a></ul>
            <ul><a href = "./Body.js#proj">Projects</a></ul>
            <ul><a href = "./Body.js#about">About</a></ul>
            <ul><a href="https://drive.google.com/file/d/1LIvVqNG5uzkqjRi10qkwkgHIdST22VTn/view?usp=sharing" title="my resume" rel="noreferrer" target="_blank">Resume</a></ul> 
          
      </div>
  );
}

export default Nav;