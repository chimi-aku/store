import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

// PAGES
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import StorePage from './StorePage';
import ChartPage from './ChartPage';
import MyBooksPage from './MyBooksPage';
import MoneyPage from './MoneyPage';

//import Book from '../elements/Book'

function clearArr(arr) {
    while (arr.length > 0) arr.pop();
}

class App extends Component {
    state = {
        loggedInStatus: 'NOT_LOGGED_IN',
        correctLoginData: true,
        correctRegisterData: true,
        correctNumber: true,
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

    handleCorrectLoginData = (value) => {
        this.setState({correctLoginData: value})
    }

    handleCorrectRegisterData = value => {
        this.setState({correctRegisterData: value})
    }

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

        moneyToPay = Math.round(moneyToPay * 100) / 100;;

        // Updating bookChart of current user
        const user = this.state.user;
        user.moneyToPay = moneyToPay;
        this.setState({ user });

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

    handleUpdateMoney = (moneyToAdd = 0) => {
        //console.log('add money');
        //console.log(typeof moneyToAdd);

        moneyToAdd = Math.round(moneyToAdd * 100) / 100;

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

    handleCorrectNumber = data => {
        this.setState({correctNumber: data})
    }

    hadnleBuyBooks = () => {
        //console.log('buy books');

        const user = this.state.user;
        const users = this.state.users;

        // Check the proper amout of money
        if (user.money > user.moneyToPay) {
            // add books in chart to Mybooks

            const moneyLeft = parseInt(user.money, 10) - parseInt(user.moneyToPay, 10);

            // update current user
            user.money = moneyLeft;

            for (const book of user.bookChart) {
                user.boughtBooks.push(book);
                user.boughtBooks.pop() // WARNING!!!!! I pop because there appered some bug and book pushing double
            }
            user.boughtBooks.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically by title

            //update users arr
            for (const u of users) {
                if (user.username === u.username) {
                    for (const book of u.bookChart) {
                        u.boughtBooks.push(book);
                    }
                    user.boughtBooks.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically by title
                    u.money = moneyLeft;
                    break;
                }
            }
            
             
            this.handleUpdateMoney();
            this.handleClearChart(); // Clearing chart and updating local storage
        } else {
            alert('You have not enough money');
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
                                    handleCorrectLoginData={this.handleCorrectLoginData}
                                    correctLoginData={this.state.correctLoginData}
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
                                    handleCorrectRegisterData={this.handleCorrectRegisterData}
                                    correctRegisterData={this.state.correctRegisterData}
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
                                    buyBooks={this.hadnleBuyBooks}
                                />
                            )}
                        />
                        <Route
                            exact
                            path={'/mybooks'}
                            render={(props) => <MyBooksPage {...props} boughtBooks={this.state.user.boughtBooks}/>}
                            
                            
                        />
                        <Route
                            exact
                            path={'/money'}
                            render={(props) => (
                                <MoneyPage
                                    {...props}
                                    updateMoney={this.handleUpdateMoney}
                                    money={this.state.user.money}
                                    handleCorrectNumber={this.handleCorrectNumber}
                                    correctNumber={this.state.correctNumber}
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
