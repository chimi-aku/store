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
            <div className="store_page">
                <header className="store_header">
                    <div className="logo_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>
                    </div>
                    <div className="money_box">
                        <p>money</p>
                        <p>{this.props.user.money}</p>
                    </div>
                    <div className="logout_box">
                        <NavLink to="/">
                            <button className="button logout_button" onClick={this.props.logout}>
                                <a href>Logout</a>
                            </button>
                        </NavLink>
                    </div>
                    <div className="books_buttons">
                        <div className="chart_box">
                            <NavLink to="/chart">
                                <button className="button chart_button">
                                    <a href>chart</a>
                                </button>
                            </NavLink>
                        </div>
                        <div className="myBooks_box">
                            <NavLink to="/mybooks">
                                <button className="button chart_button">
                                    <a href>my books</a>
                                </button>
                            </NavLink>
                        </div>
                        <div className="myBooks_box">
                            <NavLink to="/money">
                                <button className="button chart_button">
                                    <a href>Money</a>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </header>

                <section className="search_section">
                    <form className="store_form" onSubmit={this.handleSearchBook}>
                        <input
                            className="searchBook_input"
                            name="text"
                            type="text"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                        <button className="button submit_button searchBook_button" type="submit">Search</button>
                    </form>
                </section>

                <BooksList books={this.state.books} handleAddBookToChart={this.props.handleAddBookToChart}/>

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

/*
                <h1>Store</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>

*/