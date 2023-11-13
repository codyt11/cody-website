import React from "react";
import "./live.scss";
import Live from "../images/livechat.mp4";

function LiveChat() {
    return(
        <div className="live-main">
        <div className="display-top">
            <div className="project-video">
                <div className="video-bg">
                    <video autoPlay loop muted>
                        <source src={Live} type="video/mp4" />
                    </video>
                </div>
                <div className="title">Crestview.io</div>
                <div className="short-about">Compact demonstration application showcasing real-time communication capabilities.</div>
                <div className="roles">
                    <div className="my-role"><span className="first-word">ROLE</span> FULL STACK DEVELOPER</div>
                    <div className="context"><span className="first-word">CONTEXT</span> GROUND UP BUILD</div>
                    <div className="period"><span className="first-word">PERIOD</span> APRIL -  OCTOBER 2023</div>
                </div>
            </div>
            <div className="project-about">
                <div className="about-text">
                    <div className="about-text-title">Crestview.io</div>
                    <p>Live Chat is a demonstrative application I developed to refine my skills in real-time, peer-to-peer (P2P) communication. The front end is crafted using JavaScript, while the backend leverages Firebase snapshots to facilitate live interactive functionalities</p>
                </div>
            <div class="wrapper">
                <div class="link_wrapper">
                    <a  className="to-link" href="https://kind-joliot-6027aa.netlify.app/">To Website!</a>
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

export default LiveChat;