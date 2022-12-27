import React from 'react';
import './ContactItem.css';

function ContactItem({ text, type }) {
    return (
        <div className="contact-item">
            {type == 'email' && <img src={require('../../images/icons/mail-icon.png')}/>}
            {type == 'link' && <img src={require('../../images/icons/link-icon.png')}/>}
            {type == 'phone' && <img src={require('../../images/icons/phone-icon.png')}/>}
            <p className="item-text">{ text }</p>
        </div>
    );
}

export default ContactItem;