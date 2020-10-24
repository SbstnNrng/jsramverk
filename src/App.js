import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Login from './views/login.js';
import Register from './views/register.js';
import me from './views/me.js';
import Reports from './views/reports.js';
import Edit from './views/edit.js';
import Chat from './views/chat.js';
import ChatLog from './views/chatHistory.js';
import week01 from './views/week01.js';
import week02 from './views/week02.js';
import week03 from './views/week03.js';
import week04 from './views/week04.js';

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
                        <Link to="/chat">Chat</Link>
                        </li>
                        <li>
                        <Link to="/chatLog">ChatLog</Link>
                        </li>
                        <li>
                        <Link to="/reports/week/1">kmom1</Link>
                        </li>
                        <li>
                        <Link to="/reports/week/2">kmom2</Link>
                        </li>
                        <li>
                        <Link to="/reports/week/3">kmom3</Link>
                        </li>
                        <li>
                        <Link to="/reports/week/4">kmom4</Link>
                        </li>
                    </ul>
                    </nav>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={me} />
                    <Route exact path="/reports" component={Reports} />
                    <Route exact path="/edit" component={Edit} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/chatLog" component={ChatLog} />
                    <Route exact path="/reports/week/1" component={week01} />
                    <Route exact path="/reports/week/2" component={week02} />
                    <Route exact path="/reports/week/3" component={week03} />
                    <Route exact path="/reports/week/4" component={week04} />
                </div>
            </Router>
        )
    }
}

export default App;
