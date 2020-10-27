import React from 'react'

const BookCard = props => {
    const {image, title, authors, published, price } = props;

    return(
        <div className="book">
            <div className="card_container">
                <img src={image} alt="book cover"/>
                <div className="desc">
                    <h2 className="title">{title}</h2>
                    <h3 className="author">{authors[0]}</h3>
                    <h3 className="published">{published}</h3>
                    <h3 className="price">{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default BookCard;