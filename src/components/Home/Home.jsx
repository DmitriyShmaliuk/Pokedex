import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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