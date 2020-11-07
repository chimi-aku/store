import React from 'react';
import { NavLink } from 'react-router-dom';

import BoughtBooksList from './BoughtBooksList'

const MyBooksPage = (props) => {
    return (
        <div className="myBooks_page">
            <header className="chart_header">
                <NavLink to="/store">
                    <button className="button chart_button">
                        <a href>Back</a>{' '}
                        {/* if i write hre="true" warning disappear, but text looks like a hyperlink */}
                    </button>
                </NavLink>
            </header>
            <BoughtBooksList boughtBooks={props.boughtBooks}/>
        </div>
    );
};

export default MyBooksPage;
