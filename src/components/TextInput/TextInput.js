import React from 'react';
import './TextInput.css'

function TextInput({label, placeholder, value, inputChange}) {
    return (
        <div className="input-container">
            <p className="label-text">{label}</p>
            <input type="text" onChange={inputChange} value={value} placeholder={placeholder} className="text-input" />
        </div>
    );
}

export default TextInput;