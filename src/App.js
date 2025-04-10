import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import AuthPage from './Components/AuthPage';
import Navigation from './Components/Navigation';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import SuccesfulLoginPage from './Components/SuccesfulLoginPage'; // Assuming this is the Profile/About page
import Contact from './Components/Contact'; // Import Contact component
import ProtectedRoute from './Components/ProtectedRoute';
import Footer from './Components/Footer'; // Import Footer
import ParticleBackground from './Components/ParticleBackground'; // Import ParticleBackground
import './App.css';

// Define quotes for each page
const pageQuotes = {
    '/Profile': "The journey of a thousand miles begins with a single step.",
    '/experience': "Experience is the teacher of all things.",
    '/projects': "Creativity is intelligence having fun.",
    '/contact': "Let's build something great together." // Quote for contact page
};

// Layout component to wrap protected pages with Navigation and Footer
const ProtectedLayout = () => {
    const location = useLocation();
    const currentQuote = pageQuotes[location.pathname] || "Welcome to my digital space."; // Default quote

    // Hide Navigation and Footer on the root/auth page
    if (location.pathname === '/') {
        return <Outlet />;
    }
    
    // Apply flex column layout to the wrapper
    return (
        <>
            <ParticleBackground /> {/* Add particle background */}
            {/* This div now controls the main layout flow */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh' // Ensure it takes at least full viewport height
            }}>
                <Navigation />
                {/* Main content should grow to fill space */}
                <main className="main-content" style={{ flexGrow: 1 }}>
                    <Outlet /> {/* Nested routes will render here */}
                </main>
                <Footer quote={currentQuote} /> {/* Add Footer with dynamic quote */}
            </div>
        </>
    );
};

function App() {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route element={<ProtectedLayout />}>
                <Route
                    path="/Profile"
                    element={
                        <ProtectedRoute>
                            <SuccesfulLoginPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/experience"
                    element={
                        <ProtectedRoute>
                            <Experience />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <ProtectedRoute>
                            <Projects />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/contact" // Add route for contact page
                    element={
                        <ProtectedRoute>
                            <Contact />
                        </ProtectedRoute>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
