import React, { useEffect } from 'react'
import '../style/ScrollProgress.css';

const ScrollProgress = () => {

    useEffect(() => {

        let ProgressBarHandler = () => {
          const TotalScroll = document.documentElement.scrollTop;
          const WindowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const Scroll = `${TotalScroll / WindowHeight}`;
          const ProgressBar = document.getElementById('ProgressBar');
      
          ProgressBar.style.transform = `scale(1, ${Scroll})`;
        }
    
        window.addEventListener('scroll', ProgressBarHandler);
    
        return () => window.removeEventListener('scroll', ProgressBarHandler);
      });

    return (
        <div id='ProgressBarContainer'>
            <div id='ProgressBar'></div>
        </div>
    )
}

export default ScrollProgress
