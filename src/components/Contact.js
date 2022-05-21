import React from 'react';
import './styles/contact.css';
import Header from './Header';
import Footer from './Footer';
import contact_us from '../assets/contact_us.jpg';

export default function Contact() {
    return (
        <>
            <Header/>
            <div className='contact-page'>
                <h1>Contact Us</h1>
                <img alt="decor" className="contact-us-img" src={contact_us} />
                <p>
                    Malt, Grain & Cane Pte. Ltd.<br/>
                    Singapore<br/>
                    <br/>
                    Drop us an email @ Info@MaltGrainCane.com<br/>
                    <br/>
                    We accept snail mail @ the following address:<br/>
                    <br/>
                    Malt, Grain & Cane Pte. Ltd.<br/>
                    <br/>
                    160 Robinson Road , #14-04 Singapore Business Federation Centre <br/>
                    <br/>
                    Singapore 068914<br/>
                </p>
            </div>
            <Footer/>
        </>
    )
}