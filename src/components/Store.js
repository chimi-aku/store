import React, { Component } from 'react'


class Store extends Component {
    state = {}

    render() {
        return(
            <div>
                <h1>Store</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
            </div>
        )
    }
}

export default Store;