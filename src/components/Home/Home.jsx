import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './style.css';

export default function Home ({children})
{
    return(
        <div className = "app">
            <Header />
              <div className = "body">
                    {children}
              </div>
            <Footer />
        </div>
    );
}