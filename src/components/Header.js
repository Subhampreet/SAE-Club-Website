import React, {useEffect} from 'react'
import "./Header.css";
import SAE_LOGO from './SAE_LOGO.png';
import { Link } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";

function Header() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    

    return (
        <div className="Header">
            <Link to="/" className="link" spy={true}
            smooth={true}
            duration={600}
            data-aos-delay="300"
            data-aos={"fade-down"}>
                <div className="logo">
                    <h2 className="logo-name">SAE CET-B</h2>
                    <hr />
                </div>
            </Link>
            
            <img src= { SAE_LOGO } className="logo-img" alt = "SAE Logo" spy={true}
          smooth={true}
          duration={650}
          data-aos-delay="500"
          data-aos={"fade-down"} />
        </div>
    )
}

export default Header
