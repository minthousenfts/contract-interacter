import React from 'react';
// import components 
import Menu from "./Menu";
// import images 
import mgc_logo from "../assets/mgc_logo.png";
// import styles 
import "./styles/components/header.css";

export default function Header() {
    return (
        <div className="header-wrap">
            <img alt="MGC logo" className="logo" src={mgc_logo} />
            <Menu/>
        </div>
    )
}