import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';

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
                            <a href="#">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className={styles.link}>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </div>
                        <div className={styles.link}>
                            <a href="#">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                {/* RIGHT */}
                <div className={styles.linkGithub}>
                    <a href="#">@donalawa <FaGithub color='#fff'/></a>
                </div>
            </div>
        </nav>
        </>
    )
}