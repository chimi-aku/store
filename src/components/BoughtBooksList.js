import React from 'react';

import BoughtBookCard from "./BoughtBookCard";

const BoughtBooksList = (props) => {
    console.log(props.boughtBooks);

    return (
        <div className="chart_list">
            {props.boughtBooks.map((book, i) => {
                //console.log(book)

                return(
                    <BoughtBookCard
                        key={i}
                        image={book.image}
                        title={book.title}
                        authors={book.authors}
                        published={book.published}
                    />
                )
            })}
        </div>
    );
};

export default BoughtBooksList;