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
                bookChart: [],
                money: 100,
            },
        ],
    };
    // LOCAL STORAGE
    componentDidMount() {
        // LOCAL STORAGE
        // load
        
        if(typeof localStorage !== "undefined" && localStorage.getItem('users') != 'undefined') {
            let users = JSON.parse(localStorage.getItem('users'));
            if(users === null) users = []
            this.setState({users});
        }
        else {
            this.setState({users: []});
        }
        
    }


    handleLogin = (data) => {
        this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: data,
        });
    };

    handleRegistration = data => {
        //add new user to arr of all users
        const newUser = {
            username: data.username,
            password: data.password,
            bookChart: data.bookChart,
            money: 100
        }

        const usersList = this.state.users; 
        usersList.push(newUser);

        this.setState({
            users: usersList
        })

        // update local storage
        if(typeof localStorage !== 'undefined') {
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(usersList));
        }
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
                                    user={this.state.user}
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
