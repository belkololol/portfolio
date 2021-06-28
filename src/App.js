import './App.css';
import React from 'react';
import Header from './Header';
import Hello from './Hello'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'dark',
            isAnimate: true
        }

        this.toggleTheme = this.toggleTheme.bind(this);
        this.toggleAnimate = this.toggleAnimate.bind(this);
    };

    toggleTheme() {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        });
    };

    toggleAnimate() {
        this.setState({
            isAnimate: false
        });
    };


    render() {
        return (
            <div className="App">
                {this.state.isAnimate ?
                    <Hello isAnimate={this.state.isAnimate} toggleAnimate={this.toggleAnimate}/> : null}
                {this.state.isAnimate ? null : <Header theme={this.state.theme} toggleTheme={this.toggleTheme}/>}
            </div>
        );
    };

};

export default App;
