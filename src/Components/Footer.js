import React from 'react';
import './Footer.css';

function Footer({ quote }) {
    return (
        <footer className="footer-container">
            <p className="footer-quote">{quote}</p>
        </footer>
    );
}

export default Footer; 