import React, { useState } from 'react';
import  './IconFolder.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../state';

function IconFolder({icon, text, files, open=false}) {
    const [isOpen, setIsOpen] = useState(open);
    const dispatch = useDispatch();

    let  { setActiveFile } = bindActionCreators(actionCreators, dispatch);


    const makeFileActive = (file) => {
        console.log('SET FILE');
        console.log(file);
        setActiveFile(file);
    }
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
                <div className="folder-file-info" key={index} onClick={() => makeFileActive(file)}>
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