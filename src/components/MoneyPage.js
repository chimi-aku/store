import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MoneyPage extends Component {

    state = {
        moneyToAdd: 0
    }

    handleChangeOfMoneyToAdd = (e) => {
        this.setState({moneyToAdd: e.target.value})
    }

    handleAddMoney = (e) => {
        e.preventDefault()
        const money = parseInt(this.state.moneyToAdd, 10)
        if(money > 0) {
            this.props.updateMoney(money);
        }
        else {
            this.setState({moneyToAdd: 0})
        }
    }

    render() {
        return (
            <div className="chart_page">
                <header className="money_header">
                    <NavLink to="/store">
                        <button className="button chart_button">
                            <a href>Back</a>{' '}
                            {/* if i write hre="true" warning disappear, but text looks like a hyperlink */}
                        </button>
                    </NavLink>
                    <div className="money_box">
                        <p>money</p>
                        <p>{this.props.money}</p>
                    </div>
                </header>
                <form className="money_form" onSubmit={this.handleAddMoney}>
                    <div className="input money_input">
                        <input
                            type="number"
                            placeholder="type in amout of money"
                            onChange={this.handleChangeOfMoneyToAdd}
                        />
                    </div>
                    <button
                        className="button chart_button submit_button"
                        type="submit"
                    >
                        add Money
                    </button>
                </form>
            </div>
        );
    }
}

export default MoneyPage;
