import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ChartList from './ChartList'

class ChartPage extends Component {

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
                    <button className="button chart_button buy_button" onClick={this.props.buyBooks}>Buy</button>
                </header>
                <div className="summary">
                    <p>{`Total chart value: ${this.props.moneyToPay}`}</p>
                </div>

                <ChartList bookChart={this.props.bookChart} handleRemoveBookFromChart={this.props.handleRemoveBookFromChart} />
            </div>
        );
    }
}

export default ChartPage;
