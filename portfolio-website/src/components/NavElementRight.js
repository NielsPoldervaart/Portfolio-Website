import React from 'react'
import { Link } from 'react-scroll';
import '../style/NavElementRight.css';

const NavElement = ({ isVisible }) => {

    // offset={document.getElementById('ProjectsWrapper').clientHeight + 5.5}

    return (
        <div className="NavElement">
            <span className='CurrentActive'>Hello.</span>
            <div className='NavFloatingSquare' />
            <nav>
                <div className='NavTopSquare'/>
                <ul className="NavLinks">
                    <li className="NavLink"><Link className="NavLinkText" activeClass='NavLinkTextActive' to='Home' smooth={true} duration={250} spy={true}>Home</Link><div className="NavLinkSquare" /></li>
                    <li className="NavLink"><Link className="NavLinkText" activeClass='NavLinkTextActive' to='Projects' smooth={true} duration={250} spy={true}>Projects</Link><div className="NavLinkSquare" /></li>
                    <li className="NavLink"><Link className="NavLinkText" activeClass='NavLinkTextActive' to='About' smooth={true} duration={250} spy={true}>About me</Link><div className="NavLinkSquare" /></li>
                    <li className="NavLink"><Link className="NavLinkText" activeClass='NavLinkTextActive' to='Contact' smooth={true} duration={250} spy={true}>Contact me</Link><div className="NavLinkSquare" /></li>
                </ul>
                <div className='NavBotSquare'/>
            </nav>
        </div>
    )
}

export default NavElement