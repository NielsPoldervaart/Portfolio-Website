import React, { useEffect, useState } from 'react'
import ScrambleText from './components/ScrambleText';
import NavElementRight from './components/NavElementRight.js';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ProjectsWrapper from './components/Wrappers/ProjectsWrapper';
import AboutWrapper from './components/Wrappers/AboutWrapper';
import ContactWrapper from './components/Wrappers/ContactWrapper';
// import BackToTop from './components/BackToTop';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      {/* <BackToTop /> */}

      <div className='Nav'>
        <NavElementRight />
      </div>

      <div className="Home" id='Home'>
        <div className='Header'>
          <Header />
        </div>
        <div className='Content'>
          <div className="Background">
            {/* <ScrambleText timer={2500} /> */}
            <h1 className="BackgroundText BG1">Hello.</h1>
          </div>
          <div className="HomeText">
            <p>
              Hey! My name is
              <span class="FullName"> 
              <span className="InitialFirstName"> N</span>
                                            <span>i</span>
                                            <span>e</span>
                                            <span>l</span>
                                            <span>s</span> 
                <span className="InitialLastName">P</span>
                                            <span>o</span>
                                            <span>l</span>
                                            <span>d</span>
                                            <span>e</span>
                                            <span>r</span>
                                            <span>v</span>
                                            <span>a</span>
                                            <span>a</span>
                                            <span>r</span>
                                            <span>t</span>
              </span>
              .
            </p>
            <p>
              I am a software developer!
            </p>
          </div>
        </div>
      </div>

      <div className='Projects' id='Projects'>
        <ProjectsWrapper />
        <div className='Content'>
          <div className="Background">
            <h1 className="BackgroundText BG2">Projects.</h1>
          </div>
          <div className="ComingSoon">
            <h1 className="BackgroundText">-- Coming Soon --</h1>
          </div>
        </div>
      </div>

      <div className='About' id='About'>
        <AboutWrapper />
        <div className='Content'>
          <div className="Background">
            <h1 className="BackgroundText BG3">About me.</h1>
          </div>
          <div className='Text AboutText'>
            <p>
              Hey! My name is <span>Niels Poldervaart</span>.<br/>
              I am currently a 20 years old and live in the Netherlands. <br /><br />
              I am a student at the Rotterdam University of Applied Sciences as a software engineer and I also have a degree in Application and Media Development.
            </p>
            <br/>
            {/* <br/>
            <p>Skills</p>
            <li>Javascript</li>
            <li>C#</li> */}
          </div>
        </div>
      </div>

      <div className='Contact' id='Contact'>
        <ContactWrapper />
        <div className="Content">
          <div className="Background">
            <h1 className="BackgroundText BG4">Contact me.</h1>
          </div>
          <div className="ComingSoon">
            <h1 className="BackgroundText">-- Coming Soon --</h1>
          </div>
        </div>
      </div>

      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;