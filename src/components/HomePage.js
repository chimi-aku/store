import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logging from './Logging';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);

    }

    handleSuccessfulLogin(data) {
        // TODO update parent component
        // Authorising
        const SuccessfulLog = (() => {
            const { usersData } = this.props;
            //console.log(usersData);
            //console.log(data)
            for (const user of usersData) {
                if (
                    user.username === data.username &&
                    user.password === data.password
                ) {
                    data.money = user.money; // write amount of money for logged user
                    data.moneyToPay = user.moneyToPay;
                    data.bookChart = user.bookChart; // load content of bookchart for current user from all users
                    return true;
                }
                    
                
            }
            return false;
        })();

        if (SuccessfulLog) {
            this.props.handleLogin(data);
            this.props.history.push('/store'); // redirecting to store page
        } else alert('Wrong username or password!');
    }

    render() {
        return (
            <div className="home_page">
                <Logging handleSuccessfulLogin={this.handleSuccessfulLogin}/>
                <NavLink to="/register">
                    <button className="button">
                        <a href>Create Account</a> {/* if i write hre="true" warning disappear, but text looks like a hyperlink */}
                    </button>
                </NavLink>
            </div>
        );
    }
}

export default HomePage;
