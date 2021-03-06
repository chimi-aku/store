import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Registration from './Registration';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulRegistration = this.handleSuccessfulRegistration.bind(this);
    }

    handleSuccessfulRegistration(data) {
        // TODO update parent component
        // Authorising
        const SuccessfulReg = (() => {
            const { usersData } = this.props;

            // checking if already exist the same accout with user 
            for(const user of usersData) {
                if(user.username === data.username)
                    return false;
            }


            if(data.username.length > 0 && data.password.length > 0 && data.password ===  data.confirmPassword)
                return true;
            else
                return false;
        })();
        
        if (SuccessfulReg) {
            this.props.handleRegistration(data);
            this.props.handleCorrectRegisterData(true)
            this.props.history.push('/'); // redirecting to homepage
        } else {
            this.props.handleCorrectRegisterData(false)
        } 
    }

    render() {
        return (
            <div className="registration_page">
                <Registration handleSuccessfulRegistration={this.handleSuccessfulRegistration} correctRegisterData={this.props.correctRegisterData}/>
                <NavLink to="/">
                    <button className="button">
                        <a href>Home</a>
                    </button>
                </NavLink>
            </div>
        );
    }
}

export default RegistrationPage;

/*
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
*/