import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

// Simple variant for cards appearing on scroll
const cardFadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.6, 
            ease: "easeOut"
        }
    }
};

function Experience() {
    return (
        <div className="experience-container">
            <div className="experience-content">
                <section className="education-section">
                    <h2>Education</h2>
                    <motion.div 
                        className="education-card card" 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardFadeInUp}
                    >
                        <h3>Rutgers University</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Core Computer Science</h4>
                                <ul>
                                    <li>Data Structures</li>
                                    <li>Computer Security</li>
                                    <li>Software Methodology</li>
                                    <li>Systems Programming</li>
                                    <li>Computer Architecture</li>
                                    <li>Algorithm Design & Analysis</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Mathematics & Theory</h4>
                                <ul>
                                    <li>Calculus I & II</li>
                                    <li>Discrete Mathematics I & II</li>
                                    <li>Linear Algebra</li>
                                    <li>Physics I & II</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Data & Web Technologies</h4>
                                <ul>
                                    <li>Internet Technology</li>
                                    <li>Information & Data Management</li>
                                    <li>Database Systems</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section className="experience-section">
                    <h2>Professional Experience</h2>
                    <motion.div 
                        className="experience-card card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardFadeInUp}
                    >
                        <div className="job">
                            <h3>Stealth Startup</h3>
                            <p className="job-title">Software Engineer - Remote</p>
                            <p className="job-date">June 2024–Present</p>
                            <ul>
                                <li>Involved in the full-stack development, from back-end in PostgreSQL to UI/UX & business logic on the application using Kotlin & Swift/Swift UI</li>
                                <li>Leading the end-to-end development of new features, from ideation to version 1</li>
                                <li>Assisting in defining and implementing best practices, processes, and tools for software development and deployment</li>
                                <li>Testing and debugging applications to ensure they function optimally</li>
                                <li>Assist in the strategy & planning the product roadmap</li>
                                <li>Identifying areas for implementation of Machine Learning/AI Optimizations and training models</li>
                            </ul>
                        </div>
                        <div className="job">
                            <h3>Twitter (X)</h3>
                            <p className="job-title">Software Engineer - Media Foundation Team</p>
                            <ul>
                                <li>Developed video playback speed options for Twitter For Android (TFA)</li>
                                <li>Gained strong fundamentals in media playback technologies</li>
                                <li>Worked on core media infrastructure improvements</li>
                            </ul>
                        </div>
                        <div className="job">
                            <h3>Yahoo!</h3>
                            <p className="job-title">Software Engineer - Fantasy Sports</p>
                            <ul>
                                <li>Developed and maintained the Fantasy Android application</li>
                                <li>Implemented new features and optimizations</li>
                                <li>Collaborated with cross-functional teams</li>
                            </ul>
                        </div>
                    </motion.div>
                </section>

                <section className="skills-section">
                    <h2>Technical Skills</h2>
                    <motion.div 
                        className="skills-card card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardFadeInUp}
                    >
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Programming Languages</h4>
                                <ul>
                                    <li>Java</li>
                                    <li>Kotlin</li>
                                    <li>Python</li>
                                    <li>C/C++</li>
                                    <li>SQL</li>
                                    <li>Swift</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Frameworks & Tools</h4>
                                <ul>
                                    <li>React</li>
                                    <li>Dagger</li>
                                    <li>RxJava</li>
                                    <li>Coroutines</li>
                                    <li>JUnit</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Development Tools</h4>
                                <ul>
                                    <li>Git</li>
                                    <li>IntelliJ</li>
                                    <li>Eclipse</li>
                                    <li>Jira</li>
                                    <li>Agile Development</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}

export default Experience;
