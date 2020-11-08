import React from 'react';

import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="book_list">
            {props.books.map((book, i) => {
                //console.log(book.volumeInfo);

                // VALIDATE DATA

                let publishedDate;
                book.volumeInfo.publishedDate === undefined
                    ? (publishedDate = '-')
                    : (publishedDate = book.volumeInfo.publishedDate.slice(
                          0,
                          4
                      ));

                let price;
                book.saleInfo.listPrice.amount === undefined
                    ? (price = '-')
                    : (price = book.saleInfo.listPrice.amount);

                return (
                    <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        published={publishedDate}
                        price={price}
                        handleAddBookToChart={props.handleAddBookToChart}
                    />
                );
            })}
        </div>
    );
};

export default BookList;

// Fix prices later and publishes
/*
price={book.saleInfo.listPrice.amount}
let price;
book.saleInfo.listPrice.amount === undefined ? price = '-' : price = book.saleInfo.listPrice.amount;

published={book.volumeInfo.publishedDate.slice(0, 4)}

*/
