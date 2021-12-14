import React, { useEffect } from 'react'
import './ContactWrapper.css';

const ContactWrapper = () => {

    useEffect(() => {

        let WrapperHandler = () => {
          const WrapperUpper = document.getElementById('WrapperTextUpperContact');
          const WrapperLower = document.getElementById('WrapperTextLowerContact');
      
          WrapperUpper.style.transform = `translateX(${window.scrollY / 64}%)`;
          WrapperLower.style.transform = `translateX(-${window.scrollY / 64}%)`;
        }
    
        window.addEventListener('scroll', WrapperHandler);
    
        return () => window.removeEventListener('scroll', WrapperHandler);
      });

    return (
        <div className='WrapperContact' id='ContactWrapper'>
          <div className='WrapperContainerContact'>
            <h2 className='WrapperText' id='WrapperTextUpperContact'><span className='WrapperWordDark'>Contact</span><span>Contact</span><span className='WrapperWordDark'>Contact</span><span>Contact</span><span className='WrapperWordDark'>Contact</span><span>Contact</span><span className='WrapperWordDark'>Contact</span><span>Contact</span><span className='WrapperWordDark'>Contact</span></h2>
            <h2 className='WrapperText' id='WrapperTextLowerContact'><span>Contact</span><span className='WrapperWordDark'>Contact</span><span>Contact</span><span className='WrapperWordDark'>Contact</span><span>Contact</span><span className='WrapperWordDark'>Contact</span><span>Contact</span><span className='WrapperWordDark'>Contact</span><span>Contact</span></h2>
          </div>
        </div>
    )
}

export default ContactWrapper
