import React, { useContext, useEffect } from 'react';
import FolderParent from '../../components/FolderParent/FolderParent';
import IconFolder from '../../components/IconFolder/IconFolder';
import ContactItem from '../../components/ContactItem/ContactItem';
import TextInput from '../../components/TextInput/TextInput';
import MessageBox from '../../components/MessageBox/MessageBox';
import Button from '../../components/Button/Button';
import './Contact.css'
import NavContext from '../../context/NavContext';

function Contact(props) {
    const {navOpen, setNavOpen} = useContext(NavContext);
    
    useEffect(() => {
        setNavOpen(false);
    }, [])
    
    return (
        <div className="about-container">
            <div className="sm-bar">
                {/* small sidebar */}
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon1.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon2.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon3.png')}/>
            </div>
            <div className="    width: 100%;">
                <FolderParent text="contact-me" open={true}>
                    <ContactItem type="email" text="awadonacien12@gmail.com"/>
                    <ContactItem type="phone" text="+237 651346786"/>
                </FolderParent>
                <FolderParent text="find-me-also-in" open={true}>
                    <ContactItem type="link" text="Github"/>
                    <ContactItem type="link" text="Twitter"/>
                    <ContactItem type="link" text="LinkedIn"/>
                </FolderParent>
            </div>
            <div className="main-sec">
                {/* Main sec */}
                <div  className="main-top-bar">
                    <div className="file-container">
                        <p className='file-name'> contact-me</p>
                        <img style={{ width: '10px',  height:  '10px'}} src={require('../../images/icons/close.png')}/>
                    </div>
                </div>
               
                <div className="main-contact">
                    <div className="contact-left">
                        <TextInput placeholder="Enter name" label="_name:" />
                        <TextInput placeholder="Enter email" label="_email:"/>
                        <MessageBox />
                        <Button text="submit-message"/>
                    </div>
                    <div className="contact-right">
                        <p>
                            <span className="line-number">1 </span>
                            <span className="data-type">const </span>
                            <span className="var-name">button </span>
                            <span className="operator">= </span>
                            <span className="methods">document.querySelector<span className="brace">(<span className="value">'#sendBtn'</span><span className="brace">);</span></span></span>
                        </p>
                        <p>
                            <span className="line-number">2 </span>
                        </p>
                        <p>
                            <span className="line-number">3 </span>
                            <span className="data-type">const </span>
                            <span className="var-name">message </span>
                            <span className="operator">= </span>
                            <span className="brace">{`${'{'}`}</span>
                        </p>
                        <p>
                            <span className="line-number">4 </span>
                            <span className="var-name">&nbsp;name<span className="brace">: </span></span>
                            <span className="value">"Awa Donacien"</span>
                            <span className="brace">,</span>
                        </p>
                        <p>
                            <span className="line-number">5 </span>
                            <span className="var-name">&nbsp;email<span className="brace">: </span></span>
                            <span className="value">"awadonalcien12@gmail.com"</span>
                            <span className="brace">,</span>
                        </p>
                        <p>
                            <span className="line-number">6 </span>
                            <span className="var-name">&nbsp;message<span className="brace">: </span></span>
                            <span className="value">"Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium."</span>
                            <span className="brace">,</span>
                        </p>

                        <p>
                            <span className="line-number">7 </span>
                            <span className="var-name">&nbsp;date<span className="brace">: </span></span>
                            <span className="value">"Tue 26 Dec"</span>
                            <span className="brace">,</span>
                        </p>
                        <p>
                            <span className="line-number">9 &nbsp;&nbsp;</span>

                            <span className="brace">{`${'}'}`}</span>
                        </p>
                        <br/>
                        <p>
                            <span className="line-number">10 </span>
                            <span className="methods">button.addEventListener<span className="brace">(<span className="value">'click'</span><span className="brace">,</span></span></span>
                            <span className="brace"> ()</span>
                            <span className="data-type">{`${' => '}`}</span>
                            <span className="brace">{`${'{'}`}</span>
                        </p>
                        <p>
                            <span className="line-number">11 &nbsp;&nbsp;</span>

                            <span className="methods">form.send<span className="brace">(<span className="methods">message</span><span className="brace">);</span></span></span>
                        </p>
                        <p>
                            <span className="line-number">12 &nbsp;</span>

                            <span className="brace">{`${'});'}`}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm-right">
                {/* ssmall ride */}
                <div className='box'></div>
            </div>
        </div>
    );
}

export default Contact;