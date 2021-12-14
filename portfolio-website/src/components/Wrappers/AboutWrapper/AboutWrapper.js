import React, { useEffect } from 'react'
import './AboutWrapper.css';

const AboutWrapper = () => {

    useEffect(() => {

        let WrapperHandler = () => {
          const WrapperUpper = document.getElementById('WrapperTextUpperAbout');
          const WrapperLower = document.getElementById('WrapperTextLowerAbout');
      
          WrapperUpper.style.transform = `translateX(${window.scrollY / 48}%)`;
          WrapperLower.style.transform = `translateX(-${window.scrollY / 48}%)`;
        }
    
        window.addEventListener('scroll', WrapperHandler);
    
        return () => window.removeEventListener('scroll', WrapperHandler);
      });

    return (
        <div className='WrapperAbout' id='AboutWrapper'>
          <div className='WrapperContainerAbout'>
            <h2 className='WrapperText' id='WrapperTextUpperAbout'><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span></h2>
            <h2 className='WrapperText' id='WrapperTextLowerAbout'><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span><span className='WrapperWordDark'>About</span><span>About</span></h2>
          </div>
        </div>
    )
}

export default AboutWrapper
