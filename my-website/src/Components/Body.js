import React from 'react';
import styled from "styled-components";
import Cody from "../images/cody.jpg";
import Skyline from "../images/skyline.jpg";
import Med from "../images/med.jpg";
import Money from "../images/money.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Name = styled.div`
display: flex;
justify-content: center;
color: #DBE8D4;
padding: 9rem 0 0 0;
`;
const Main = styled.body`
background: #222733;
height: 100vh;
`;
const Title = styled.div`  
display: flex;
flex-direction: column;
font-size: 3rem;
margin-top: -75px;
margin-left: -30px;
color: #DBE8D4;
background: #2a2c3b;
height: 30%;
width: 105%;
border: 2px solid #2a2c3b;
border-radius: 0 0 100% 100%;

`;

const Description = styled.div`
display: flex;
justify-content: center;
color: #DBE8D4;
font-size: 2rem;
`;
const Container = styled.div`
background: #222733;
`

const Intro = styled.div`
display: flex;
justify-content: center;
padding: 5% 0;
color: #DBE8D4;
font-size: 1.5rem;
line-height: 2.5rem;
`
const Img = styled.img`
display: flex;
justify-content: center;
margin: 5% auto;
border-radius: 25%;
width: 20%;
`
const Proj = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 10% auto;
padding-bottom: 10%;
color: #DBE8D4;
font-size: 1.5rem;
line-height: 2.5rem;
text-decoration: underline;
`
const ProjImg = styled.div`
display: flex;
justify-content: center;
text-align: center;
`
const Imgp = styled.img`
display: flex;
justify-content: center;
margin: 3% auto;
border-radius: 50%;
width: 50%;
`
const About= styled.div`
display: flex;
justify-content: center;
width: 50%;
flex-direction: column;
align-items: center;
margin: 10% auto;
padding-bottom: 10%;
color: #DBE8D4;
font-size: 1.5rem;
line-height: 2.5rem;
`

const Footer = styled.div`
display: flex;
flex-direction: column;
font-size: 2.5rem;
color: #DBE8D4;
margin: 0 auto;
background: #2a2c3b;
width: 100%;
height: 200px;
border: 2px solid #2a2c3b;
border-radius: 100% 100% 0 0;
align-items: center;
line-height: 6rem;
`
const Tag = styled.li`
color:#DBE8D4;
padding: 0 10px;
`
const Ul = styled.li`
display: flex;
list-style-type: none;
`


function Body() {
  return (
    <Main>
      <Title id = "title">
        <Name>Cody Townley</Name>
        <Description>Passionate, Hard Working, Dedicated!</Description>
      </Title>
      <Container>
        <Img alt = "me" src = {Cody}/>
        <Intro>
          Welcome to my portfolio. <br/>
          I am a Web Developer with a history in the medical field. <br/>
          Technology and problem solving are my passion!
        </Intro>
        <Proj id = "projects">
          <h2>PROJECTS</h2>
          <ProjImg>
            <a href="https://github.com/Lambda-School-Labs/LabsPT15-cityspire-g-be" title="City Spire app" rel="me" target="_blank"><Imgp alt = "me" src = {Skyline}/>City-Spire</a>
            <a href="https://github.com/Build-Week-Med-Cabinent-4/backend" title="Med Cabinet" rel="me" target="_blank"><Imgp alt = "me" src = {Med}/>Med Cabinet</a>
            <a href="https://github.com/Build-Week-Kickstarter-Success/Front-end" title="Kick-Starter Success" rel="me" target="_blank"><Imgp alt = "me" src = {Money}/>Kick-Starter Success</a>
          </ProjImg>
        </Proj>
        <About id ="about">
          <h2>ABOUT</h2>
          <p>I am a born and raised Kansas native. For the last 10 years I have been working in the medical field and going to school for Pharmacy. 
            My passion has always been in tech and i decided that i wasnt happy in the medical field so I attended Lambda School and learned how to code.
            I have a strong understanding of HTML, CSS, JS, NODE.js, React, and Python. The aspect of coding that drives me the most is the difficulty and
            the constant change. Problem solving is what I am best at and what keeps life interesting!
          </p>
        </About>
        <Footer>
        <a href="mailto:cwtownley@gmail.com" title="Email me" rel="me" target="_blank"><Tag>cwtownley@gmail.com</Tag></a>
        <Ul>
          <li><a href="https://github.com/codyt11" title="@codyt11 on github" rel="me" target="_blank"><Tag><FaGithubSquare /></Tag></a></li>
          <li><a href="https://www.linkedin.com/in/cody-townley/" title="@codyt11 on linked in" rel="me" target="_blank"><Tag><FaLinkedin /></Tag></a></li>
        </Ul>
      </Footer>
      </Container>
      

    </Main>
  );
}

export default Body;