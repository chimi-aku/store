import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

// PAGES
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import StorePage from './StorePage';
import ChartPage from './ChartPage';

//import Book from '../elements/Book'

function clearArr(arr) {
    while (arr.length > 0) arr.pop();
}


class App extends Component {
    state = {
        loggedInStatus: 'NOT_LOGGED_IN',
        user: {},
        users: [
            {
                username: 'test',
                password: '123',
                bookChart: [],
                boughtBooks: [],
                money: 100,
            },
        ],
    };
    // LOCAL STORAGE
    componentDidMount() {
        // LOCAL STORAGE
        // load

        if (
            typeof localStorage !== 'undefined' &&
            localStorage.getItem('users') != 'undefined'
        ) {
            let users = JSON.parse(localStorage.getItem('users'));
            if (users === null) users = [];
            this.setState({ users });
        } else {
            this.setState({ users: [] });
        }
    }

    handleLogin = (data) => {
        this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: data,
        });
    };

    handleRegistration = (data) => {
        //add new user to arr of all users
        const newUser = {
            username: data.username,
            password: data.password,
            bookChart: data.bookChart,
            boughtBooks: data.boughtBooks,
            money: 100,
        };

        const usersList = this.state.users;
        usersList.push(newUser);

        this.setState({
            users: usersList,
        });

        // update local storage
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(usersList));
        }
    };

    handleAddBookToChart = (newbook) => {
        console.log('Add book');
        console.log(newbook);

        // Updating bookChart of current user
        const user = this.state.user;
        console.log(user);
        user.bookChart.push(newbook);
        this.setState({ user });

        //update users arr
        const users = this.state.users;
        for (const u of users) {
            if (user.username === u.username) {
                u.bookChart.push(newbook);
                break;
            }
        }
        this.setState({ users });

        // update local storage
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(users));
        }
    };

    handleClearChart = () => {
        // clear bookChart in state for current user and users
        console.log('clear chart');

        const user = this.state.user;
        clearArr(user.bookChart);

        const users = this.state.users;
        for (const u of users) {
            if (user.username === u.username) {
                clearArr(u.bookChart);
                break;
            }
        }

        this.setState({user, users})

        // update local storage
    
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(users));
        }

    };

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
                                <StorePage
                                    {...props}
                                    loggedInStatus={this.state.loggedInStatus}
                                    user={this.state.user}
                                    handleAddBookToChart={
                                        this.handleAddBookToChart
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path={'/chart'}
                            render={(props) => (
                                <ChartPage
                                    {...props}
                                    clearChart={this.handleClearChart}
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
