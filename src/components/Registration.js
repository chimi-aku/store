import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            bookChart: [],
            boughtBooks: [],
            money: 100,
            moneyToPay: 0
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            username,
            password,
            confirmPassword,
            bookChart,
            boughtBooks,
            money,
            moneyToPay,
        } = this.state;
        this.props.handleSuccessfulRegistration({
            username,
            password,
            confirmPassword,
            bookChart,
            boughtBooks,
            money,
            moneyToPay
        });
    };

    render() {
        return (
            <form className="form registration_form" onSubmit={this.handleSubmit}>
                <div className="input">
                    <label for="username">username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input">
                    <label for="password">password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input">
                    <label for="confirmPassword">confirm password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                    />
                </div>
                <button className="button submit_button" type="submit">
                    Register
                </button>
            </form>
        );
    }
}

export default Registration;
