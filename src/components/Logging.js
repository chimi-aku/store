import React, { Component } from 'react';

class Logging extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            bookChart: [],
            money: props.money 
        };
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {username, password, bookChart, boughtBooks, money} = this.state;
        this.props.handleSuccessfulLogin({username, password, bookChart, boughtBooks, money});

    }

    render() {
        return (
            <div className="logging">
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
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

export default Logging;
