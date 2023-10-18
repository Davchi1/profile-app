import React, {useState, useEffect} from 'react';

import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import linkedinImage from "./linkedin.svg";

function SuccesfulLoginPage() {

    const navBarOptions = [
        <NavLink to="/Experience" className={"NavigationLinks"}>Experience</NavLink>,
        <NavLink to="/Projects" className={"NavigationLinks"}>Projects</NavLink>,
        <NavLink to="/WhyNetflix" className={"NavigationLinks"}>Why Netflix?</NavLink>

    ]


    return (

        <div id={"SuccesfulLoginDiv"}>

            <Navbar id={"mainNavigation"}>

                <Navbar.Brand className={"NavigationBrand"} href="/Profile">David Okechukwu</Navbar.Brand>
                {navBarOptions.map((item) => (
                    <li id={"navItems"}> {item}</li>
                ))}
                <a target="_blank" id={"linkedinImage"} href={"https://www.linkedin.com/in/david-okechukwu-6a1599172/"}>
                    <img src={linkedinImage} alt={""}/>
                </a>

            </Navbar>
            <form id={"MainFormPage"}>


                <h2 id={"IntroBioContact"}>
                    My name is David Okechukwu,
                    <br/>
                    <br/>
                    <br/>
                    I am a recent graduate in Computer Science at Rutgers University. I would describe myself as someone
                    who is passionate about technology as I see its capability to affect the future regardless of the
                    field it is applied in; technology is a catalyst for progression.
                    <br/>
                    As a Software Engineer with a Bachelor's degree in Computer Science from Rutgers University, I have
                    a strong foundation in programming, data structures, algorithms, and software engineering
                    principles. I am passionate about how technology can be utilized to improve lives and solve
                    problems, and I have a keen interest in developing scalable, reliable, and user-friendly
                    applications.
                    <br/>
                    I have gained valuable SWE experience at two leading tech companies, Yahoo and Twitter, where I
                    worked on projects that enhanced the functionality, performance, and user experience of their
                    platforms. At Yahoo, I developed, fixed and tested features for the Yahoo Fantasy app. At Twitter, I
                    implemented playback speed options for the Twitter for Android app, which increased user engagement
                    and retention. I also participated in an intensive career development program at Pinterest, where I
                    learned about the tech industry and acquired valuable career skills. In addition, I completed a
                    virtual experience at JPMorgan Chase, where I applied my Python skills to analyze and visualize
                    financial data.
                    <br/>
                    I am proficient in Python and Java, and I have experience with other programming languages,
                    libraries tools, and frameworks, such as C, C++, JavaScript, HTML, React, CSS, Kotlin, C, Flask,
                    Git, and Jira. Alongside these technologies, my strong foundational knowledge of computer science
                    topics aids in learning new languages and technologies with speed. I am also familiar with agile
                    methodologies, such as Scrum and Kanban, and I enjoy working in a collaborative and diverse team
                    environment. I am always eager to learn new skills, technologies, and best practices, and I am
                    motivated by challenges and opportunities to grow as a software engineer.
                    <br/>
                    <br/>
                    <br/>
                    okechukwu15@gmail.com
                    <br/>
                    <br/>
                    <br/>
                    <h9>Greater New York Area</h9>
                </h2>
            </form>
            <ul id={"MainFooter"}>
                <li id={"FooterText"}>If you think you can do a thing or think you cant do a thing, you're right -Henry
                    Ford
                </li>

            </ul>
        </div>

    );
}


export default SuccesfulLoginPage;
