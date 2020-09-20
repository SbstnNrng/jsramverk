import React from 'react';

export default class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
        const that = this;
        fetch('http://localhost:1337/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
            }).then(function(response) {
                return response.json();
            }).then(function (data) {
                if (data.data) {
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('email', that.state.email); 
                }
            });
        event.preventDefault();
    }

    render () {
        return (
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                    <input type="email" name="email" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Password
                    <input type="password" name="password" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="Login" className="loginButton"></input>
                </form>
            </div>
        );
    }
}