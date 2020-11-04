import React from 'react'


const ChartBookCard = props => {
    const {image, title, authors, published, price = 40 } = props;


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
            <button className="button remove_from_chart_button" onClick={props.removeBookFromChart}>Remove from chart</button>
        </div>
    )
}

export default ChartBookCard;