import React from "react";
import "./crownClothing.scss";
import crown from "../images/crwn.mp4";

function Crwn() {
    return(
    <div className="crown-main">
        <div className="display-top">
            <div className="project-video">
                <video autoPlay loop muted>
                    <source src={crown} type="video/mp4" />
                </video>
                <div className="title">Crown Clothing</div>
                <p className="short-about">E-Commerce Clothing Store</p>
                <div className="roles">
                    <div className="my-role"><span className="first-word">ROLE</span> FULL STACK DEVELOPER</div>
                    <div className="context"><span className="first-word">CONTEXT</span> TEST BUILD</div>
                    <div className="period"><span className="first-word">PERIOD</span> FEBRUARY 2023</div>
                </div>
            </div>
            <div className="project-about">
                <div project-title>The Project</div>
                <p className="project-about">sadflkjsad;flasdf asfdl;kjasdfl;kjas fas;lkdfja;lskjdf as;lkdfjla;skjfd asldkfj asl;kdjfl;aksjfd a;slkdjf;alskjdf ;lkasjdflkasjdf</p>
            </div>
        </div>
        <div className="display-bottom">bottom</div>
    </div>
)};

export default Crwn;