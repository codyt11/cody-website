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
      <img  class = "pic" alt = "me" src = {Cody} />
      <div class = "intro">
        Hello, My name is Cody. I am a full Stack web developer from Wichita, Ks.
      </div>
      <div class = "proj" id = "projects">
        <h2>PROJECTS</h2>
        <div class = "projimg">
          <a href="https://github.com/Lambda-School-Labs/LabsPT15-cityspire-g-be" title="City Spire app" rel="noreferrer" target="_blank"><img alt = "city skyline" src = {Skyline}/>City-Spire</a>
          <div class = "golfApp">
            <a href="https://github.com/codyt11/GolfersWeatherApp" title="Golfers Weather App" rel="noreferrer" target="_blank"><img alt = "golf course" src = {Golf}/>Golfers Weather github repo</a>
            <a href="https://musing-hawking-6e60a7.netlify.app/" title="live golf weather app" rel="noreferrer" target="_blank">Golfers Weather app Live</a>
          </div>
            
          <a href="https://github.com/Build-Week-Kickstarter-Success/Front-end" title="Kick-Starter Success" rel="noreferrer" target="_blank"><img alt = "me" src = {Money}/>Kick-Starter Success</a>
        </div>
      </div>
      <div class = "about" id = "about">
        <h2>ABOUT</h2>
        <p>I graduated the Lambda School full stack developer program in March 2021. While going through Lambda I was able to grow my skills
          through real world projects. As a team of 5-8 we architected, designed and built many projects. I am currently interviewing for full stack developer
          positions. My passion has always been tech. I have a strong understanding of HTML, CSS, JS, NODE.js, React, and Python. The aspect of coding that drives me the most is the difficulty and
          the constant change. Problem solving is what I am best at and what keeps life interesting!
        </p>
      </div>
      <footer>
        <p>Interested in working together?</p>
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