import React, {useEffect} from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

import AOS from "aos";
import "aos/dist/aos.css";


function Nav() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return (
        <div className="Nav">
            <ul className="Nav-list"  >
                <NavLink to="/" label="HOME" activeOnlyWhenExact={true} />
                <NavLink to="/about/" label="ABOUT" activeOnlyWhenExact={true} />
                <NavLink to="/achievement/" label="ACHIEVEMENTS" activeOnlyWhenExact={true} />
                <NavLink activeOnlyWhenExact={true} to="/team/" label="TEAM"/>
                <NavLink activeOnlyWhenExact={true} to="/contact/" label="CONTACT"/>
                <div className="nav-hr"></div>
            </ul>
        </div>
    )
}

export default Nav
