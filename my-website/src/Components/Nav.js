import React from 'react';
import styled from "styled-components";

const Navigation = styled.div`
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: 0;
width: 100%;
min-width: 20rem;
z-index: 999;
background-color: #525e65;
text-align: center;
box-shadow: 0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2);
color: #DBE8D4;
`;


function Nav() {
  return (
    <Navigation>  
        <ul>Home</ul>
        <ul>Projects</ul>
        <ul>About</ul>
        <ul>Resume</ul>    
    </Navigation>
  );
}

export default Nav;