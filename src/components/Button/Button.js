import React from 'react';
import './Button.css';

function Button({text}) {
    return (
        <button className="submit-button">{text}</button>
    );
}

export default Button;