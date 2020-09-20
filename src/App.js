import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Login from './views/login.js';
import Register from './views/register.js';
import me from './views/me.js';
import Reports from './views/reports.js';
import Edit from './views/edit.js';
import week01 from './views/week01.js';
import week02 from './views/week02.js';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                    <ul>
                        <li>
                        <Link to="/login">Login</Link>
                        </li>
                        <li>
                        <Link to="/register">Register</Link>
                        </li>
                        <li>
                        <Link to="/">Me</Link>
                        </li>
                        <li>
                        <Link to="/reports">Create Reports</Link>
                        </li>
                        <li>
                        <Link to="/edit">Edit Reports</Link>
                        </li>
                        <li>
                        <Link to="/reports/week/1">kmom1</Link>
                        </li>
                        <li>
                        <Link to="/reports/week/2">kmom2</Link>
                        </li>
                    </ul>
                    </nav>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={me} />
                    <Route exact path="/reports" component={Reports} />
                    <Route exact path="/edit" component={Edit} />
                    <Route exact path="/reports/week/1" component={week01} />
                    <Route exact path="/reports/week/2" component={week02} />
                </div>
            </Router>
        )
    }
}

export default App;
