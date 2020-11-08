import React from 'react';

import ChartBookCard from "./ChartBookCard";

const ChartList = (props) => {
    console.log(props.bookChart);

    return (
        <div className="chart_list">
            {props.bookChart.map((book, i) => {
                //console.log(book)


                return(
                    <ChartBookCard
                        key={i}
                        image={book.image}
                        title={book.title}
                        authors={book.authors}
                        published={book.published}
                        price={book.price}
                        removeBookFromChart={props.handleRemoveBookFromChart}
                    />
                )
            })}
        </div>
    );
};

export default ChartList;