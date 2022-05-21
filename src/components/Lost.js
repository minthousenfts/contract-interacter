import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import './styles/lost.css';

export default function Lost() {
    return (
        <div className="body-div body-404">
            <Header/>
            <div className="content-wrap lost-page">
                <span className="title">Oops, looks like this URL is invalid!</span>
                <h1 className='background-404'>404</h1>
            </div>
            <Footer/>
        </div>
    );
}