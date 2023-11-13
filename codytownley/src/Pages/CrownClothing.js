import React from "react";
import "./crownClothing.scss";
import crown from "../images/crwn.mp4";

function Crwn() {
    return(
    <div className="crown-main">
        <div className="display-top">
            <div className="project-video">
                <div className="video-bg">
                    <video autoPlay loop muted>
                        <source src={crown} type="video/mp4" />
                    </video>
                </div>
                <div className="title">Crown Clothing</div>
                <p className="short-about">E-Commerce Clothing Store</p>
                <div className="roles">
                    <div className="my-role"><span className="first-word">ROLE</span> FULL STACK DEVELOPER</div>
                    <div className="context"><span className="first-word">CONTEXT</span> TEST BUILD</div>
                    <div className="period"><span className="first-word">PERIOD</span> FEBRUARY 2023</div>
                </div>
            </div>
            <div className="project-about">
                <div className="about-text">
                    <div className="about-text-title">Crown Clothing</div>
                    <p>Crown Clothing represents a comprehensive, full-stack e-commerce demo project developed using React. 
                    It integrates React-Redux for efficient state management and leverages Firebase as its backend API. To facilitate seamless payment 
                    transactions, the project incorporates Stripe's payment services. This project was meticulously crafted to deepen my understanding 
                    of the intricacies of e-commerce platforms. Through its development, I gained valuable insights into cart management, checkout 
                    processes, and payment systems, while also enhancing my skills in CRUD (Create, Read, Update, Delete) operations. This venture 
                    served as an instrumental platform for honing my web development competencies, particularly in the realm of online retail solutions </p>
                </div>
            <div class="wrapper">
                <div class="link_wrapper">
                    <a  className="to-link" href="https://reverent-nobel-25aed3.netlify.app/">To Website!</a>
                    <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                    </svg>
                </div>
            </div>
  
</div>
            </div>
        </div>
        <div className="display-bottom">
            <div>Bottom</div>
        </div>
    </div>
)};

export default Crwn;