import React, { useState } from 'react';
import "./About.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ttt from './ttt.jpeg';
import SAE_LOGO from './SAE_LOGO.png';
import main from './main.jpg';
import { Link } from 'react-router-dom';

function About() {

    return (
        <div className = "About">
            <div className = "dots">
                <Link to = '/about'><i class="fas fa-circle"></i></Link><br/>
                <Link to = '/more-about-us'><i class="fas fa-circle"></i></Link><br/>
                <Link to = '/founder'><i class="fas fa-circle"></i></Link>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            <div className="about-right">
                <h2>THE <br /><span>BLUE JAY</span> <br/> RACING TEAM</h2>
            </div>
        </div>
    )
}

export default About
