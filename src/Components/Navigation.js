import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import linkedinIcon from './linkedin.svg'; // Correct the import path
import './Navigation.css';

function Navigation() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/Profile" className="nav-logo" onClick={closeMobileMenu}>
                    David Okechukwu
                </Link>

                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink 
                            to="/Profile"
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            onClick={closeMobileMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/experience"
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            onClick={closeMobileMenu}
                        >
                            Experience
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/projects"
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            onClick={closeMobileMenu}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                    {/* LinkedIn Link */}
                    <li className="nav-item nav-item-icon">
                        <a 
                            href="https://www.linkedin.com/in/david-okechukwu-6a1599172/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="nav-link linkedin-link"
                            onClick={closeMobileMenu} // Close menu on mobile click
                            aria-label="LinkedIn Profile"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation; 