import React from 'react';
import "./AchCard.css";

function AchCard() {
    return (
        <div className="Card" spy={true}
        smooth={true}
        duration={700}
        data-aos-delay="700"
        data-aos={"fade-up"}>
            <div className="card-top" spy={true}
                        smooth={true}
                        duration={900}
                        data-aos-delay="900"
                        data-aos={"fade-up"}>
                        <h2>BAJA 2020</h2>
                        <h2 className="h2">#001</h2>
            </div>
            <p spy={true}
                        smooth={true}
                        duration={1000}
                        data-aos-delay="1000"
                        data-aos={"fade-up"}><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium <span>totam rem aperiam,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
    )
}

export default AchCard
