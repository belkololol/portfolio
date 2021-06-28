import React from "react";

class Hello extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            welcomeString: "Добро пожаловать!",
            welcomeAnimate: "",
            count: 0,
            isAnimate: true,
        }
        this.animate = this.animate.bind(this);
        this.toggleAnimate = this.toggleAnimate.bind(this);
        this.hiddenAnimate = this.hiddenAnimate.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        this.timeAnimate = setInterval(this.animate, 150)
    }

    componentWillUnmount() {
        clearTimeout(this.timeHidden);
        clearTimeout(this.timeToggle);
        clearInterval(this.timeAnimate);
    }

    animate() {
        this.setState({
            welcomeAnimate: this.state.welcomeString.slice(0, this.state.count),
            count: this.state.count + 1
        })
        if (this.state.welcomeAnimate.length === this.state.welcomeString.length && this._isMounted) {
            this.timeHidden = setTimeout(this.hiddenAnimate, 700);
            this.timeToggle = setTimeout(this.toggleAnimate, 1000);
            this._isMounted = false;
        }
    }

    toggleAnimate() {
        this.props.toggleAnimate();
    }

    hiddenAnimate() {
        this.setState({
            isAnimate: false
        })
    }


    render() {
        return (
            <div className="helloContainer">
                <h1 className={`helloTitle ${this.state.isAnimate ? null : "hidden"}`}>{this.state.welcomeAnimate}|</h1>
            </div>
        );
    };
};

export default Hello;
