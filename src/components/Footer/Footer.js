import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.leftContainer}>
                    {/* LEFT */}
                    <div className={styles.social}>
                        {/* name */}
                        <h4>Social: </h4>
                    </div>
                    <div className={styles.linksContainer}>
                        {/* Links */}
                        <div className={styles.link}>
                            <a href="#">F</a>
                        </div>
                        <div className={styles.link}>
                            <a href="#">T</a>
                        </div>
                    </div>
                </div>
                <div>
                {/* RIGHT */}
                <div className={styles.linkGithub}>
                    <a href="#">@donalawa</a>
                </div>
            </div>
        </nav>
        </>
    )
}