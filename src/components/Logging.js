import React, { Component } from 'react';

class Logging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            bookChart: [],
            boughtBooks: [],
            money: props.money,
            moneyToPay: props.moneyToPay
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
            bookChart,
            boughtBooks,
            money,
            moneyToPay
        } = this.state;
        this.props.handleSuccessfulLogin({
            username,
            password,
            bookChart,
            boughtBooks,
            money,
            moneyToPay
        });
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
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
                {this.props.correctLoginData === false && <p className="error_info">Incorrent login data</p>}
                <button className="button submit_button"  type="submit">Log In</button>
            </form>
        );
    }
}

export default Logging;
