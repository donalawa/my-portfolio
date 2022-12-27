import React from 'react';
import './TextInput.css'

function TextInput({label, placeholder}) {
    return (
        <div className="input-container">
            <p className="label-text">{label}</p>
            <input type="text" placeholder={placeholder} className="text-input" />
        </div>
    );
}

export default TextInput;