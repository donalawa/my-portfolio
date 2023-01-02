import React, {useEffect, useContext,  useState} from 'react';
import FolderParent from '../../components/FolderParent/FolderParent';
import IconFolder from '../../components/IconFolder/IconFolder';
import LanguageIcon from '../../components/LanguageIcon/LanguageIcon';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css'
import NavContext from '../../context/NavContext';
import { useSelector, useDispatch } from 'react-redux';

function Projects(props) {
    const {navOpen, setNavOpen} = useContext(NavContext);
    const state = useSelector(state => state);
    const [projects, setProjects]  = useState([]);

    useEffect(() => {
        setNavOpen(false);
    }, [])

    useEffect(() => {
        console.log('all projects')
        console.log(state);
        setProjects(state.projects.allProjects);
    }, [state])
    return (
        <div className="about-container">
            <div className="sm-bar">
                {/* small sidebar */}
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon1.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon2.png')}/>
                <img style={{ width: '16px'}} src={require('../../images/icons/side-icon3.png')}/>
            </div>
            <div className="folders-bar">
                <FolderParent text="projects" open={true}>
                    <LanguageIcon icon={require('../../images/icons/react-icon.png')} name="React" />
                    <LanguageIcon icon={require('../../images/icons/vue-icon.png')} name="Vue Js" />
                    <LanguageIcon icon={require('../../images/icons/angular-icon.png')} name="Angular" />
                    <LanguageIcon icon={require('../../images/icons/html-icon.png')} name="Html" />
                    <LanguageIcon icon={require('../../images/icons/css-icon.png')} name="Css" />
                    <LanguageIcon icon={require('../../images/icons/gatsby-con.png')} name="Gatsby" />
                    <LanguageIcon icon={require('../../images/icons/flutter-icon.png')} name="Flutter" />
                </FolderParent>
            </div>
            <div className="main-sec">
                {/* Main sec */}
                <div  className="main-top-bar">
                    <div className="file-container">
                        <p className='file-name'>React; Angular</p>
                        <img style={{ width: '10px',  height:  '10px'}} src={require('../../images/icons/close.png')}/>
                    </div>
                </div>
               <div className="project-cards">
                    {/* <ProjectCard iconBg="#86E1F9" icon={require('../../images/projects/react-i.png')} image={require('../../images/projects/p1.png')}/>
                    <ProjectCard iconBg="#81D4AF" icon={require('../../images/projects/vue-i.png')} image={require('../../images/projects/p2.png')}/>
                    <ProjectCard iconBg="#86E1F9" icon={require('../../images/projects/react-i.png')} image={require('../../images/projects/p3.png')}/> */}
                    {projects.map((project, index) => <ProjectCard iconBg="#86E1F9" data={project} key={index} icon={require('../../images/projects/react-i.png')} image={require('../../images/projects/p3.png')}/>)}
               </div>
      
            </div>
            <div className="sm-right">
                {/* ssmall ride */}
                <div className='box'></div>
            </div>
        </div>
    );
}

export default Projects;