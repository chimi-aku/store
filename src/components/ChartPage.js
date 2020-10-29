import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ChartPage extends Component {
    state = {
        moneyToPay: 0,
    };

    render() {
        return (
            <div className="chart">
                <header className="chart_header">
                    <NavLink to="/store">
                        <button className="button">
                            <a href>Back</a>{' '}
                            {/* if i write hre="true" warning disappear, but text looks like a hyperlink */}
                        </button>
                    </NavLink>
                    <button onClick={this.props.clearChart}>Clear chart</button>
                    <button>Buy</button>
                </header>

            </div>
        );
    }
}

export default ChartPage;
