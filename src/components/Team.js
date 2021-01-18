import React from 'react';
import "./Team.css";
import team from './sae_team.jpeg';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Link } from "react-router-dom";


function Team() {
    return (
        <div className="Team">
            <div className="team-component">
                <img src={team} />
                <p spy={true}
                        smooth={true}
                        duration={700}
                        data-aos-delay="700"
                        data-aos={"fade-up"}><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <span>totam rem aperiam,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <span>voluptatem sequi nesciunt.</span></p>
                    <div className="hero-right" >
                    <h2>THE <br /><span>BLUE JAY</span> <br/> RACING TEAM</h2>
                </div>

            </div>   

            <Link to="/coreteam/">
                <div className="team-right" spy={true}
                        smooth={true}
                        duration={900}
                        data-aos-delay="900"
                        data-aos={"fade-down"}>
                    <h3>Meet the Core Team</h3>
                    <DoubleArrowIcon className="team-icon" />
                </div>
            </Link> 

            

        </div>
    )
}

export default Team
