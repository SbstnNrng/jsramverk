import React from 'react';

class Me extends React.Component {
    state = {
        title: null,
        info: null
    };

    async componentDidMount() {
        const url = "https://my-api.jsram.me/";
        const response = await fetch(url);
        const result = await response.json();
        this.setState({ info: result.data.info, title: result.data.title });
    }

    render () {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.info}</p>
            </div>
        );
    }
}

export default Me;