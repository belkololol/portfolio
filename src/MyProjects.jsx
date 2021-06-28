import React from "react";
import html from "./image/instruments/html.png";
import javascript from "./image/instruments/javascript.png";
import sass from "./image/instruments/sass.png";
import css from "./image/instruments/css.png";
import gulp from "./image/instruments/gulp.png";
import desire from "./image/projects/desire.png";
import hungryPeople from "./image/projects/hungryPeople.png";
import crossings from "./image/projects/crossings.png";
import alko from "./image/projects/alko.png";
import toDoList from "./image/projects/todoList.png";
import bootstrap from "./image/instruments/bootstrap.png";
import react from "./image/instruments/react.svg";
import ThemeSwitch from "./ThemeSwitch";

function MyProjects(props) {
    if (props.hidden) {
        return null
    } else {
        return (
            <div>
                <ThemeSwitch toggleTheme={props.toggleTheme}/>
                <div className="myProjectsContainer">
                    <div className="project">
                        <div className="projectImg">
                            <img src={desire} alt="desire"/>
                        </div>
                        <div className="descriptionProject">
                            <div className="myProjectTitle">
                                <h2>Вёрстка сайта дизайнерской мебели Desire</h2>
                                <div className="badgeInstruments">
                                    <img src={html} alt="html"/>
                                    <img src={sass} alt="sass"/>
                                    <img src={javascript} alt="javascript"/>
                                    <img src={gulp} alt="gulp"/>
                                </div>
                            </div>
                            <div className="containerButton">
                                <a href="https://belkololol.github.io/desireVisual/index.html" target="_blank">
                                    <button className="goToSiteBtn">
                                        Перейти
                                    </button>
                                </a>
                                <a className="goToGit" href="https://github.com/belkololol/desire" target="_blank">
                                    <button className="goToGitBtn">
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="projectImg">
                            <img src={toDoList} alt="toDoList"/>
                        </div>
                        <div className="descriptionProject">
                            <div className="myProjectTitle">
                                <h2>Разработка to-do list на React </h2>
                                <div className="badgeInstruments">
                                    <img src={html} alt="html"/>
                                    <img src={css} alt="css"/>
                                    <img src={javascript} alt="javascript"/>
                                    <img src={bootstrap} alt="bootstrap"/>
                                    <img src={react} alt="react"/>
                                </div>
                            </div>
                            <div className="containerButton">
                                <a href="https://belkololol.github.io/to-do-react/" target="_blank">
                                    <button className="goToSiteBtn">
                                        Перейти
                                    </button>
                                </a>
                                <a className="goToGit" href="https://github.com/belkololol/to-do-react" target="_blank">
                                    <button className="goToGitBtn">
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="projectImg">
                            <img src={alko} alt="alko"/>
                        </div>
                        <div className="descriptionProject">
                            <div className="myProjectTitle">
                                <h2>Разработка сайта для отслеживания потребляемого алкоголя</h2>
                                <div className="badgeInstruments">
                                    <img src={html} alt="html"/>
                                    <img src={css} alt="css"/>
                                    <img src={javascript} alt="javascript"/>
                                </div>
                            </div>
                            <div className="containerButton">
                                <a href="https://belkololol.github.io/newAlkoholicCalendar/" target="_blank">
                                    <button className="goToSiteBtn">
                                        Перейти
                                    </button>
                                </a>
                                <a className="goToGit" href="https://github.com/belkololol/newAlkoholicCalendar"
                                   target="_blank">
                                    <button className="goToGitBtn">
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="projectImg">
                            <img src={hungryPeople} alt="hungryPeople"/>
                        </div>
                        <div className="descriptionProject">
                            <div className="myProjectTitle">
                                <h2>Вёрстка сайта ресторана Hungry people</h2>
                                <div className="badgeInstruments">
                                    <img src={html} alt="html"/>
                                    <img src={css} alt="css"/>
                                    <img src={javascript} alt="javascript"/>
                                </div>
                            </div>
                            <div className="containerButton">
                                <a href="https://belkololol.github.io/template-site/" target="_blank">
                                    <button className="goToSiteBtn">
                                        Перейти
                                    </button>
                                </a>
                                <a className="goToGit" href="https://github.com/belkololol/template-site"
                                   target="_blank">
                                    <button className="goToGitBtn">
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="project">
                        <div className="projectImg">
                            <img src={crossings} alt="crossings"/>
                        </div>
                        <div className="descriptionProject">
                            <div className="myProjectTitle">
                                <h2>Вёрстка сайта автопарка Movee</h2>
                                <div className="badgeInstruments">
                                    <img src={html} alt="html"/>
                                    <img src={css} alt="css"/>
                                    <img src={javascript} alt="javascript"/>
                                </div>
                            </div>
                            <div className="containerButton">
                                <a href="https://belkololol.github.io/crossings/" target="_blank">
                                    <button className="goToSiteBtn">
                                        Перейти
                                    </button>
                                </a>
                                <a className="goToGit" href="https://github.com/belkololol/crossings" target="_blank">
                                    <button className="goToGitBtn">
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default MyProjects;
