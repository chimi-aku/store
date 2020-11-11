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
            this.props.handleCorrectNumber(true)
        }
        else {
            this.setState({moneyToAdd: 0})
            this.props.handleCorrectNumber(false)
        }
    }

    render() {
        return (
            <div className="chart_page">
                <header className="money_header">
                    <NavLink to="/store">
                        <button className="button chart_button money_back_button">
                            <a href>Back</a>{' '}
                            {/* if i write hre="true" warning disappear, but text looks like a hyperlink */}
                        </button>
                    </NavLink>
                    <div className="money_box money_box_in_moneypage">
                        <p>money</p>
                        <p>{this.props.money} PLN</p>
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
                    {this.props.correctNumber === false && <p className="error_info">Incorrent money value</p>}
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
