import React from 'react';

import ChartBookCard from "./ChartBookCard";

const ChartList = (props) => {
    console.log(props.bookChart);

    return (
        <div className="chart_list">
            {props.bookChart.map((book, i) => {
                //console.log(book)

                return(
                    <p>Book</p>
                )
            })}
        </div>
    );
};

export default ChartList;