import React from 'react';
import './ProjectCard.css'

function ProjectCard({ image, icon, iconBg="#86E1F9" }) {
    return (
        <div>
            <p className="project-name">Project Name</p>
            <div className="project-card">
                <div className="project-image-container">
                    <img className="project-image" src={image}/>
                    <div className="language-icon" style={{backgroundColor: iconBg }}>
                        <img style={{width: "18px", height: "16px"}} src={icon}/>
                    </div>
                </div>
                <div className="project-info">
                    <div className="tags">
                        <span className='tag'>#html</span>
                        <span className='tag'>#css</span>
                        <span className='tag'>#javascript</span>
                        <span className='tag'>#node</span>
                    </div>
                    <p className="project-description">Duis aute irure dolor in velit esse cillum dolore.</p>
                    <a className="open-project-button" href="#">View Project</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;