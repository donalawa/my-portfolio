import React, {  useState } from 'react';
import './LanguageIcon.css';

function LanguageIcon({ icon, name}) {
    const [isChecked, setIsChecked] =  useState(false);

    const toggleIsChecked = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div>
            <div className="language-icons-container" onClick={toggleIsChecked}>
                {isChecked && <img style={{height: '14px', width: '14px'}} src={require('../../images/icons/lang-checked.png')} />}
                {!isChecked && <img style={{height: '14px', width: '14px'}} src={require('../../images/icons/lang-unchecked.png')} />}
                <img style={{height: '18px', width: '21px', objectFit: 'contain'}} src={icon} />
                <p className={`language-name ${isChecked && 'active'}`}>{name}</p>
            </div>
        </div>
    );
}

export default LanguageIcon;