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
                <Link to="/">
                <div className="mobile-link">
                    <span className="link">_hello</span>
                </div>
                </Link>
                <Link to="/about">
                <div className="mobile-link">
                    <span className="link">_about-me</span>
                </div>
                </Link>
                <Link to="/projects">
                <div className="mobile-link">
                    <span className="link">_projects</span>
                </div>
                </Link>
                <Link to="/contact">
                <div className="mobile-link">
                    <span className="link">_contact-me</span>
                </div>
                </Link>
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