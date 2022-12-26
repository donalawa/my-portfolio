import React, { useState } from 'react';
import IconFolder from '../IconFolder/IconFolder';
import './FolderParent.css'

function FolderParent({text, open=false, children}) {
    const [isOpen, setIsOpen] = useState(open);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="folder-top-bar"> 
                <div className="main-folder-container" onClick={toggleOpen}>
                    {/* opening  icon */}
                    {isOpen && <img style={{height: '10px', width: '10px'}} src={require('../../images/icons/open.png')} />}
                    {!isOpen && <img style={{height: '10px', width: '10px'}} src={require('../../images/icons/close_parent-icon.png')} />}
                    <p className="main-folder-name">{text}</p>
                </div>
            </div>
            {/* FOLDERS */}
            <div  className={`folders ${!isOpen &&  'hide-folders'}`}>
                {children}
            
            </div>
        </>
    );
}

export default FolderParent;