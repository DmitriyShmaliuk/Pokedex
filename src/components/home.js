import React from 'react';
import PropTypes from "prop-types";
import Header from './header';
import Footer from './footer';

export default function Home ({children})
{
    return(
        <div className = "app">
            <Header />
              <div>
                    {children}
              </div>
            <Footer />
        </div>
    );
}

//валидация состояний
Home.PropTypes = {
    children: PropTypes.object
}