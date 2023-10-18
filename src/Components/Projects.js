import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import linkedinImage from "./linkedin.svg";
import nbOutLookBackground from "./clouds-cloudscape-daylight-432901.jpg"
import ruCafeBackground from "./ruCafeImage.jpg"
import plagarismDetectorBackground from "./failinggrade.jpg"

function Projects() {

    const navBarOptions = [
        <NavLink to="/Experience" className={"NavigationLinks"}>Experience</NavLink>,
        <NavLink to="/Projects" className={"NavigationLinks"}>Projects</NavLink>,
        <NavLink to="/WhyNetflix" className={"NavigationLinks"}>Why Netflix?</NavLink>

    ]


    return (

        <div id={"SuccesfulLoginDiv"}>
            <Navbar id={"mainNavigation"} >

                <Navbar.Brand className={"NavigationBrand"} href="/Profile">David Okechukwu</Navbar.Brand>
                {navBarOptions.map((item) => (
                    <li id={"navItems"}> {item}</li>
                ))}
                <a target="_blank" id={"linkedinImage"} href={"https://www.linkedin.com/in/david-okechukwu-6a1599172/"}>
                    <img src={linkedinImage} alt={""}/>
                </a>

            </Navbar>
            <form id={"MainFormPage"}>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            id={"carouselBorder"}
                            src={plagarismDetectorBackground}
                            alt={""}

                        />
                        <Carousel.Caption>
                            <h3>Plagarism Detector</h3>
                            <p>Made use of the filesystem API and the POSIX thread library to implement a simple
                                plagiarism checker in C. File similarity is calculated using Jensen-Shannon Distance on
                                a shared data structure based on the tokenization of words in the file
                            </p>
                            <p>
                                Ex.
                                <br/>
                                similarity = 0.162 for “hi.txt” and “hello.txt”

                                <br/>

                                <a id={"carouselLinks"} target="_blank"
                                   href={"https://github.com/Davchi1/PlagarismDetector"}>https://github.com/Davchi1/PlagarismDetector</a>

                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            id={"carouselBorder"}
                            src={nbOutLookBackground}
                            alt={""}
                        />
                        <Carousel.Caption>
                            <h3>Weather Bot</h3>
                            <p>Created @NBoutlook which provided an outline for the forecast for the day in
                                New-Brunswick, NJ by utilizing IBM weather API & Twitter4J API along with a task
                                scheduler running a jar executable.

                            </p>
                            <a id={"carouselLinks"} target="_blank"
                               href={"https://twitter.com/NBoutlook"}>https://twitter.com/NBoutlook</a>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ruCafeBackground}
                            id={"carouselBorder"}

                            alt={""}
                        />
                        <Carousel.Caption>
                            <h3>RuCafe</h3>

                            <br/>
                            <br/>
                            <br/>
                            <p>Created simple software for a hypothetical cafe to manage orders</p>
                            <br/>
                            <a id={"carouselLinks"} target="_blank"
                               href={"https://github.com/Davchi1/RutgersCafe"}>https://github.com/Davchi1/RutgersCafe</a>


                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h2 id={"IntroBioContact"}>

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


export default Projects;
