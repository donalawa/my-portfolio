import React from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
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
                <a href="#" className={styles.active}>hello()</a>
              </div>
              <div className={styles.link}>
                <a href="#">about-me()</a>
              </div>
              <div className={styles.link}>
                <a href="#">projects()</a>
              </div>
            </div>
        </div>
        <div>
          {/* RIGHT */}
          <div className={styles.linkContact}>
                <a href="#">contact-me()</a>
          </div>
        </div>
      </nav>
    </>
  );
};