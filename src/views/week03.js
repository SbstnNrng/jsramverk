import React from 'react';

class Week03 extends React.Component {
    state = {
        title: null,
        info: null
    };

    async componentDidMount() {
        const url = "https://my-api.jsram.me/reports/week/3";
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

export default Week03;