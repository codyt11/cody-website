import React from 'react';
import Cody from "../images/cody.jpg";
import Skyline from "../images/skyline.jpg";
import Med from "../images/med.jpg";
import Money from "../images/money.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import '../styles.scss';

function Body() {
  return (
    <main>
      <title id = "home">
        <p>Cody Townley <br/> Passionate, Hard Working, Dedicated!</p>
      </title>
        <img alt = "me" src = {Cody}/>
        <intro>
          Welcome to my portfolio.<br/> 
          I am a Web Developer with a history in the medical field.<br/> 
          Technology and problem solving are my passion!
        </intro>
        <proj id = "projects">
          <h2>PROJECTS</h2>
          <projimg>
            <a href="https://github.com/Lambda-School-Labs/LabsPT15-cityspire-g-be" title="City Spire app" rel="noreferrer" target="_blank"><img alt = "me" src = {Skyline}/>City-Spire</a>
            <a href="https://github.com/Build-Week-Med-Cabinent-4/backend" title="Med Cabinet" rel="noreferrer" target="_blank"><img alt = "me" src = {Med}/>Med Cabinet</a>
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
    </main>
  );
}

export default Body;