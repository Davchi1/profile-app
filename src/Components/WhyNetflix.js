import React, {useState,useEffect} from 'react';
import LoginPageDetails from "./LoginPageDetails";
import samplePicture from "./linkedin.svg"
import nameStyler from "./cpu-fill.svg"
import MainPageBackground from "./snowy-blue-mountains-4k-e5.jpg"
import secondPageBackground from "./Ghandruk-Nepal-night-sky-night-sky-landscape-1577971-wallhere.com.jpg"
import ProfilePicture from "./Profilepic.png";
import MailIcon from "./envelope-at.svg"
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom"
import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import linkedinImage from "./linkedin.svg";

function WhyNetflix() {

    const navBarOptions = [
        <NavLink to="/Experience" className={"NavigationLinks"}>Experience</NavLink>,
        <NavLink to="/Projects" className={"NavigationLinks"}>Projects</NavLink>,
        <NavLink to="/WhyNetflix" className={"NavigationLinks"}>Why Netflix?</NavLink>]



    return (

        <div id={"SuccesfulLoginDiv"}>
            <Navbar id={"mainNavigation"}>

                    <Navbar.Brand className={"NavigationBrand"} href="/Profile">David Okechukwu</Navbar.Brand>

                    {navBarOptions.map((item) => (
                        <li id={"navItems"}> {item}</li>
                    ))}
                    <a target="_blank" id = {"linkedinImage"} href = {"https://www.linkedin.com/in/david-okechukwu-6a1599172/" }>
                        <img src ={linkedinImage} alt={""}/>
                    </a>

            </Navbar>
            <form id={"MainFormPage"}>


                <h2 id={"IntroBioContact"}>
                    Aside from the ubiquity this company holds and my personal persistent use of its products, I found a particular interest in applying to Netflix due to some of its mission statements and values.
                    Being a company with an engineering team that prides itself on communication and self-managed yet collaborative problem-solving in the bigger picture to ensure a exemplary product is something that I love as it resonates with
                    some of the values I have had in previous companies that ensured a productive and healthy work environment alongside room for growth as an engineer; especially as a fairly recent graduate. As of right now I am trying                    to grow as much as I can as a junior engineer and this sort of enviornment fosters that growth and perhaps my fresh perspective might help foster growth in more experienced members of the team.
                    <br/>
                    <br/>
                    <br/>
                    Furthermore, another thing that really brought my attention to netflix is its commitment to innovation and excellence. I am always one for learning new things and I think that an environment that prides itself on this would be a really great opportunity to work in.
                    Also, this company's commitment to excellence in a goal to "entertain the world" really speaks to the type of work and environment it holds which would be awesome to be apart of.
                    <br/>
                    <br/>
                    <br/>
                    <img src={MailIcon} id={"MailIcon"} color={"white"}/>
                    <br/>
                    <br/>
                    <br/>
                    Lets get in touch.
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
                <li id={"FooterText"}>Stay ahead of the competition. - Reed Hastings

                </li>

            </ul>
        </div>

    );
}


export default WhyNetflix;
