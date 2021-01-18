import React from 'react';
import "./Contact.css";


var { SocialIcon } = require('react-social-icons');


function Contact() {
    return (
        <div className="Contact">
              <p >Designed and Developed with 💖 by <b>Spectrum Club CET-B</b></p>
            <div className="contact-main">
                <h5 spy={true}
                        smooth={true}
                        duration={500}
                        data-aos-delay="500"
                        data-aos={"fade-up"}>What's Next?</h5>
                <h1 spy={true}
                        smooth={true}
                        duration={700}
                        data-aos-delay="700"
                        data-aos={"fade-up"}>Get In Touch</h1>
                <p spy={true}
                        smooth={true}
                        duration={900}
                        data-aos-delay="900"
                        data-aos={"fade-up"}>
                    <span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <span>totam rem aperiam,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p>
                <div className="contact-button" spy={true}
                        smooth={true}
                        duration={1100}
                        data-aos-delay="1100"
                        data-aos={"fade-up"}>
                    <button>Say Hello !</button>
                </div>
                <div className="contact-social" spy={true}
                        smooth={true}
                        duration={1300}
                        data-aos-delay="1300"
                        data-aos={"fade-up"}>
                    <SocialIcon url="https://www.facebook.com/subhampreet.mohanty/" bgColor="#201f1f" fgColor="#777575" className="social-s" />
                    <SocialIcon url="https://www.instagram.com/_the.odist_" bgColor="#201f1f" fgColor="#777575" className="social-s" />
                    <SocialIcon url="http://linkedin.com/in/jaketrent" bgColor="#201f1f" fgColor="#777575" className="social-s" />
                    <SocialIcon url="https://discord.com/" bgColor="#201f1f" fgColor="#777575" className="social-s"  />
                    <SocialIcon url="https://mail.google.com/mail/" bgColor="#201f1f" fgColor="#777575" className="social-s" />

                </div>
            </div>

            
        </div>
    )
}

export default Contact
