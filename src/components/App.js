import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

// PAGES
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import StorePage from './StorePage';
import ChartPage from './ChartPage';
import MyBooksPage from './myBooksPage';
import MoneyPage from './MoneyPage';

//import Book from '../elements/Book'

function clearArr(arr) {
    while (arr.length > 0) arr.pop();
}

class App extends Component {
    state = {
        loggedInStatus: 'NOT_LOGGED_IN',
        user: {},
        users: [
            /*
            {
                username: 'test',
                password: '123',
                bookChart: [],
                boughtBooks: [],
                money: 100,
                moneyToPay: 0
            },
            */
        ],
    };
    // LOCAL STORAGE
    componentDidMount() {
        // LOCAL STORAGE
        // load

        if (
            typeof localStorage !== 'undefined' && // eslint-disable-next-line
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

    handleLogout = () => {
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {},
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
            moneyToPay: 0,
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
        //console.log('Add book');
        //console.log(newbook);

        // Updating bookChart of current user
        const user = this.state.user;
        console.log(user);
        user.bookChart.push(newbook);
        user.bookChart.pop(); // WARNING!!!!! I pop because there appered some bug and book pushing double
        user.bookChart.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically by title
        this.setState({ user });

        //update users arr
        const users = this.state.users;
        for (const u of users) {
            if (user.username === u.username) {
                u.bookChart.push(newbook);
                u.bookChart.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically by title
                break;
            }
        }

        this.setState({ users });

        // update local storage
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(users));
        }

        this.hadndleUpdateMoneyToPay();

    };

    handleRemoveBookFromChart = (e) => {
        //console.log('remove from chart');
        const titleOfBookToRemove =
            e.target.parentNode.childNodes[0].childNodes[1].childNodes[0]
                .textContent;

        // Find and delete first matching book
        const user = this.state.user;
        for (const bookInChart of user.bookChart) {
            if (titleOfBookToRemove === bookInChart.title) {
                const index = user.bookChart.indexOf(bookInChart);
                user.bookChart.splice(index, 1);
                break;
            }
        }
        this.setState({ user });

        this.hadndleUpdateMoneyToPay();
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

        this.setState({ user, users });
        
        // update local storage

        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(users));
        }

        this.hadndleUpdateMoneyToPay();

    };

    hadndleUpdateMoneyToPay = () => {
        let moneyToPay = 0;
        for (const book of this.state.user.bookChart) {
            moneyToPay += book.price;
        }

        // Updating bookChart of current user
        const user = this.state.user;
        user.moneyToPay = moneyToPay;
        this.setState({user});
        

        //update users arr
        const users = this.state.users;
        for (const u of users) {
            if (user.username === u.username) {
                u.moneyToPay = moneyToPay;
                break;
            }
        }

        // update local storage
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(users));
        }

    };

    handleUpdateMoney = (moneyToAdd) => {
        console.log('add money');
        console.log(typeof moneyToAdd);

        // Updating bookChart of current user
        const user = this.state.user;
        user.money += moneyToAdd;
        this.setState({ user });

        //update users arr
        const users = this.state.users;
        for (const u of users) {
            if (user.username === u.username) {
                u.money += moneyToAdd;
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
                                    logout={this.handleLogout}
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
                                    bookChart={this.state.user.bookChart}
                                    handleRemoveBookFromChart={
                                        this.handleRemoveBookFromChart
                                    }
                                    moneyToPay={this.state.user.moneyToPay}
                                />
                            )}
                        />
                        <Route
                            exact
                            path={'/mybooks'}
                            render={(props) => <MyBooksPage {...props} />}
                        />
                        <Route
                            exact
                            path={'/money'}
                            render={(props) => (
                                <MoneyPage
                                    {...props}
                                    updateMoney={this.handleUpdateMoney}
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
