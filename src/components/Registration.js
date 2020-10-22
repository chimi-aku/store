import React, { Component } from 'react';

class Registration extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        };
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {username, password, confirmPassword} = this.state;
        this.props.handleSuccessfulRegistration({username, password, confirmPassword});

    }

    render() {
        return (
            <div className="registration">
                <form onSubmit={this.handleSubmit}>
                    <label for="username">username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                    />
                    <label for="password">password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <label for="confirmPassword">confirm password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Registration;