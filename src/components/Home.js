import React, { Component } from 'react'

import Logging from './Logging'

class Home extends Component {
    constructor(props){
        super(props);

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    }

    handleSuccessfulLogin(data) {
        // TODO update parent component
        // Authorising
        const SuccessfulLog = (() => {
            const {usersData} = this.props;
            for(const user of usersData){
                if(user.username === data.username && user.password === data.password)
                    return true;
                else
                    return false;
            }
        })();
        
        if(SuccessfulLog) {
            this.props.handleLogin(data);
            this.props.history.push("/store"); // redirecting to store page
        }
        else
            alert('Wrong username or password!')

    }

    render() {
        return(
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Logging handleSuccessfulLogin={this.handleSuccessfulLogin}/>
            </div>
        )
    }
}

export default Home;