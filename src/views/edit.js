import React from 'react';

class Edit extends React.Component {
    state = {
        token: localStorage.getItem('token') ?? null,
        email: localStorage.getItem('email') ?? null,
        title: '',
        info: '',
        arr: [],
        currentOption: ''
    };

    async componentDidMount() {
        const url = "http://localhost:1337/reports/edit";
        const response = await fetch(url);
        const result = await response.json();
        this.setState({ arr: result.data });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSelect = async(event) => {
        await this.setState({"currentOption": event.target.value});
        for (let i= 0; i < this.state.arr.length; i++) {
            if (this.state.currentOption === this.state.arr[i].title) {
                this.setState({title: this.state.arr[i].title, info: this.state.arr[i].info});
            }
        }
    }

    handleSubmit = (event) => {
        fetch('http://localhost:1337/reports/edit', {
            method: 'PUT',
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
                    <h2>Edit Reports</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label for="dropdown">Choose a Report: </label>
                        <select name="dropdown" onChange={this.handleSelect}>
                            <option>Choose report</option>
                            {
                                this.state.arr.map(({title}) => {
                                    return <option key={title}>{title}</option>
                                })
                            }
                        </select>
                        <label>
                            Title
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}>
                        </input>
                        </label>
                        <textarea 
                            name="info" 
                            placeholder="Add text here..."
                            className="area"
                            value={this.state.info}
                            onChange={this.handleChange}
                        >
                        </textarea>
                        <input type="submit" value="Edit Report" className="registerButton"></input>
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

export default Edit;