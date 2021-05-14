import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/errorPage.css';

const errorPage = () => {
    return (
        <div>
            <body className="humor">
                :(
            </body>
            <body className="errorContent">
                404 Page Not Found
            </body>
            <body className="errorBody">
                Pardon our dust. That page does not exist...
            </body>
            <body className="homeLink_content">
                <Link to="/" title="Go to the homepage" className="homeLink">
                    Click here to return to the home page
                </Link>
            </body>
        </div>
    );
}

export default errorPage;