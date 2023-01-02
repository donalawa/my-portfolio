import React from 'react';
import './MessageBox.css';


function MessageBox({ value, inputChange }) {
    return (
        <div className="box-container">
            <p className="label-text">_messsage:</p>
            <textarea value={value} onChange={inputChange} placeholder="Enter message" className="message-box" rows="14" cols="50"></textarea>
        </div>
    );
}

export default MessageBox;