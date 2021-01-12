import React from 'react';
import "./Team.css";
import team from './ttt.jpeg';


function Team() {
    return (
        <div className="Team">
            <div className="team-component">
                <img src={team} />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                <div className="hero-right">
                    <h2>THE <br /><span>BLUE JAY</span> <br/> RACING TEAM</h2>
                </div>

            </div>
            

            

        </div>
    )
}

export default Team
