import React from 'react';
import { motion } from 'framer-motion';
import Profilepic from '../Assets/images/profilepic.png'; // Ensure path is correct
import './SuccesfulLoginPage.css';

// Animation Variants
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

function SuccesfulLoginPage() {
    return (
        <motion.div 
            className="profile-container"
            initial="hidden"
            animate="visible"
            variants={pageVariants} // Animate the container
        >
            <div className="profile-content">
                <motion.div 
                    className="profile-card card" // Reusing general card class
                    variants={pageVariants} // Animate the card itself
                >
                    <motion.img 
                        className="profile-picture" 
                        src={Profilepic} 
                        alt="David Okechukwu" 
                        variants={itemVariants} // Animate picture
                        whileHover={{ scale: 1.05 }}
                    />
                    <motion.div className="profile-text" variants={itemVariants}>
                        <motion.h2 variants={itemVariants}>David Okechukwu</motion.h2>
                        <motion.h3 variants={itemVariants}>Software Engineer</motion.h3>
                        <motion.p variants={itemVariants}>
                            Welcome! Explore my journey, projects, and experience. 
                            Passionate about building innovative solutions and continuously learning.
                        </motion.p>
                    </motion.div>
                    {/* Add social links here if desired, wrapped in motion.div */}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SuccesfulLoginPage;
