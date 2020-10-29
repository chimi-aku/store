import React from 'react';

import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="book_list">
            {props.books.map((book, i) => {
                    return (
                        <BookCard
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                        />
                    );
                
            })}
        </div>
    );
};

export default BookList;

// Fix prices later and publishes
//price={book.saleInfo.listPrice.amount}
//published={book.volumeInfo.publishedDate.slice(0, 4)}