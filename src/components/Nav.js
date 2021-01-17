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
            <ul className="Nav-list"  spy={true}
          smooth={true}
          duration={650}
          data-aos-delay="300"
          data-aos={"fade-right"}>
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
