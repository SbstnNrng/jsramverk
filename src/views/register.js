import React from 'react';

export default class Register extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
        fetch('http://localhost:1337/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state),
            }).then(function(response) {
            return response.json();
            });

        event.preventDefault();
    }

    render () {
        return (
            <div className="register">
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                    <input type="email" name="email" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Password
                    <input type="password" name="password" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="Register" className="registerButton"></input>
                </form>
            </div>
        );
    }
}