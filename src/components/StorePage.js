import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import BooksList from './BooksList'

class Store extends Component {
    state = {
        text: '',

        books: [],
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSearchBook = (e) => {
        e.preventDefault();


        let text  = this.state.text;
        text = text.replace(/ /g, '%22');

        const URL = `https://www.googleapis.com/books/v1/volumes?q=${text}`;
        console.log(URL);

        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.items);
                if(data.items !== undefined) {
                    // deal with undefined values
                    for(const book of data.items) {
                        if(book.volumeInfo.imageLinks.thumbnail === undefined)
                            book.volumeInfo.imageLinks.thumbnail = '../imgs/No-image-available.png'
                        
                    }
                    
                    this.setState({ books: data.items });
                }
            })
            .catch( error => {
                console.log(error)
            })
    };

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
                        <input
                            name="text"
                            type="text"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Search</button>
                    </form>
                </section>

                <BooksList books={this.state.books} handleAddBookToChart={this.props.handleAddBookToChart}/>

                <h1>Store</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
            </div>
        );
    }
}

export default Store;

/*
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


*/
