import React from 'react'
import "./Header.css";
import SAE_LOGO from './SAE_LOGO.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <Link to="/" className="link">
                <div className="logo">
                    <h2 className="logo-name">SAE CET-B</h2>
                    {/* <hr /> */}
                </div>
            </Link>
            
            <img src= { SAE_LOGO } className="logo-img" alt = "SAE Logo"/>
        </div>
    )
}

export default Header
