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
            console.log(usersData);
            console.log(data)
            for (const user of usersData) {
                if (
                    user.username === data.username &&
                    user.password === data.password
                )
                    return true;
                
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
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Logging handleSuccessfulLogin={this.handleSuccessfulLogin} />
                <NavLink to="/register">
                    <button className="button button-5">
                        <div className="translate"></div>
                        <a href>Create Account</a>
                    </button>
                </NavLink>
            </div>
        );
    }
}

export default HomePage;
