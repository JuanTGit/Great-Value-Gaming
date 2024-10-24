import React, { useEffect, useState, useRef } from 'react';
import spriteSheet from '../assets/sprites/Meow-Knight_Run.png'; // Adjust path as necessary
import '../grid.css';

const gridSize = 100; // Size of each cell (100px by 100px)
let catPosition = { x: 0, y: 0 }; // Starting position of the cat
const spriteWidth = 60; // Width of each sprite
const spriteHeight = 60; // Height of each sprite
const totalFrames = 10; // Total frames per animation

function Games() {
    const [currentAnimation, setCurrentAnimation] = useState('Idle');
    const [currentFrame, setCurrentFrame] = useState(0);
    const catElement = useRef(null);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames); // Cycle through frames
        }, 100); // Adjust the speed of frame change as needed

        return () => clearInterval(animationInterval); // Clean up on unmount
    }, [currentAnimation]); // Restart interval when animation changes

    const updateCatPosition = () => {
        if (catElement.current) {
            catElement.current.style.transform = `translate(${catPosition.x * gridSize}px, ${catPosition.y * gridSize}px)`;
            // Update background position for sprite animation (vertical arrangement)
            catElement.current.style.backgroundPosition = `0px -${currentFrame * spriteHeight}px`; // Move to the current frame
        }
    };

    const handleKeyPress = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (catPosition.y > 0) catPosition.y--; // Move up if not at top
                setCurrentAnimation('Run');
                break;
            case 'ArrowDown':
                if (catPosition.y < 8) catPosition.y++; // Move down if not at bottom
                setCurrentAnimation('Run');
                break;
            case 'ArrowLeft':
                if (catPosition.x > 0) {
					catPosition.x--; // Move left if not at leftmost
					setCurrentAnimation('Run');
					if (catElement.current) {
						catElement.current.classList.add('flip'); // Flip the sprite to face left
					}
				}
                break;
            case 'ArrowRight':
                if (catPosition.x < 15) {
					catPosition.x++; // Move right if not at rightmost
					setCurrentAnimation('Run');
					if (catElement.current) {
						catElement.current.classList.remove('flip'); // Remove flip when moving right
					}
				}
                break;
            case ' ':
                setCurrentAnimation('Jump'); // Handle jump action
                break;
            default:
                setCurrentAnimation('Idle'); // Default to idle if no key is pressed
        }
        updateCatPosition(); // Update position
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className="game-grid">
            <div 
                ref={catElement} 
                className={`cat ${currentAnimation.toLowerCase()}`} 
                style={{ 
                    transform: `translate(${catPosition.x * gridSize}px, ${catPosition.y * gridSize}px)`,
                    backgroundPosition: `0px -${currentFrame * spriteHeight}px` // Adjust for vertical arrangement
                }}
            />
        </div>
    );
}

export default Games;
