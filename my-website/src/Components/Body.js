import React from 'react';
import Cody from "../images/cody.jpg";
import Skyline from "../images/skyline.jpg";
import Golf from "../images/golf.jpg";
import Money from "../images/money.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import '../styles.scss';

function Body() {
  return (
    <div class = "app">
      <div class= "title">
          <p>Cody Townley <br/> Passionate, Hard Working, Dedicated!</p>
      </div>
      <img  class = "pic" alt = "me" src = {Cody} />
      <intro>
        Welcome to my portfolio.<br/> 
        I am a Web Developer with a history in the medical field.<br/> 
        Technology and problem solving are my passion!
      </intro>
      <proj id = "projects">
        <h2>PROJECTS</h2>
        <projimg>
          <a href="https://github.com/Lambda-School-Labs/LabsPT15-cityspire-g-be" title="City Spire app" rel="noreferrer" target="_blank"><img alt = "city skyline" src = {Skyline}/>City-Spire</a>
          <div class = "golfApp">
            <a href="https://github.com/codyt11/GolfersWeatherApp" title="Golfers Weather App" rel="noreferrer" target="_blank"><img alt = "golf course" src = {Golf}/>Golfers Weather github repo</a>
            <a href="https://musing-hawking-6e60a7.netlify.app/" title="live golf weather app" rel="noreferrer" target="_blank">Golfers Weather app Live</a>
          </div>
            
          <a href="https://github.com/Build-Week-Kickstarter-Success/Front-end" title="Kick-Starter Success" rel="noreferrer" target="_blank"><img alt = "me" src = {Money}/>Kick-Starter Success</a>
        </projimg>
      </proj>
      <about id = "about">
        <h2>ABOUT</h2>
        <p>I am a born and raised Kansas native. For the last 10 years I have been working in the medical field and going to school for Pharmacy. 
        My passion has always been in tech and i decided that i wasnt happy in the medical field so I attended Lambda School and learned how to code.
        I have a strong understanding of HTML, CSS, JS, NODE.js, React, and Python. The aspect of coding that drives me the most is the difficulty and
        the constant change. Problem solving is what I am best at and what keeps life interesting!
        </p>
      </about>
      <footer>
        <a href="mailto:cwtownley@gmail.com" title="Email me" rel="noreferrer" target="_blank"><tag>cwtownley@gmail.com</tag></a>
        <ul>
          <li><a href="https://github.com/codyt11" title="@codyt11 on github" rel="noreferrer" target="_blank"><tag><FaGithubSquare /></tag></a></li>
          <li><a href="https://www.linkedin.com/in/cody-townley/" title="@codyt11 on linked in" rel="noreferrer" target="_blank"><tag><FaLinkedin /></tag></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Body;