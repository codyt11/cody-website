import React from 'react';
import Cody from "../images/cody.jpg";
import Skyline from "../images/skyline.jpg";
import Golf from "../images/golf.jpg";
import Money from "../images/money.jpg";
import BackgroundAnimation from "./background";
import { FaLinkedin, FaGithubSquare, FaGitlab } from "react-icons/fa";
import '../styles.scss';



function Body() {
  let projects = [
    {id:1, name: "project1", img:Cody},
    {id:2, name: "project2", img:Golf},
    {id:3, name: "project3", img:Golf},
    {id:4, name: "project4", img:Golf}
  ]
  return (
    <div class = "app">
      <div className='main'>
      <BackgroundAnimation/>
        <div className='page1'>
          <div className='title-info'>
            
            <div className='myName'>
            Cody Townley
            </div>
            <p>Full Stack Developer</p>
            <button className='about-me'>About Me</button>
          </div>
          <div className='logo'>
            C
          </div>  
          <div className="social-media-toolbar">
            <a href="https://github.com/codyt11" title="@codyt11 on github" rel="noreferrer" target="_blank">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/cody-townley/" title="@codyt11 on linked in" rel="noreferrer" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://gitlab.com/cwtownley" title="@cwtownley on gitlab" rel="noreferrer" target="_blank">
              <FaGitlab />
            </a>
          </div>
          <div class="item">
            <div className='works'>WORKS</div>
            <i class="fa fa-long-arrow-down arrow1" aria-hidden="true"></i>
          </div>
        </div>
        <div className='projects'>
          <div className='vert-line'> 
          <div className='projects-title'>Latest Works!</div>
          {projects.map(project => (
            <div key={project.id} className='project' data-number={`#${project.id}`} style={{ backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover',       
            backgroundPosition: 'center',  
            backgroundRepeat: 'no-repeat'}}>
              <div className='project-content'>{project.name}</div>
              <div class="project-number">{project.id}</div>
            </div>
          ))}
          </div>
        </div>
        <div className='fun'>
          <h4>Experiments and Fun!</h4>
          <h1>Programming a True Passion</h1>
          <div className='fun-projects'>
            <div className='fun-project' 
              style={{ backgroundImage: `url(${Cody})`,
                backgroundSize: 'cover',       
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat', 
                width: '100%',                 
                height: '100%'}}
              >img</div>
            <div className='fun-project' 
              style={{ backgroundImage: `url(${Cody})`,
                backgroundSize: 'cover',       
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat', 
                width: '100%',                 
                height: '100%'}}
              >img</div>
            <div className='fun-project' 
              style={{ backgroundImage: `url(${Cody})`,
                backgroundSize: 'cover',       
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat', 
                width: '100%',                 
                height: '100%'}}
              >img</div>
            
          </div>
        </div>
      </div>
      <footer>
      <div className='logo'>
            C
          </div>
        <p>Interested in working together?</p>
        <a href="mailto:cwtownley@gmail.com" title="Email me" rel="noreferrer" target="_blank"><tag>cwtownley@gmail.com</tag></a>
        <ul>
          <li><a href="https://github.com/codyt11" title="@codyt11 on github" rel="noreferrer" target="_blank"><FaGithubSquare /></a></li>
          <li><a href="https://www.linkedin.com/in/cody-townley/" title="@codyt11 on linked in" rel="noreferrer" target="_blank"><FaLinkedin /></a></li>
          <li><a href="https://gitlab.com/cwtownley" title="@cwtownley on gitlab" rel="noreferrer" target="_blank"><FaGitlab /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Body;