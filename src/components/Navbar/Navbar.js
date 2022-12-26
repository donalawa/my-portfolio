import React from "react";
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

export const Navbar = ({pageName}) => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.leftContainer}>
            {/* LEFT */}
            <div className={styles.nameContainer}>
              {/* name */}
              <h4>Awa Donacien</h4>
            </div>
            <div className={styles.linksContainer}>
              {/* Links */}
              <div className={styles.link}>
                <NavLink to="/" className={`${pageName == 'home' && styles.active}`}>hello()</NavLink>
              </div>
              <div className={styles.link}>
                <NavLink to="/about" className={`${pageName == 'about' && styles.active}`}>about-me()</NavLink>
              </div>
              <div className={styles.link}>
                <NavLink to="/projects"  className={`${pageName == 'projects' && styles.active}`}>projects()</NavLink>
              </div>
            </div>
        </div>
        <div>
          {/* RIGHT */}
          <div className={styles.linkContact}>
                <NavLink to="/contact" className={`${pageName == 'contact' && styles.active}`}>contact-me()</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};