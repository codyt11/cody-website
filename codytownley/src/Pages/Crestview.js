import React from "react";
import "./crestview.scss";
import Crest from "../images/crestview.mp4";

function Crestview() {
    return(
        <div className="crest-main">
        <div className="display-top">
            <div className="project-video">
                <div className="video-bg">
                    <video autoPlay loop muted>
                        <source src={Crest} type="video/mp4" />
                    </video>
                </div>
                <div className="title">Crestview.io</div>
                <div className="short-about">An all-in-one application expertly designed to streamline company compliance management, ensuring seamless adherence to regulatory standards across the entire organization.</div>
                <div className="roles">
                    <div className="my-role"><span className="first-word">ROLE</span> FULL STACK DEVELOPER</div>
                    <div className="context"><span className="first-word">CONTEXT</span> GROUND UP BUILD</div>
                    <div className="period"><span className="first-word">PERIOD</span> APRIL -  OCTOBER 2023</div>
                </div>
            </div>
            <div className="project-about">
                <div className="about-text">
                    <div className="about-text-title">Crestview.io</div>
                    <p>Crestview.io is a sophisticated application purpose-built for streamlining compliance management
                    within multi-million dollar enterprises. In my capacity as a Full Stack Developer at this dynamic 
                    company, my primary responsibility involved the development of new components, as directly outlined
                    by the CEO. This role presented an invaluable opportunity for me to delve into Vue.js, enabling me
                    to swiftly adapt and contribute effectively. My initial assignment was the development of the heatmap
                    component, which I approached with enthusiasm and diligence. Additionally, my tenure at Crestview.io
                    was marked by significant growth in my technical repertoire, particularly in mastering DynamoDB. 
                    This expertise was instrumental in redesigning database tables, a critical step that aligned with 
                    the company's ambitious growth objectives. My experience at Crestview.io was not only a testament 
                    to my ability to rapidly assimilate new technologies but also a demonstration of my commitment to 
                    contributing meaningfully to large-scale, high-stakes projects. </p>
                </div>
            <div class="wrapper">
                <div class="link_wrapper">
                    <a  className="to-link" href="https://dev.crestview.io">To Website!</a>
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

export default Crestview;