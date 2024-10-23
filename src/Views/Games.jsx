import React, { useEffect, useState, useRef } from 'react';
import '../grid.css';

const gridSize = 100; // Size of each cell (100px by 100px)
let catPosition = { x: 0, y: 0 }; // Starting position of the cat

function Games() {
    const [currentAnimation, setCurrentAnimation] = useState('Idle');
    const [currentFrame, setCurrentFrame] = useState(0);

    const catElement = useRef(null);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % 6); // Assuming 6 frames per animation
        }, 100); // Adjust the speed of frame change as needed

        return () => clearInterval(animationInterval); // Clean up on unmount
    }, []);

    const updateCatPosition = () => {
        if (catElement.current) {
            catElement.current.style.transform = `translate(${catPosition.x * gridSize}px, ${catPosition.y * gridSize}px)`;
        }
    };

    const handleKeyPress = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (catPosition.y > 0) catPosition.y--; // Move up if not at top
                setCurrentAnimation('Run');
                break;
            case 'ArrowDown':
                if (catPosition.y < 8) catPosition.y++; // Move down if not at bottom (adjusted for 6x6 grid)
                setCurrentAnimation('Run');
                break;
            case 'ArrowLeft':
                if (catPosition.x > 0) catPosition.x--; // Move left if not at leftmost
                setCurrentAnimation('Run');
                break;
            case 'ArrowRight':
                if (catPosition.x < 14) catPosition.x++; // Move right if not at rightmost (adjusted for 6x6 grid)
                setCurrentAnimation('Run');
                break;
            case ' ':
                setCurrentAnimation('Jump');
                break;
            default:
                setCurrentAnimation('Idle');
        }
        updateCatPosition();
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className="game-grid">
            {/* Game grid cells */}
            {Array.from({ length: 135 }).map((_, index) => (
                <div className="game-grid-cell" key={index}>Block {index + 1}</div>
            ))}
            <div
                ref={catElement}
                className={`cat ${currentAnimation.toLowerCase()}`}
            ></div>
        </div>
    );
}

export default Games;

