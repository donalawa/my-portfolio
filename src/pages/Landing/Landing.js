import styles from './Landing.module.css';
import { useContext, useEffect } from 'react';
import NavContext from '../../context/NavContext';

const Landing = () => {
    const {navOpen, setNavOpen} = useContext(NavContext);
    
    useEffect(() => {
        setNavOpen(false);
    }, [])
    return (
        <>
           <div className={styles.content}>
                <h1 className={styles.title}>Hi Friend!</h1>
                <div className={styles.homeMain}>
                    <div className={styles.left}>
                        <p className={styles.hiText}>I am</p>
                        <h1 className={styles.name}>Awa Donacien()</h1>
                        <p className={styles.infoTitle}>Full-Stack Web and Mobile developer </p>
                        <p className={styles.infoComment}>// complete the challange to see my fav code snippet</p>
                        <p className={styles.infoComment}>// Have fun()</p>
                        <div className={styles.varLink}>
                            <span style={{color: '#4D5BCE'}}>const</span>
                            <span style={{color: '#43D9AD'}}>githubLink</span>
                            <span style={{color: '#fff'}}>=</span>
                            <span style={{color: '#C98BDF'}}>“https://github.com/example/url”</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.bgImage}>
                            
                        </div>
                        <div className={styles.gameContainer}>
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
                        <p className={styles.bottomComment}>// i am a creative and passionate developer</p>
                    </div>
                </div>
           </div>
        </> 
    )
}


export default Landing;