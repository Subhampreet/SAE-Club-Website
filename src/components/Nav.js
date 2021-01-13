import React from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";


function Nav() {
    
    return (
        <div className="Nav">
            <ul className="Nav-list">
                <NavLink to="/" label="HOME" activeOnlyWhenExact={true} />
                <NavLink to="/about/" label="ABOUT" activeOnlyWhenExact={true} />
                <li><a>ACHIEVEMENTS</a></li>
                <NavLink activeOnlyWhenExact={true} to="/team/" label="TEAM"/>
                <li><a>CONTACT</a></li>
                <div className="nav-hr"></div>
            </ul>
        </div>
    )
}

export default Nav
