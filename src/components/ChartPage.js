import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ChartList from './ChartList'

class ChartPage extends Component {
    state = {
        moneyToPay: 0,
    };

    render() {
        return (
            <div className="chart">
                <header className="chart_header">
                    <NavLink to="/store">
                        <button className="button chart_button">
                            <a href>Back</a>{' '}
                            {/* if i write hre="true" warning disappear, but text looks like a hyperlink */}
                        </button>
                    </NavLink>
                    <button className="button chart_button clear_button" onClick={this.props.clearChart}>Clear</button>
                    <button className="button chart_button buy_button">Buy</button>
                </header>

                <ChartList bookChart={this.props.bookChart} />

            </div>
        );
    }
}

export default ChartPage;
