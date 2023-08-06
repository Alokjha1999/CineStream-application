import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms & Conditins</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About Us</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
            
                
                    <h4>Created by Alok Technology</h4>
                    <p>© 2023 Alok
                      All rights reserved.</p>
                </div>
                <div className="socialIcons">
                <a href="https://www.facebook.com/alokkashyap1828" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    </a>
                    <a href="https://instagram.com/aloktechnology?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    <a href="https://twitter.com/aloktech2023?t=Nn8HU1aNR_IKmda9G3gGsA&s=09" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/in/ak28" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                        <FaLinkedin />
                        
                    </span>
                    </a>

                    <a href="https://github.com/Alokjha1999" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                        <FaGithub /> 
                        </span>
                        </a>
                        
                </div>

                
            </ContentWrapper>
        </footer>
        
        
    );
};

export default Footer;
