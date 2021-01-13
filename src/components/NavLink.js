import React from 'react';
import "./Nav.css";
import {
    Link,
    useRouteMatch,
  } from "react-router-dom";

function NavLink({label, to, activeOnlyWhenExact}) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });
    return (
        <div>
            <li className="nav-element"><Link to={to} className={match ? "active" : "inactive"}>{label}</Link></li>
        </div>
    )
}

export default NavLink
