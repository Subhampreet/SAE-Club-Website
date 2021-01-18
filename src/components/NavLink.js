import React, {useEffect} from 'react';
import "./Nav.css";
import {
    Link,
    useRouteMatch,
  } from "react-router-dom";

  import AOS from "aos";
  import "aos/dist/aos.css";

function NavLink({label, to, activeOnlyWhenExact}) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });
    return (
        <div spy={true}
        smooth={true}
        duration={550}
        data-aos-delay="500"
        data-aos={"fade-right"}>
            <li className="nav-element"><Link to={to} className={match ? "active" : "inactive"}>{label}</Link></li>
        </div>
    )
}

export default NavLink
