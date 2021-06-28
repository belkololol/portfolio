import AboutMe from "./AboutMe";
import MyLife from "./MyLife";
import Skills from "./Skills";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

class HomePage extends React.Component {
    render() {
        if (this.props.hidden) {
            return null
        } else {
            return (
                <div className="headerContent">
                    <ThemeSwitch toggleTheme={this.props.toggleTheme}/>
                    <AboutMe/>
                    <MyLife/>
                    <Skills/>
                </div>
            );
        }
    };
}

export default HomePage;
