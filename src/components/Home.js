import React, { Component } from 'react'

import Logging from './Logging'

class Home extends Component {
    constructor(props){
        super(props);

        this.handleSuccessfulLog = this.handleSuccessfulLog.bind(this);
    }

    handleSuccessfulLog(data) {
        // TODO update parent component
        const SuccessfulLog = (() => {
            const {usersData} = this.props;
            for(const user of usersData){
                if(user.username === data.username && user.password === data.password)
                    return true;
                else
                    return false;
            }
        })();

        if(SuccessfulLog)
            this.props.history.push("/store");
        else
            alert('Wrong username or password!')

        
    }

    render() {
        return(
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Logging handleSuccessfulLog={this.handleSuccessfulLog}/>
            </div>
        )
    }
}

export default Home;