import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <h2 className="logo-name">SAE CET-B</h2>
                {/* <hr /> */}
            </div>
            
            <img src="./SAE_LOGO.png" className="logo-img" />
        </div>
    )
}

export default Header
