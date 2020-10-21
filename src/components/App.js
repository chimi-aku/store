import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

// PAGES
import Home from './Home';

//Local Storage

class App extends Component {
    state = {
        loggedInStatus: 'NOR_LOGGED_IN',
        users: [
            {
                username: 'test',
                password: '123',
            },
        ],
    };


    render() {
        return (
            <div className="App">
                <HashRouter basename={'/'}>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            render={props => (
                                <Home {...props} loggedInStatus={this.state.loggedInStatus}/>
                            )}
                        />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
