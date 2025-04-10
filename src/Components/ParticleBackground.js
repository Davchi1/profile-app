import React, { useState, useEffect, useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"; // Import loadAll
import { tsParticles } from "@tsparticles/engine"; // Import the engine

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // Initialize tsParticles engine and load the FULL feature set
    useEffect(() => {
        async function initializeParticles() {
            try {
                // Check if already initialized 
                // (Checking a specific feature like 'grab' might be more reliable than checking the engine itself)
                if (!tsParticles.interactors.get("externalGrab")) { // Check if grab interactor is loaded
                    await loadAll(tsParticles); // Load ALL features
                    // console.log("Full feature set (loadAll) loaded via useEffect");
                } else {
                    // console.log("Full feature set already available");
                }
                setInit(true); // Mark as ready to render
            } catch (error) {
                console.error("Error initializing loadAll:", error);
            }
        }
        initializeParticles();

        return () => {
            // Cleanup if needed
        };
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // console.log("Particles container loaded:", container);
    }, []);

    // Options for constellation effect (No preset needed as loadAll loads everything)
    const options = {
        // preset: "links", // REMOVED - Not needed with loadAll
        fullScreen: {
            enable: true,
            zIndex: -1 
        },
        background: {
            color: { 
                value: "#0f172a"
            }
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            shape: { 
                type: "circle"
            },
            color: { value: "#FFFFFF" },
            opacity: { 
                value: { min: 0.1, max: 0.8 },
                animation: {
                    enable: true,
                    speed: 0.8, 
                    minimumValue: 0.1, 
                    sync: false
                }
            },
            size: {
                value: { min: 0.5, max: 2 },
                 animation: {
                    enable: false
                 }
            },
            move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
                attract: { enable: false }
            },
             links: {
                 color: "#ffffff",
                 distance: 150,
                 enable: true,
                 opacity: 0.3,
                 width: 1,
             },
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "grab" 
                },
                onClick: {
                    enable: false, 
                },
                resize: { enable: true }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.8 
                    }
                }
            }
        },
        detectRetina: true,
    };

    // Conditionally render Particles only after initialization is confirmed
    if (init) {
        return (
            <Particles
                id="tsparticles"
                // init prop is not used here
                loaded={particlesLoaded}
                options={options}
            />
        );
    }

    return null; // Render nothing while initializing
};

export default ParticleBackground; 