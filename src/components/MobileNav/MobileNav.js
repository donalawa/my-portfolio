import React, { useState, useContext, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import NavContext from '../../context/NavContext';
import { AiFillGithub  } from  'react-icons/ai';
import { useSelector } from 'react-redux';

import './MobileNav.css';

function MobileNav(props) {
    const {navOpen, setNavOpen} = useContext(NavContext);
    const state = useSelector(state  => state.contact);
    const [contact, setContact] = useState();

    const toggleNav = () => {
        setNavOpen(!navOpen);
    }


    useEffect(() => {
        // console.log('IN Home', state)
        // setContact(state.contactInfo);
        // console.log('contact', contact)
        setContact(state.contactInfo)
    }, [state])

    
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
                        <a href={contact?.social?.twitter} target="_blank">
                            <FaTwitter size={20} color="#607B96"/>
                        </a>
                        </div>
                        <div className="mobile-nav-icon">
                         <a href={contact?.social?.github} target="_blank">
                                <AiFillGithub size={20} color="#607B96" />
                            </a>
                        </div>
                        <div className="mobile-nav-icon">
                        <a href={contact?.social?.linkedin} target="_blank">
                            <FaLinkedin size={20} color="#607B96"/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;