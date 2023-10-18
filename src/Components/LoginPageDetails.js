import React, {useState} from 'react';
import ProfilePicture from './Profilepic.png';
import BackgroundVideo from "../Assets/4K Planet Earth Spinning in Space Free HD Videos - No Copyright.mp4";
import {useNavigate} from "react-router-dom";

function LoginPageDetails() {
    const websitePassword = "Password123";
    let navigate = useNavigate()
    const [name, setName] = useState("");

    function handlePasswordAttempt(event) {
        if (event.key === "Enter") {
            if (name === websitePassword) {
                console.log("Correct attempt");
                alert("Correct login attempt");
                navigate("/Profile")
            } else {
                alert("Incorrect password, please try again");
                setName("");
            }
        }

    }

    function handleInputChange(event) {
        setName(event.target.value)
    }


    return (
        <div id={"LoginPageDetails"}>
            <video src={BackgroundVideo} autoPlay={true} muted={true} loop={true} className={"videoBackground"}/>
            <form id={"LoginFormPage"}>
                <h1 id={"IntroText"}>Hello World!</h1>
                <img id={"profilePictureHolder"} src={ProfilePicture} width={75} height={75}/>

                <h2 id={"IntroName"}>David Okechukwu</h2>
                <input type="password" id="PasswordField" placeholder="Enter Password" value={name}
                       onChange={handleInputChange}
                       onKeyDown={handlePasswordAttempt}/>
            </form>
        </div>

    );
};

export default LoginPageDetails;
