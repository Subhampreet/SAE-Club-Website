import React from 'react'
import "./Header.css";
import SAE_LOGO from './SAE_LOGO.png';

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <h2 className="logo-name">SAE CET-B</h2>
                {/* <hr /> */}
            </div>
            
            <img src= { SAE_LOGO } className="logo-img" alt = "SAE Logo"/>
        </div>
    )
}

export default Header
