import React from "react";
import html from "./image/instruments/html.png";
import css from "./image/instruments/css.png";
import javascript from "./image/instruments/javascript.png";
import sass from "./image/instruments/sass.png";
import bootstrap from "./image/instruments/bootstrap.png";
import git from "./image/instruments/git.png";
import gulp from "./image/instruments/gulp.png";
import npm from "./image/instruments/npm.png";
import react from "./image/instruments/react.svg";
import figma from "./image/instruments/figma.svg";

function Skills() {
    return (
        <div className="skills">
            <div className="skillContainer">
                <p>HTML</p>
                <div className="skillsItem">
                    <img src={html} alt="html"/>
                </div>
                <p>HTML</p>
            </div>
            <div className="skillContainer">
                <p>CSS</p>
                <div className="skillsItem">
                    <img src={css} alt="css"/>
                </div>
                <p>CSS</p>
            </div>
            <div className="skillContainer">
                <p>Javascript</p>
                <div className="skillsItem">
                    <img src={javascript} alt="javascript"/>
                </div>
                <p>Javascript</p>
            </div>
            <div className="skillContainer">
                <p>Sass</p>
                <div className="skillsItem">
                    <img src={sass} alt="sass"/>
                </div>
                <p>Sass</p>
            </div>
            <div className="skillContainer">
                <p>Bootstrap</p>
                <div className="skillsItem">
                    <img src={bootstrap} alt="bootstrap"/>
                </div>
                <p>Bootstrap</p>
            </div>
            <div className="skillContainer">
                <p>Git</p>
                <div className="skillsItem">
                    <img src={git} alt="git"/>
                </div>
                <p>Git</p>
            </div>
            <div className="skillContainer">
                <p>Gulp</p>
                <div className="skillsItem">
                    <img src={gulp} alt="gulp"/>
                </div>
                <p>Gulp</p>
            </div>
            <div className="skillContainer">
                <p>Npm</p>
                <div className="skillsItem">
                    <img src={npm} alt="npm"/>
                </div>
                <p>Npm</p>
            </div>
            <div className="skillContainer">
                <p>React</p>
                <div className="skillsItem">
                    <img src={react} alt="react"/>
                </div>
                <p>React</p>
            </div>
            <div className="skillContainer">
                <p>Figma</p>
                <div className="skillsItem">
                    <img src={figma} alt="figma"/>
                </div>
                <p>Figma</p>
            </div>

        </div>
    )
}

export default Skills;
