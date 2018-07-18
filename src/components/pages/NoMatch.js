import React from 'react';
import {Helmet} from 'react-helmet';


export default function NoMatch() {
    return (
        <div className="not-found-page">
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <header>
                <h3>
                    Page not found
                </h3>
            </header>
            <p>Page not found</p>
        </div>
    );
}
