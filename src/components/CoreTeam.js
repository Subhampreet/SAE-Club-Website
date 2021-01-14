import React from 'react';
import "./CoreTeam.css";
import { Link } from "react-router-dom";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import t1 from './T1.png';
import t2 from './T2.png';
import t3 from './T3.png';
import t4 from './T4.png';
import t7 from './T7.png';
import t5 from './T5.png';
import t6 from './T6.png';
import t8 from './T8.png';



function CoreTeam() {
    return (
        <div className="CoreTeam">
            <h1>MEET OUR <span>CORE TEAM</span></h1>
            <h5>Talent wins games, but teamwork and intelligence win championships.</h5>
            <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <span>architecto beatae</span> vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni <span>dolores eos qui</span> ratione voluptatem sequi nesciunt. </p>


            <div className="Team-wrapper">
                <img src={t4} className="t4"/>            
                <img src={t2} className="t2"/>
                <img src={t1} className="t1"/>
                <img src={t3} className="t3"/>
                <img src={t8} className="t8"/>
                <img src={t7} className="t7"/>
                <img src={t6} className="t6"/>
                <img src={t5} className="t5"/>
                {/* <img src={t5} />
                <img src={t6} /> */}
            </div>
            <div className="team-detail">
                <div className="team-member">
                    <h3>Sonu Samantaray</h3>
                    <h4>Technical Head</h4>
                </div>
                <div className="team-member">
                    <h3>Saswat Panda</h3>
                    <h4>Co-Convenor</h4>
                </div>
                <div className="team-member">
                    <h3>Ankrit Rout</h3>
                    <h4>Convenor</h4>
                </div>
                <div className="team-member">
                    <h3>Aniket Sohan Bisoi</h3>
                    <h4>Innovation Cell</h4>
                </div>
                <div className="team-member">
                    <h3>Prachurya </h3>
                    <h4>Finance and Social Media Head</h4>
                </div>
                <div className="team-member">
                    <h3>Sarthak Kar</h3>
                    <h4>Innovation Cell</h4>
                </div>
                <div className="team-member">
                    <h3>Pratik Panda</h3>
                    <h4>Procurement Head</h4>
                </div>
                <div className="team-member">
                    <h3>Smitraj Dixit</h3>
                    <h4>Innovation Cell</h4>
                </div>
            </div>

            <Link to="/team/">
                <div className="team-r">
                    <h3>back to team section</h3>
                    <DoubleArrowIcon className="team-i" />
                </div>
            </Link> 
        </div>
    )
}

export default CoreTeam
