import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import FolderParent from '../../components/FolderParent/FolderParent';
import IconFolder from '../../components/IconFolder/IconFolder';
import ContactItem from '../../components/ContactItem/ContactItem';
import TextInput from '../../components/TextInput/TextInput';
import MessageBox from '../../components/MessageBox/MessageBox';
import Button from '../../components/Button/Button';
import './Contact.css'
import NavContext from '../../context/NavContext';
import { addContactInfo } from '../../services';

import { ToastContainer, toast } from 'react-toastify';

function Contact(props) {
    const {navOpen, setNavOpen} = useContext(NavContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('');
    const [sending, setSending] = useState(false);

    const state = useSelector(state  => state.contact);
    const [contact, setContact] = useState();

    const sendMessage = () => {
        let data = {
            name: name,
            email: email,
            message: message,
            date: date
        }

        // CALL BACKEND SEVEICE AND SEND DATA AND SHOW  THANKS PAGE
        // console.log(data);
        setSending(true);
        addContactInfo(data).then(res => {
            // console.log('GOOD');
            setName('');
            setEmail('');
            setMessage('');
            setSending(false);
            toast.success("Submitted Successfuly", {
                pauseOnHover: false,
                closeOnClick: true,
              })
        }).catch(err => {
            console.log('ERROR');
            console.log(err);
        })
    }

    useEffect(() => {
        setNavOpen(false);
        let ourdate = moment().format("MMM Do YY");
        setDate(ourdate)
        // Get  date  withmoment and  update date state
    }, [])

    useEffect(() => {
        // console.log('IN Contact', state)
        // setContact(state.contactInfo);
        // console.log('contact', contact)
        setContact(state.contactInfo)
    }, [state])
    
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
                    <ContactItem type="email" value={contact?.email} text={contact?.email}/>
                    <ContactItem type="phone" value="#" text={contact?.phone}/>
                </FolderParent>
                <FolderParent text="find-me-also-in" open={true}>
                    <ContactItem type="link" value={contact?.social?.github} text="Github"/>
                    <ContactItem type="link" value={contact?.social?.twitter} text="Twitter"/>
                    <ContactItem type="link" value={contact?.social?.linkedin} text="LinkedIn"/>
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
                        <TextInput placeholder="Enter name" value={name} inputChange={(e) => setName(e.target.value)} label="_name:" />
                        <TextInput placeholder="Enter email" value={email}  label="_email:" inputChange={(e) => setEmail(e.target.value)}/>
                        <MessageBox value={message} inputChange={(e) => setMessage(e.target.value)}/>
                       {!sending && <Button text="submit-message" onClick={sendMessage}/>}
                        {sending && <p style={{color: '#fff'}}>Sending...</p>}

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
                            <span className="value">"{name}"</span>
                            <span className="brace">,</span>
                        </p>
                        <p>
                            <span className="line-number">5 </span>
                            <span className="var-name">&nbsp;email<span className="brace">: </span></span>
                            <span className="value">"{email}"</span>
                            <span className="brace">,</span>
                        </p>
                        <p>
                            <span className="line-number">6 </span>
                            <span className="var-name">&nbsp;message<span className="brace">: </span></span>
                            <span className="value">"{message}"</span>
                            <span className="brace">,</span>
                        </p>

                        <p>
                            <span className="line-number">7 </span>
                            <span className="var-name">&nbsp;date<span className="brace">: </span></span>
                            <span className="value">"{date}"</span>
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