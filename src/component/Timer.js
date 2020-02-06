import React from 'react';


class Timer extends React.Component {
    handleClick = () => {
        console.log("this is",this);
    }
    render() {
        return <h1>{this.props.name}
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <h3>
                <button onClick={this.handleClick}>click to console</button>
            </h3></h1>;
    }
    constructor(props, context) {
        super(props, context);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }
}

export default Timer;