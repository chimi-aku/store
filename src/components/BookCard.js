import React from 'react'


class Book {
    constructor(image, title, authors, published=2000, price = 0) {
        this.image = image;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.price = price;
    }
}



const BookCard = props => {
    const {image, title, authors, published=2000, price = 0 } = props;

    const addBookToChart = () => {
        // Create object of book to pass to function
        const newBookInChart = new Book(image, title, authors, published, price);
        props.handleAddBookToChart(newBookInChart);
    }

    return(
        <div className="book">
            <div className="card_container">
                <img src={image} alt="book cover"/>
                <div className="desc">
                    <h2 className="title">{title}</h2>
                    <h3 className="author">{authors}</h3>
                    <h3 className="published">{published}</h3>
                    <h3 className="price">{`${price}PLN`}</h3>
                </div>
            </div>
            <button onClick={addBookToChart}>Add to chart</button>
        </div>
    )
}

export default BookCard;