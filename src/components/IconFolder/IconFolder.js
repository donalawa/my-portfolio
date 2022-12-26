import React, { useState } from 'react';
import  './IconFolder.css';

function IconFolder({icon, text, files}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="folder-container">
            <div className="folder-info" onClick={toggleOpen}>
                {!isOpen && <img style={{height: '15px', width: '10px'}} src={require('../../images/icons/close-file.png')} />}
                {isOpen && <img style={{height: '10px', width: '13px'}} src={require('../../images/icons/folder-open.png')} />}
                <img style={{height: '14px', width: '16px'}} src={icon} />
                <p className="folder-name">{text}</p>
            </div>
            <div className={`folder-files ${!isOpen && 'hide-files'}`}>
               {files && files.map((file,index) => (
                <div className="folder-file-info">
                    <div>&nbsp;</div>
                    <img style={{height: '12px', width: '13px'}} src={require('../../images/icons/file.png')} />
                    <p  className="folder-file-name">{file.name}</p>
                </div>
               ))}

                {/* <div className="folder-file-info">
                    <div>&nbsp;</div>
                    <img style={{height: '12px', width: '13px'}} src={require('../../images/icons/file.png')} />
                    <p  className="folder-file-name">university</p>
                </div> */}
            </div>
        </div>
    );
}

export default IconFolder;