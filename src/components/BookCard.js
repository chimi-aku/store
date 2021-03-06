import React from 'react'

import Book from '../elements/Book'

const BookCard = props => {
    const {image, title, authors, published, price = 40 } = props;

    const addBookToChart = () => {
        // Create object of book to pass to function
        const newBookInChart = new Book(image, title, authors, published, price);
        props.handleAddBookToChart(newBookInChart);
    }

    return(
        <div className="book">
            <div className="bookcard_container">
                <img src={image} alt="book cover"/>
                <div className="bookcard_desc">
                    <h2 className="title">{title}</h2>
                    <h3 className="author">{authors}</h3>
                    <h3 className="published">Publish date: {published}</h3>
                    <h3 className="price">{`${price}PLN`}</h3>
                </div>
            </div>
            <button className="button add_to_chart_button" onClick={addBookToChart}>Add to chart</button>
        </div>
    )
}

export default BookCard;