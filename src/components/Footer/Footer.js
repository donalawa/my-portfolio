import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import { AiFillGithub  } from  'react-icons/ai';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Footer = () => {
    const state = useSelector(state  => state.contact);
    const [contact, setContact] = useState();


    useEffect(() => {
        // console.log('IN Footer', state)
        // setContact(state.contactInfo);
        // console.log('contact', contact)
        setContact(state.contactInfo)
    }, [state])
    
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
                            <a href={contact?.social?.linkedin} target="_blank">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className={styles.link}>
                            <a href={contact?.social?.twitter} target="_blank">
                                <FaTwitter />
                            </a>
                        </div>
                        <div className={styles.link}>
                            <a href={contact?.social?.github} target="_blank">
                                <AiFillGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                {/* RIGHT */}
                <div className={styles.linkGithub}>
                    <a href={contact?.social?.github} target="_blank">@donalawa <FaGithub color='#fff'/></a>
                </div>
            </div>
        </nav>
        </>
    )
}