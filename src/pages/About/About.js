import React from 'react';
import IconFolder from '../../components/IconFolder/IconFolder';
import './About.css'

function About(props) {
    return (
        <div className="about-container">
            <div className="sm-bar">
                {/* small sidebar */}
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon1.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon2.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon3.png')}/>
            </div>
            <div className="folders-bar">
                <div className="folder-top-bar"> 
                    <div className="main-folder-container">
                        {/* opening  icon */}
                        <img style={{height: '10px', width: '10px'}} src={require('../../images/icons/open.png')} />
                        <p className="main-folder-name">personal-info</p>
                    </div>
                </div>
                {/* FOLDERS */}
                <div  className="folders">
        
                    <IconFolder icon={require('../../images/icons/folder1.png')} text="bio"/>
                    <IconFolder icon={require('../../images/icons/folder2.png')} text="Interests"/>
                    <IconFolder icon={require('../../images/icons/folder3.png')} text="education" files={[{name: 'high-school',  content: "Hello World"}, {name: 'university',  content: "Hello World"}]} />

{/*             

                    <div className="folder-container">
                        <div className="folder-info">
                            <img style={{height: '10px', width: '13px'}} src={require('../../images/icons/folder-open.png')} />
                            <img style={{height: '14px', width: '16px'}} src={require('../../images/icons/folder3.png')} />
                            <p className="folder-name">education</p>
                        </div>
                        <div className="folder-files">
                            <div className="folder-file-info">
                                <div>&nbsp;</div>
                                <img style={{height: '12px', width: '13px'}} src={require('../../images/icons/file.png')} />
                                <p  className="folder-file-name">high-school</p>
                            </div>

                            <div className="folder-file-info">
                                <div>&nbsp;</div>
                                <img style={{height: '12px', width: '13px'}} src={require('../../images/icons/file.png')} />
                                <p  className="folder-file-name">university</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <p>Folders</p> */}
            </div>
            <div className="main-sec">
                {/* Main sec */}
                <div  className="main-top-bar">
                    <div className="file-container">
                        <p className='file-name'>personal-info</p>
                        <img style={{ width: '10px',  height:  '10px'}} src={require('../../images/icons/close.png')}/>
                    </div>
                </div>
                <p className="file-name-mobile">// personal-info</p>
                <p className="content-text">I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum. quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
                </p>
                {/* <p className="content-text">I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
                </p> */}
            </div>
            <div className="sm-right">
                {/* ssmall ride */}
                <div className='box'></div>
            </div>
        </div>
    );
}

export default About;