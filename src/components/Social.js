import React from 'react';
import "./Social.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Social() {
    return (
        <div className="Social">
            <hr />
            <a><FacebookIcon className="social-icon" /></a>
            <a><InstagramIcon className="social-icon" /></a>
            <a><LinkedInIcon className="social-icon" /></a>
            <a><MailOutlineIcon className="social-icon" /></a>
        </div>
    )
}

export default Social
