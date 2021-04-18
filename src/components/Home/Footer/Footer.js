import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterCol from '../FooterCol/FooterCol';
import { faFacebookF, faInstagram, faGooglePlusG, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const noNamed = [
    {name: "H#000(0th Floor), Road #00, Now DOSH, Mohakhali, Dhaka, Bangladesh"}
]
const ourAddress = [
    {name: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, accusantium."}
]
const oralHealth = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]
const services = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                        <FooterCol key={1} menuTitle={''} menuItems={noNamed}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </FooterCol>
                        <FooterCol key={2} menuTitle={'Company'} menuItems={services}></FooterCol>
                        <FooterCol key={3} menuTitle={'Quick Links'} menuItems={oralHealth}></FooterCol>
                        <FooterCol key={4} menuTitle={'About Us'} menuItems={ourAddress}>
                            <ul className="list-inline social-icon">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                            </ul>
                        </FooterCol>
                </div>

                <div className="copyRight text-white pt-5 text-center">
                        <p >Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;