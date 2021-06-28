import React from 'react';
import './App.css';
import HomePage from "./ HomePage";
import {Switch, Route, Link} from 'react-router-dom'
import MyProjects from "./MyProjects";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            isHiddenStart: true,
            isProject: false,
        }
        this.animateHidden = this.animateHidden.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
    }

    componentDidMount() {
        this.timeisHiddenStart = setTimeout(() => {
            this.setState({
                isHiddenStart: !this.state.isHiddenStart,
            })
        }, 700);
    }

    componentWillUnmount() {
        clearTimeout(this.timeisHiddenStart);
        clearTimeout(this.timeAnimate);
    }

    animateHidden(boolean) {
        this.setState({
            isHidden: !this.state.isHidden,
        })
    }

    toggleButton() {
        this.setState({
            isProject: !this.state.isProject,
        })
        this.animateHidden();
        this.timeAnimate = setTimeout(() => {
            this.animateHidden();
        }, 300)
    }


    render() {
        return (
            <div
                className={`${this.state.isHiddenStart ? null : "active"}
                 ${this.props.theme === 'light' ? 'light' : 'dark'} 
                 ${this.state.isProject ? null : "viewPort"}`}>
                <div className="background">
                </div>
                <div className={`${this.state.isHidden ? null : "active"} container `}>
                    <Switch>
                        <Route exact path='/portfolio' render={() => <HomePage toggleTheme={this.props.toggleTheme}
                                                                      hidden={this.state.isHidden}/>}/>
                        <Route path='/projects'
                               render={() => <MyProjects theme={this.props.theme} toggleTheme={this.props.toggleTheme}
                                                         hidden={this.state.isHidden}/>}/>
                    </Switch>
                </div>
                <Link to={this.state.isProject ? "/portfolio" : "/projects"}>
                    <button className="viewProjectsBtn" onClick={this.toggleButton}>
                        {this.state.isProject ? "Главная" : "Посмотреть проекты"}
                    </button>
                </Link>
                <div className={this.state.isProject ? "bandBottom" : "backgroundScroll"}>
                </div>
            </div>
        );
    }

}

export default Header;



