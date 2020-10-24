import React from 'react';

class ChatLog extends React.Component {
    state = {
        msgs: []
    };

    async componentDidMount() {
        const url = "http://localhost:3000/old";
        const response = await fetch(url);
        const result = await response.json();

        for (let i = 0; i < result.length; i++) {
            this.setState({ msgs: [...this.state.msgs, result[i].msg] })
        }
    }

    render () {
        return (
            <div>
                <h2>ChatLog</h2>
                <div className="chatWindow">
                    {this.state.msgs.map((message, index) => (
                        <p className="txtMsg" key={index}>{message}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default ChatLog;