import React from 'react';
import './styles/components/nav.scss';
import Link from './Link';

export default function Menu(props) {

    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <div>
            <button className={openMenu ? 'menu-button active' : 'menu-button' } onClick={() => setOpenMenu(!(openMenu))}>
                <span className='bar'></span>
            </button>
            <div className={openMenu ? 'menu active' : 'menu'}>
                <div className="menu-content-wrapper">
                    <Link location="/">Gemstones (Y2)</Link>
                    <Link location="/about">About Us</Link>
                    <Link location="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}