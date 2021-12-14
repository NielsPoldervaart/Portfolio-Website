import React from 'react'
import { Link } from 'react-scroll';
import { FaLinkedinIn,FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import './Header.css';

const Header = () => {
    return (
        <div className='HeaderContent'>
            <div className='HeaderContainer'>
            <span class="FullNameHeader" title="That's me! 😁"> 
                <span>N</span>
                <span>i</span>
                <span>e</span>
                <span>l</span>
                <span>s</span> 
                <span>P</span>
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
                <ul>
                    <li onClick={() => window.open('https://github.com/NielsPoldervaart')}><FaGithub className="Icon" title='GitHub'/></li>
                    <li onClick={() => window.open('https://www.linkedin.com/in/niels-poldervaart-645626228')}><FaLinkedinIn className="Icon" title='LinkedIn'/></li>
                    <li><Link to='Contact' smooth={true} duration={250} spy={true}><IoIosMail className="Icon" title='Email'/></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
