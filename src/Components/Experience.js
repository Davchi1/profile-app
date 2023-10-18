import React, {useState} from 'react';
import LoginPageDetails from "./LoginPageDetails";
import samplePicture from "./linkedin.svg"
import nameStyler from "./cpu-fill.svg"
import MainPageBackground from "./snowy-blue-mountains-4k-e5.jpg"
import ProfilePicture from "./Profilepic.png";
import MailIcon from "./envelope-at.svg"
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom"
import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import linkedinImage from "./linkedin.svg";
function Experience(){

    const navBarOptions = [<NavLink to = "/Experience" className={"NavigationLinks"}   >Experience</NavLink>, <NavLink to = "/Projects" className={"NavigationLinks"}  >Projects</NavLink>,<NavLink to = "/WhyNetflix" className={"NavigationLinks"} > Why Netflix?</NavLink> ]

    return(

        <div id = {"SuccesfulLoginDiv"} >
            <Navbar id={"mainNavigation"}>
                    <Navbar.Brand className={"NavigationBrand"} href="/Profile">David Okechukwu</Navbar.Brand>

                    {navBarOptions.map((item) =>(
                        <li id = {"navItems"} > {item}</li>
                    ))}
                    <a target="_blank" id = {"linkedinImage"} href = {"https://www.linkedin.com/in/david-okechukwu-6a1599172/" }>
                        <img src ={linkedinImage} alt={""}/>
                    </a>
            </Navbar>
            <form id = {"MainFormPage"}>


                <h2 id = {"IntroBioContact"}>
                    At Rutgers University I gained knowledge in the following CS topics:
                    <br />
                    CALCULUS 1| CALCULUS 2|COMPUTER SECURITY|DATA STRUCTURES|DESIGN AND ANALYSIS OF COMPUTER ALGORITHMS|INTERNET TECHNOLOGY|INTRODUCTION TO COMPUTER ARCHITECTURE|INTRODUCTION TO COMPUTER SCIENCE|DISCRETE MATH 1|DISCRETE MATH 2|LINEAR ALGEBRA 1| PHYSICS 1|PHYSICS 2|SOFTWARE METHODOLOGY|SYSTEMS PROGRAMMING|PRINCIPLES OF INFORMATION & DATA MANAGEMENT
                    <br />
                    <br />
                    <br />
                    Twitter: Working on the media foundation team, I gained strong fundamentals on media playback topcis and developed video playback speed options for the (TFA) Twitter For Android application
                    <br/>
                    <br />
                    <br />
                    Yahoo!: Worked on development and maintenance for the Fantasy android application
                    <br/>
                    <br />
                    <br />
                    <br />
                    I am proficient the the following Languages/Tools/Processes/Frameworks:
                    <br/>
                    Java | JUnit testing | C | C++ | Python | Kotlin | SQL | GIT | React | HTML | CSS | Dagger | Rx Java | Coroutines | Eclipse IntelliJ |Jira | Agile Development
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    okechukwu15@gmail.com
                    <br/>
                    <br/>
                    <h9>Greater New York Area</h9>

                </h2>
            </form>
            <ul id = {"MainFooter"}>
                <li id ={"FooterText"} >It always seems impossible until its done - Nelson Mandela</li>
            </ul>
        </div>

    );
}


export default Experience;
