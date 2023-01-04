import styles from './Landing.module.css';
import { useContext, useEffect, useState } from 'react';
import NavContext from '../../context/NavContext';
import 'animate.css'
import { useSelector } from 'react-redux';
import Board from '../../components/chess/Board';

const Landing = () => {
    const {navOpen, setNavOpen} = useContext(NavContext);
    const state = useSelector(state  => state.contact);
    const [contact, setContact] = useState();

    useEffect(() => {
        setNavOpen(false);
    },[]);

    useEffect(() => {
        // console.log('IN Home', state)
        // setContact(state.contactInfo);
        // console.log('contact', contact)
        setContact(state.contactInfo)
    }, [state])
    
    return (
        <>
           <div className={styles.content}>
                <h1 className={`${styles.title} animate__animated animate__tada`}>Hi Friend!</h1>
                <div className={styles.homeMain}>
                    <div className={styles.left}>
                        <p className={`${styles.hiText} animate__animated animate__swing`}>I am</p>
                        <h1 className={`${styles.name} animate__animated animate__fadeInLeft`}>Awa Donacien()</h1>
                        <p className={styles.infoTitle}>Full-Stack Web and Mobile developer </p>
                        <p className={styles.infoComment}>// I am a creative and passionate developer</p>
                        <p className={styles.infoComment}>// I love working with different technologies</p>
                        <p className={styles.infoComment}>// Have fun()</p>
                        <a href="#"  target="_blank" className={`${styles.varLink} animate__animated animate__heartBeat`}>
                            <span style={{color: '#4D5BCE'}}>const</span>
                            <span style={{color: '#43D9AD'}}>githubLink</span>
                            <span style={{color: '#fff'}}>=</span>
                            <a href="https://github.com/donalawa" target="_blank" style={{color: '#C98BDF',  fontSize:  '19px',  textDecoration: 'none'}}>“https://github.com/donalawa”</a>
                        </a>
                        <br />
                        <button className={`${styles.cvButton} animate__animated animate__swing`}><a href="https://docs.google.com/document/d/1MCK2jI02Vy2uO8nlBQjgVPmCG-JRFt50BB4rOOME3Mg/edit?usp=sharing" className={styles.link} target="_blank">Download My Cv</a></button>
                    </div>
                    <div className={styles.right}>
                    <Board />
                        {/* <div className={styles.bgImage}>
                            
                        </div> */}
                        {/* <div className={styles.gameContainer}>
                            <div className={styles.top}>
                                <span>x</span>
                                <span>x</span>
                            </div>
                            <div className={styles.center}>
                                <div className={styles.gameScreen}>
                                </div>
                                <div className={styles.buttonStartContainer}>
                                    <button className={styles.buttonStart}>start-game</button>
                                    <button className={styles.buttonSkip}>Skip</button>
                                </div>
                               
                                <div className={styles.gameInfo}>
                                    <div className={styles.gameInfoLeft}>
                                        <p className={styles.gameInfoComment}>// Your almost done</p>
                                        <div className={styles.foodsContainer}>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                            <div className={styles.food}></div>
                                        </div>
                                    </div>
                                    <div className={styles.gameInfoRight}>
                                        <div className={styles.controlsContainer}>
                                            <p className={styles.gameInfoComment}>// use keyboard</p>
                                            <p className={styles.gameInfoComment}>// arrows to play</p>
                                            <div className={styles.buttonsContainer}>
                                                <button className={styles.button}>
                                                    <img src={require('../../images/up.png')}/>
                                                </button>
                                                <div className={styles.bottomControls}> 
                                                    <button className={styles.button}>
                                                        <img src={require('../../images/left.png')}/>
                                                    </button>
                                                    <button className={styles.button}>
                                                        <img src={require('../../images/down.png')}/>
                                                    </button>
                                                    <button className={styles.button}>
                                                        <img src={require('../../images/right.png')}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <span>x</span>
                                <span>x</span>
                            </div>
                        </div>
                         */}
                        <p className={styles.bottomComment}>// i enjoy playing chess during my free time</p>
                    </div>
                </div>
           </div>
        </> 
    )
}


export default Landing;