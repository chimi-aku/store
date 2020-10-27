import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import BookCard from './BookCard';

class Store extends Component {
    state = {
        text: '',

        books: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSearchBook = (e) => {
        e.preventDefault();

        const {text} = this.state;
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${text}`

        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data.items)
                this.setState({books: []})
            })
    }

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
                    <form onSubmit={this.handleSearchBook}>
                        <input name="text" type="text" value={this.state.text} onChange={this.handleChange}/>
                        <button type="submit">Search</button>
                    </form>
                </section>

                <section className="bookslist_section">
                    <div className="bookslist">
                        {
                            this.state.books.map((book, i) => {
                                return <BookCard
                                    key={i}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    published={book.volumeInfo.publishedDate.slice(0,3)}
                                    price={book.saleInfo.listPrice.amount}
                                />
                            })
                        }
                    </div>
                </section>
                
                <h1>Store</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
            </div>
        );
    }
}

export default Store;
