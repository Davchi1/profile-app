import React from 'react';
import { motion } from 'framer-motion'; // Import motion
// import { Link } from 'react-router-dom'; // Remove unused import
import linkedinIcon from './linkedin.svg'; // Assuming it's still in Components
import './Contact.css';

// Animation Variants (Use similar variants or adjust as needed)
const pageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

function Contact() {
    return (
        <motion.div 
            className="contact-container"
            initial="hidden"
            animate="visible"
            variants={pageVariants} // Animate the container
        >
            <motion.div 
                className="contact-content"
                variants={pageVariants} // Stagger children
            >
                <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
                <motion.div 
                    className="contact-card card" // Reusing general card style
                    variants={itemVariants} // Animate card
                >
                    <motion.p 
                        className="contact-intro"
                        variants={itemVariants} // Animate paragraph
                    >
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                        Feel free to reach out through the methods below.
                    </motion.p>
                    
                    <motion.div 
                        className="contact-methods"
                        variants={pageVariants} // Stagger contact methods
                    >
                        <motion.div className="contact-method" variants={itemVariants}>
                            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon linkedin-icon" />
                            <motion.a 
                                href="https://www.linkedin.com/in/david-okechukwu-6a1599172/"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="contact-link"
                                whileHover={{ scale: 1.05, textShadow: "0 0 8px var(--accent-glow)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Connect on LinkedIn
                            </motion.a>
                        </motion.div>
                        
                        <motion.div className="contact-method" variants={itemVariants}>
                            {/* Placeholder for an email icon - using text for now */}
                            <span className="contact-icon email-icon">📧</span> 
                            <motion.a 
                                href="mailto:Okechukwu15@gmail.com" 
                                className="contact-link"
                                whileHover={{ scale: 1.05, textShadow: "0 0 8px var(--accent-glow)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Okechukwu15@gmail.com
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Contact; 