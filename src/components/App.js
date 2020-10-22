import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

// PAGES
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import Store from './Store';

//Local Storage

class App extends Component {
    state = {
        loggedInStatus: 'NOT_LOGGED_IN',
        user: {},
        users: [
            {
                username: 'test',
                password: '123',
            },
        ],
    };

    handleLogin = (data) => {
        this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: data,
        });
    };

    handleRegistration = data => {
        const newUser = {
            username: data.username,
            password: data.password
        }

        const usersList = this.state.users;
        console.log('push');
        usersList.push(newUser);

        this.setState({
            users: usersList
        })
    }

    render() {
        return (
            <div className="App">
                <HashRouter basename={'/'}>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            render={(props) => (
                                <HomePage
                                    {...props}
                                    handleLogin={this.handleLogin}
                                    loggedInStatus={this.state.loggedInStatus}
                                    usersData={this.state.users}
                                />
                            )}
                        />
                        <Route
                            exact
                            path={'/register'}
                            render={(props) => (
                                <RegistrationPage
                                    {...props}
                                    handleRegistration={this.handleRegistration}
                                    loggedInStatus={this.state.loggedInStatus}
                                    usersData={this.state.users}
                                />
                            )}
                        />
                        <Route
                            exact
                            path={'/store'}
                            render={(props) => (
                                <Store
                                    {...props}
                                    loggedInStatus={this.state.loggedInStatus}
                                />
                            )}
                        />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
