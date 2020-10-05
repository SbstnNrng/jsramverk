import React from 'react';

class Reports extends React.Component {
    state = {
        token: localStorage.getItem('token') ?? null,
        email: localStorage.getItem('email') ?? null,
        title: '',
        info: ''
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
        fetch('https://my-api.jsram.me/reports', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-access-token": this.state.token
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state),
            }).then(function(response) {
                return response.json();
            });

        event.preventDefault();
    }

    render () {
        if (this.state.token) {
            return (
                <div className="reports">
                    <h2>Create Reports</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title
                        <input type="text" name="title" value={this.state.value} onChange={this.handleChange}></input>
                        </label>
                        <textarea name="info" placeholder="Add text here..." className="area" value={this.state.value} onChange={this.handleChange}></textarea>
                        <input type="submit" value="Add Report" className="registerButton"></input>
                    </form>
                </div>
            );
        }
        return (
            <div>
                <p>Login please</p>
            </div>
        );
    }
}

export default Reports;