import React, { useEffect } from 'react'
import './ProjectsWrapper.css';

const ProjectsWrapper = () => {

    useEffect(() => {

        let WrapperHandler = () => {
          const WrapperUpper = document.getElementById('WrapperTextUpperProjects');
          const WrapperLower = document.getElementById('WrapperTextLowerProjects');
      
          WrapperUpper.style.transform = `translateX(${window.scrollY / 32}%)`;
          WrapperLower.style.transform = `translateX(-${window.scrollY / 32}%)`;
        }
    
        window.addEventListener('scroll', WrapperHandler);
    
        return () => window.removeEventListener('scroll', WrapperHandler);
      });

    return (
        <div className='WrapperProjects' id='ProjectsWrapper'>
          <div className='WrapperContainerProjects'>
            <h2 className='WrapperText' id='WrapperTextUpperProjects'><span className='WrapperWordDark'>Projects</span><span>Projects</span><span className='WrapperWordDark'>Projects</span><span>Projects</span><span className='WrapperWordDark'>Projects</span><span>Projects</span><span className='WrapperWordDark'>Projects</span><span>Projects</span><span className='WrapperWordDark'>Projects</span></h2>
            <h2 className='WrapperText' id='WrapperTextLowerProjects'><span>Projects</span><span className='WrapperWordDark'>Projects</span><span>Projects</span><span className='WrapperWordDark'>Projects</span><span>Projects</span><span className='WrapperWordDark'>Projects</span><span>Projects</span><span className='WrapperWordDark'>Projects</span><span>Projects</span></h2>
          </div>
        </div>
    )
}

export default ProjectsWrapper
