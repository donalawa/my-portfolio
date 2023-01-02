import React from 'react';
import './ContactItem.css';

function ContactItem({ text, type, value }) {
    return (
        <a href={value} target="_blank" className="contact-item">
            {type == 'email' && <img src={require('../../images/icons/mail-icon.png')}/>}
            {type == 'link' && <img src={require('../../images/icons/link-icon.png')}/>}
            {type == 'phone' && <img src={require('../../images/icons/phone-icon.png')}/>}
            <p className="item-text">{ text }</p>
        </a>
    );
}

export default ContactItem;