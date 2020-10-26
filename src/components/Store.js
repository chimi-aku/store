import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Store extends Component {
    render() {
        return (
            <div className="store">
                <header className="store_header">
                    <div className="logo_box">
                        <p>Bookstore</p>
                    </div>
                    <div className="money_box">
                        <p>
                            balance:<span>{this.props.user.money}</span>
                        </p>
                    </div>
                    <div className="chart_box">
                        <NavLink to="/chart">
                            <div className="chart">
                                <a href="true">chart</a>
                            </div>
                        </NavLink>
                    </div>
                </header>

                <section className="search_section">
                    
                </section>
                
                <h1>Store</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
            </div>
        );
    }
}

export default Store;
