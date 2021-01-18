import React from 'react';
import "./Founder.css";
import { Link } from "react-router-dom";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import f1 from "./f1.png";
import f2 from "./f2.png";
import f3 from "./founder.jpeg";

function Founder() {
    return (
        <div className="Founder">



            <h1>KNOW OUR <span>FOUNDERS</span></h1>
            <h5>It is not the beauty of a building you should look at; its the construction of the foundation that will stand the test of time.</h5>
            <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  <span>architecto beatae</span> vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni <span>dolores eos qui</span> ratione voluptatem sequi nesciunt. </p>

            <div className="founder-wrapper">
                <div className="founder">
                    <img src={f1} />
                    <h3>LATE MR. VISWA RANJAN PATI</h3>
                </div>
                <div className="founder">
                    <img src={f2} />
                    <h3>MR. NITIN SHASHI AGARWAL</h3>
                </div>
            </div>


            <Link to="/about/">
                <div className="team-r">
                    <h3>back to about section</h3>
                    <DoubleArrowIcon className="team-i" />
                </div>
            </Link>
            
        </div>
    )
}

export default Founder
