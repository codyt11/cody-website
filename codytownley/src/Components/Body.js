import {React, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Crwn from "../images/crwn.mp4";
import Live from "../images/livechat.mp4";
import Crestview from "../images/crestview.mp4";
import BackgroundAnimation from "./background";
import AboutMe from './about-me';
import { FaLinkedin, FaGithubSquare, FaGitlab } from "react-icons/fa";
import '../styles.scss';



function Body() {
  let projects = [
    { id: 1, name: "Crown Clothing", img: Crwn, link: "https://reverent-nobel-25aed3.netlify.app/", page: "/crown" },
    {id:2, name: "Crestview.io", img:Crestview, link: "https://dev.crestview.io", page: "/crestview"},
    {id:3, name: "Live Chat", img:Live, link: "https://kind-joliot-6027aa.netlify.app/", page: "/live"}
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    console.log(`Is modal open: ${isModalOpen}`);
  }, [isModalOpen]);

  const navigate = useNavigate();

    const handleProjectClick = (page) => {
        navigate(page);
    };

  return (
    <div className = "app">
      <div className='main'>
      <BackgroundAnimation/>
        <div className='page1' id='contact'>
          <div className='title-info'>  
          <AboutMe isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <div className='myName'>
              Cody Townley
            </div>
            <p>Full Stack Developer</p>
            <button className="about-me"  onClick={() => setIsModalOpen(!isModalOpen)}>
              About Me
            </button>
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
          <div className="item">
            <div className='works'>WORKS</div>
            <i className="fa fa-long-arrow-down arrow1" aria-hidden="true"></i>
          </div>
        </div>
        <div className='projects' id='projects'>
          <div className='vert-line'> 
          <div className='projects-title'>Latest Works!</div>
          {projects.map(project => (
  <div key={project.id} className='project' onClick={() => handleProjectClick(project.page)}
  style={{ 
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  }}
  >
    {project.img.endsWith('.mp4') ? (
  <>
    <video autoPlay loop muted style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "50%",
      left: "50%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-2"
    }}>
      <source src={project.img} type="video/mp4" />
    </video>
    <div className='shade'></div>
  </>
) : (
  <div style={{
    backgroundImage: `url(${project.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '-1'
  }}></div>
)}

    <div className='project-content' >{project.name}</div>
    <div className="project-number" >{project.id}</div>
  </div>
))}
          </div>
        </div>
        <div className='fun' id='fun'>
          <h4>Experiments and Fun!</h4>
          <h1>Programming a True Passion</h1>
          <div className='fun-projects'>
            <div className='fun-project' 
              style={{ backgroundImage: `url()`,
                backgroundSize: 'cover',       
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat', 
                width: '100%',                 
                height: '100%'}}
              >img</div>
            <div className='fun-project' 
              style={{ backgroundImage: `url()`,
                backgroundSize: 'cover',       
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat', 
                width: '100%',                 
                height: '100%'}}
              >img</div>
            <div className='fun-project' 
              style={{ backgroundImage: `url()`,
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