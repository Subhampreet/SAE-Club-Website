import React from 'react';
import "./CoreTeam.css";
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
            {/* <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <span>architecto beatae</span> vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni <span>dolores eos qui</span> ratione voluptatem sequi nesciunt. </p> */}

            <div className="Team-wrapper">
                <img src={t4} />
                <img src={t2} />
                <img src={t1} />
                <img src={t3} />
                <img src={t8} />
                <img src={t7} />
                {/* <img src={t5} />
                <img src={t6} /> */}
            </div>
        </div>
    )
}

export default CoreTeam
