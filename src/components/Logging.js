import React, { Component } from 'react';

class Logging extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;
        this.props.handleSuccessfulLog({username, password});

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
                        type="text"
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
