import React from 'react';
import "./Ach.css";
import ac from "./founder.jpeg";
import AchCard from "./AchCard";

function Ach() {
    return (
        <div className="Ach">
            <img src={ac} />
            {/* <p><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <span>totam rem aperiam,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <span>voluptatem sequi nesciunt.</span></p> */}

            <div className="cards">
                <AchCard />       
                <AchCard />                
                <AchCard />                
                <AchCard />                
                <AchCard />                
                <AchCard />                
         
            </div>
        </div>
    )
}

export default Ach
