import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/about.css';
import mgc from '../assets/mgc.png';

export default function About() {
    return (
        <>
        <Header/>
        <div className='about-wrapper'>
            <h1>About MaltGrainCane.Club</h1>
            <div className='about-content'>
                <img src={mgc} alt="mgc"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}