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
        <ul><a href = "/#title">Home</a></ul>
        <ul><a href = "/#projects">Projects</a></ul>
        <ul><a href = "/#about">About</a></ul>
        <ul><a href="https://drive.google.com/file/d/1LIvVqNG5uzkqjRi10qkwkgHIdST22VTn/view?usp=sharing" title="my resume" rel="me" target="_blank">Resume</a></ul>  
    </Navigation>
  );
}

export default Nav;