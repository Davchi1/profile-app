import React, { useState, useEffect, useRef } from 'react';
import Profilepic from '../Assets/images/profilepic.png';
import BackgroundVideo from "../Assets/4K Planet Earth Spinning in Space Free HD Videos - No Copyright.mp4";
import { useNavigate } from "react-router-dom";
import './AuthPage.css';

function AuthPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'Password123') {
            // Store authentication state in localStorage
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/Profile');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <video
                ref={videoRef}
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <div className="auth-content">
                <div className="auth-card">
                    <img 
                        className="profile-picture" 
                        src={Profilepic} 
                        alt="David Okechukwu" 
                    />
                    <h1>Welcome to My Portfolio</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="password-input"
                            />
                            {error && <p className="error-message">{error}</p>}
                        </div>
                        <button type="submit" className="submit-button">
                            Enter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
