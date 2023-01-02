import React, { useState, useContext  } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import NavContext from '../../context/NavContext';

import './MobileNav.css';

function MobileNav(props) {
    const {navOpen, setNavOpen} = useContext(NavContext);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    }

    return (
        <div className={`mobile-nav ${navOpen ? 'open' : ''}`}>
            <div className="top-nav">
                <div>
                    <p className="mobile-name">Awa Donacien()</p>
                </div>
                <button className="nav-button" onClick={toggleNav}>
                    <img className="nav-close" src={require('../../images/icons/navclose.png')}/>
                    <img className="nav-open" src={require('../../images/icons/navicon.png')}/>
                </button>
            </div>
            <div className="mobile-nav-content">
                <div className="mobile-link">
                    <Link to="/" className="link">_hello</Link>
                </div>
                <div className="mobile-link">
                    <Link to="/about" className="link">_about-me</Link>
                </div>
                <div className="mobile-link">
                    <Link to="/projects" className="link">_projects</Link>
                </div>
                <div className="mobile-link">
                    <Link to="/contact" className="link">_contact-me</Link>
                </div>
                <div className="mobile-footer">
                    <p className="social-link">Social: </p>
                    <div  className="mobile-nav-icons">
                        <div className="mobile-nav-icon">
                            <FaTwitter size={20} color="#607B96"/>
                        </div>
                        <div className="mobile-nav-icon">
                            <FaFacebook size={20} color="#607B96"/>
                        </div>
                        <div className="mobile-nav-icon">
                            <FaLinkedin size={20} color="#607B96"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;