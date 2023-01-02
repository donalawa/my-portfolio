import React, {useEffect} from 'react';
import './ProjectCard.css'

function ProjectCard({ image, icon, iconBg="#86E1F9", data }) {

    useEffect(() => {
        // console.log(data)
    },[])
    return (
        <div>
            <p className="project-name">Name: {data.name}</p>
            <div className="project-card">
                <div className="project-image-container">
                    <img className="project-image" src={data.imageUrl}/>
                    <div className="language-icon" style={{backgroundColor: iconBg }}>
                        <img style={{width: "18px", height: "16px"}} src={icon}/>
                    </div>
                </div>
                <div className="project-info">
                    <div className="tags">
                       {data.tags.map((tag, index) => <span key={index} className='tag'>#{tag}</span>)}
                        {/* <span className='tag'>#css</span>
                        <span className='tag'>#javascript</span>
                        <span className='tag'>#node</span> */}
                    </div>
                    <p className="project-description">{data.description}.</p>
                    <a className="open-project-button" target="_blank" href={data.link}>View Project</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;