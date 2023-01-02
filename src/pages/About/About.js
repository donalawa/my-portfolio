import React, {useEffect, useContext, useState } from 'react';
import FolderParent from '../../components/FolderParent/FolderParent';
import IconFolder from '../../components/IconFolder/IconFolder';
import './About.css'
import NavContext from '../../context/NavContext';
import ContactItem from '../../components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

function About(props) {
    const {navOpen, setNavOpen} = useContext(NavContext);
    const state = useSelector(state  => state.about);
    const contactState = useSelector(state  => state.contact);
    const [contact, setContact] = useState();
    const [activeFile, setActiveFile] = useState({});
    const [aboutInfo, setAboutinfo] = useState();
    const [hobbies, setHobbies] = useState();
    const iconImages = [require('../../images/icons/side-icon1.png'), require('../../images/icons/side-icon2.png'), require('../../images/icons/folder3.png')];

    useEffect(() => {
        setNavOpen(false);
    }, [])
    
    
    useEffect(() => {
        console.log('IN About', state)
        setActiveFile(state?.activeFile);
        setAboutinfo(state?.aboutInfo)
        setHobbies(state?.hobbies)
        // setContact(state.contactInfo)
    }, [state])

    useEffect(() => {
        // console.log('IN Contact', state)
        // setContact(state.contactInfo);
        // console.log('contact', contact)
        setContact(contactState.contactInfo)
    }, [contactState])

    return (
        <div className="about-container">
            <div className="sm-bar">
                {/* small sidebar */}
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon1.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon2.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon3.png')}/>
            </div>
            <div className="folders-bar">
                <FolderParent text="personal-info">
                    <IconFolder icon={require('../../images/icons/folder1.png')} text="bio"/>
                    <IconFolder icon={require('../../images/icons/folder2.png')} text="Interests"/>
                    {/* <IconFolder icon={require('../../images/icons/folder3.png')} text="education" files={[{name: 'high-school',  content: "Hello World"}, {name: 'university',  content: "Hello World"}]} /> */}
                </FolderParent>
                <FolderParent text="professional-info" open={true}>
                    {aboutInfo?.map((info,index) => <IconFolder open={true} key={index} icon={require('../../images/icons/folder1.png')} text={info?.folderName} files={info?.files}/>)}
                </FolderParent>
                <FolderParent text="hobbies">
                {hobbies?.map((data,index) => <IconFolder open={true} key={index} icon={require('../../images/icons/folder2.png')} text={data?.folderName} files={data?.files}/>)}
                </FolderParent>
                <FolderParent text="contacts" open={true}>
                    <ContactItem type="email" value={contact?.email} text={contact?.email}/>
                    <ContactItem type="phone" value="#" text={contact?.phone}/>
                </FolderParent>
            </div>
            <div className="main-sec">
                {/* Main sec */}
                <div  className="main-top-bar">
                    <div className="file-container">
                        <p className='file-name'>{activeFile?.name}</p>
                        <img style={{ width: '10px',  height:  '10px'}} src={require('../../images/icons/close.png')}/>
                    </div>
                </div>
                <div className='file-content'>
                    <p className="file-name-mobile">// {activeFile?.name}</p>
                    <p className="content-text">{activeFile?.content}</p>
                </div>
      
            </div>
            <div className="sm-right">
                {/* ssmall ride */}
                <div className='box'></div>
            </div>
        </div>
    );
}

export default About;