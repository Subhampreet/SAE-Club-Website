import React from 'react';
import "./About.css";
import about1 from "./about1.jpeg";
import { Link } from "react-router-dom";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import tyre from "./tyre.png";

function About() {
    return (
        <div className="About">
            <img src={tyre} className="tyre" />
            <div className="about-content">
                <div className="about-left">
                    <h2>ABOUT <span>US</span></h2>
                    <hr />
                    <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <span>totam rem aperiam,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni <br /><br />Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, voluptas sit aspernatur aut odit aut fugit,  <span>voluptatem sequi nesciunt.</span>
                    <br /><br />
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <span>voluptatem sequi nesciunt.</span>
                    </p>
                </div>
                
                <img src={about1} />
            </div>

            <Link to="/founder/">
                <div className="team-r">
                    <h3>meet our founders</h3>
                    <DoubleArrowIcon className="team-i" />
                </div>
            </Link>

            <a><PlayCircleOutlineIcon className="play-video" /></a>            
        </div>
    )
}

export default About
