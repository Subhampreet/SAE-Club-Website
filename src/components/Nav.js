import React from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <div className="Nav">
            <ul className="Nav-list">
                <Link to="/" className="nav-element">
                    <li className="active"><a>HOME</a></li>
                </Link>
                <Link to="/about/" className="nav-element">
                    <li><a>ABOUT</a></li>
                </Link>                
                <li><a>ACHIEVEMENTS</a></li>
                <Link to="/team/" className="nav-element">
                    <li><a>TEAM</a></li>
                </Link>
                <li><a>CONTACT</a></li>
                <div className="nav-hr"></div>
            </ul>
        </div>
    )
}

export default Nav
