import React from "react";

class MyLife extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lifetime: "",
            studyTime: "",
        }
        this.tick = this.tick.bind(this);
        this.timeCalculation = this.timeCalculation.bind(this);
    }

    componentDidMount() {
        let dateAfterBirth = new Date(1994, 9, 20, 2);
        let dateAfterStartStudy = new Date(2020, 4, 1,);

        setInterval(() => this.tick(dateAfterBirth, dateAfterStartStudy), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tick)
    }

    timeCalculation(time) {
        let today = new Date();
        let difference = Math.floor((today - time) / 1000);
        let sec = difference % 60;
        difference = Math.floor(difference / 60);
        if (sec < 10) sec = '0' + sec;
        let min = difference % 60;
        difference = Math.floor(difference / 60);
        if (min < 10) min = '0' + min;
        let hour = difference % 24;
        difference = Math.floor(difference / 24);
        let timeStr = difference + " дней " + hour + " часов " + min + " минут " + sec + " секунд";

        return timeStr;
    }

    tick(dateAfterBirth, dateAfterStartStudy) {
        this.setState({
            lifetime: this.timeCalculation(dateAfterBirth),
            studyTime: this.timeCalculation(dateAfterStartStudy).slice(0, 17)
        })
    }


    render() {
        return (
            <div className="myLife">
                <h1>Живу на планете Земля уже {this.state.lifetime}</h1>
                <p>Из них: <strong>4015 дней</strong> учёбы в Лицее,
                    <strong> 1825 дней</strong> обучения на графического дизайнера,
                    <strong> 1915 дней</strong> работы дизайнером</p>
                <p className="studyFrontend">и <strong> {this.state.studyTime} </strong> обучения на Frontend
                    разработчика.
                    За это время я использовала: </p>
            </div>
        )
    }

}

export default MyLife;
