import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import weatherBotImage from "../Assets/images/WeatherBot.png";
import chatServerImage from "../Assets/images/ChatServer.jpg";
import knockKnockJokeImage from "../Assets/images/KnockKnockJoke.jpg";
import foodAppetizerImage from "../Assets/images/FoodAppetizerOrdering.jpg";
import ruCafeImage from "../Assets/images/ruCafeImage.jpg";
import portfolioImage from "../Assets/images/Portfolio.jpg";
import plagarismDetectorImage from "../Assets/images/plagarismDetectorImage.jpg";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

const Projects = () => {
    const projects = [
        {
            title: "Food Appetizer Ordering App",
            date: "June 2024",
            description: "Developed a mock food-ordering IOS application that allows users to order appetizers from a hypothetical store/company.",
            link: "https://github.com/Davchi1/Appetizer-Applicaiton",
            linkText: "View on GitHub",
            image: foodAppetizerImage
        },
        {
            title: "Personal Portfolio Website",
            date: "October 2023",
            description: "Created a portfolio page using HTML, CSS, JavaScript with react. In this project I reiterated over html,css,js,react fundamentals.",
            link: "https://github.com/Davchi1/profile-app",
            linkText: "View on GitHub",
            image: portfolioImage
        },
        {
            title: "RU-Cafe",
            date: "March 2021 - April 2021",
            description: "Created an Android application that emulated a menu ordering system for a hypothetical cafe.",
            link: "https://github.com/Davchi1/RutgersCafe",
            linkText: "View on GitHub",
            image: ruCafeImage
        },
        {
            title: "Web Chat Server",
            date: "December 2021",
            description: "Java web chat server developed as a University of Rutgers School Project.",
            link: "https://github.com/Davchi1/Web-Chat-Server",
            linkText: "View on GitHub",
            image: chatServerImage
        },
        {
            title: "Twitter Weather Bot",
            date: "December 2019 - December 2020",
            description: "Created a twitter bot @NBoutlook to tweet the New Brunswick weather utilizing weather API's and Spring boot.",
            link: "https://twitter.com/NBoutlook",
            linkText: "View on Twitter",
            image: weatherBotImage
        },
        {
            title: "Knock Knock Joke Server",
            date: "November 2020",
            description: "Made use of C sockets to implement a simple network service; a knock knock joke server.",
            link: "https://github.com/Davchi1/Knock-Knock-joke-server",
            linkText: "View on GitHub",
            image: knockKnockJokeImage
        },
        {
            title: "Plagiarism Detector",
            date: "October 2020",
            description: "Made use of the filesystem API and the POSIX thread library to implement a simple plagiarism checker in C. File similarity is calculated using the Jensen-Shannon Distance algorithm on a shared data structure based on the tokenization of words in the file.",
            link: "https://github.com/Davchi1/PlagarismDetector",
            linkText: "View on GitHub",
            image: plagarismDetectorImage
        }
    ];

    return (
        <div className="projects-container">
            <motion.div 
                className="projects-content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <h2 className="projects-title">Projects</h2>
                <motion.div 
                    className="projects-grid"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="project-card card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="project-image-container">
                                <motion.img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="project-image"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-date">{project.date}</p>
                                <p className="project-description">{project.description}</p>
                                <motion.a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {project.linkText}
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Projects;
