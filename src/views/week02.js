import React from 'react';

class Week02 extends React.Component {
    state = {
        title: null,
        info: null
    };

    async componentDidMount() {
        const url = "http://localhost:1337/reports/week/2";
        const response = await fetch(url);
        const result = await response.json();
        this.setState({ info: result.data.info, title: result.data.title });
    }

    render () {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <textarea readonly value={this.state.info}></textarea>
                <br></br>
                <a href="https://github.com/Skwoat/jsramverk">Github</a>
            </div>
        );
    }
}

export default Week02;