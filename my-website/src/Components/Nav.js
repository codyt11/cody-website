import React from 'react';
import './Nav.css';


function Nav() {
  return (
      <div class = "nav">
        <div class = "bar"></div>
        <div class = "bar"></div>
        <div class = "bar"></div>
        <div class = "dropdown">
          <li>   
            <ul><a href = "/#title">Home</a></ul>
            <ul><a href = "/#projects">Projects</a></ul>
            <ul><a href = "/#about">About</a></ul>
            <ul><a href="https://drive.google.com/file/d/1LIvVqNG5uzkqjRi10qkwkgHIdST22VTn/view?usp=sharing" title="my resume" rel="noreferrer" target="_blank">Resume</a></ul> 
          </li>
        </div>
      </div>
  );
}

export default Nav;