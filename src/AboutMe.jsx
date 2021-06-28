import React from 'react';
import './App.css';
import avatar from './image/avatar.jpg'

function AboutMe() {
    return (
        <div className="aboutMeContainer">

            <div className="avatar">
                <img src={avatar} alt="avatar"/>
            </div>

            <div className="social">
                <a className="socialLogo git" href="https://github.com/belkololol" target="_blank"
                   rel="noreferrer"> </a>
                <a className="socialLogo email" href="mailto:pepinoRick@yandex.ru" target="_blank"
                   rel="noreferrer"> </a>
                <a className="socialLogo linkedin" href="https://www.linkedin.com/in/helgaiv/" target="_blank"
                   rel="noreferrer"> </a>
                <a className="socialLogo telegram" href="https://tlgg.ru/helga_iv" target="_blank"
                   rel="noreferrer"> </a>
            </div>

            <div className="aboutMeContactContainer">
                <div className="aboutMeContact">
                    <p className="myName">
                        Иванова Ольга
                    </p>
                    <p>
                        Дата рождения: 20.10.1994 <br/>
                        Город: Санкт-Петербург <br/>
                        E-mail: <a href="mailto:pepinoRick@yandex.ru">pepinoRick@yandex.ru </a> <br/>
                        Телефон: <a href="tel:+79215822580">+7 (921) 582 25-80 </a> <br/>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;
