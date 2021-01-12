import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <div className="Nav">
            <ul className="Nav-list">
                <li className="active"><a>HOME</a></li>
                <li><a>ABOUT</a></li>
                <li><a>ACHIEVEMENTS</a></li>
                <li><a>TEAM</a></li>
                <li><a>CONTACT</a></li>
                <div className="nav-hr"></div>
            </ul>
        </div>
    )
}

export default Nav
