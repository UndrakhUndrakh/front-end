import React, { useState, useEffect } from 'react';

// --- JavaScript Data (Equivalent to the appData object from the HTML file) ---
const letterData = {
    // Custom wiggle animation keyframes defined as a style object for React
    styles: `
        @keyframes wiggle {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-5deg) scale(1.05); }
            75% { transform: rotate(5deg) scale(1.05); }
        }
        .animate-wiggle {
            animation: wiggle 1s infinite ease-in-out alternate;
        }
        .handwritten {
            font-family: 'Parisienne', cursive;
            font-size: 1.5rem;
            line-height: 2.25rem;
            white-space: pre-wrap;
        }
        /* Updated custom background for the strong geometric 'Logo' pattern */
        .aphex-inspired-bg {
            background-color: #fce7f3; /* Light Pink Base */
            /* Using a repeating SVG pattern (a stylized pink diamond glyph) */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23fce7f3'/%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='%23fcd5e8' stroke='%23ec4899' stroke-width='3' opacity='0.7'/%3E%3C/svg%3E");
            background-size: 60px 60px; /* Adjust size for high visibility */
            background-repeat: repeat;
        }
    `,
    theme: {
        primaryPink: 'ec4899',
    },
    states: {
        // CLOSED STATE (Uses Otter)
        closed: {
            emoji: "💌", 
            mainTitle: "A Secret Letter Has Arrived!",
            // FIX: Escaped apostrophe in "what's"
            content: "A cute little otter brought this letter just for you. Do you wanna open it up and see what&apos;s inside?",
            // FIX: Added missing 'buttons' array to fix 'map' error
            buttons: [ 
                { label: "🔓 Okay open it!", action: "open", style: "primary" },
                { label: "🙈 No, I don't wanna", action: "rejected", style: "secondary" }
            ],
            cardClass: 'border-primary-pink',
            showOtter: true
        },
        // OPEN STATE (Uses Emoji)
        open: {
            emoji: "💖",
            mainTitle: "Read It! Read It!",
            content: 
                "HELLOOOO Nari!!!,\n\n" +
                // FIX: Escaped apostrophes in "you're"
                "I hope you&apos;re doing well! And i know things are hard but i know you&apos;re really trying to be the best for other and yourself, " + 
                "I have been thinking... I really love you and we made alot of memories together in two months!!!!! And I really miss you :(" +
                "And i really want to try all over again with you:D:D:D. And I think we can really do it this time!!!\n\n" +
                "And i wanna LOVE ALL YOUR INSECURIT\n— Senka XP ❤️",
            buttons: [
                { label: "Close Letter", action: "closed", style: "primary" }
            ],
            cardClass: 'border-green-500',
            showOtter: false
        },
        // REJECTED STATE (Uses Emoji)
        rejected: {
            emoji: "😭",
            mainTitle: "Aww, Are You Sure?",
            // FIX: Escaped apostrophes in "It's" and "you're"
            content: "I wrote this letter just for you ToT! It&apos;s okay, you can open it anytime you&apos;re ready.",
            // FIX: Added missing 'buttons' array to fix 'map' error
            buttons: [ 
                { label: "Okay, Maybe Later", action: "closed", style: "primary" }
            ],
            cardClass: 'border-yellow-500',
            showOtter: false
        }
    }
};

/**
 * Custom Button Component for Reusability
 */
const LetterButton = ({ label, action, style, onClick }) => {
    const isPrimary = style === 'primary';
    
    // Determine button classes based on primary/secondary style
    const classes = `
        w-full sm:w-auto px-8 py-3 font-bold rounded-full shadow-lg transition duration-200 
        ${isPrimary 
            ? 'bg-primary-pink text-black hover:shadow-xl hover:bg-pink-700 transform hover:-translate-y-0.5' 
            : 'bg-gray-200 text-black hover:shadow-xl hover:bg-gray-300' 
        }
    `;

    return (
        <button className={classes} onClick={() => onClick(action)}>
            {label}
        </button>
    );
};

/**
 * Main App Component
 */
const App = () => {
    // Use state to manage which view is currently active: 'closed', 'open', or 'rejected'
    const [currentStateId, setCurrentStateId] = useState('closed');
    const currentState = letterData.states[currentStateId];

    // Function to handle button clicks and change the state
    const handleAction = (nextStateId) => {
        setCurrentStateId(nextStateId);
    };

    // Helper classes for Tailwind, matching the previous version's config
    const primaryPink = 'text-[#ec4899]';
    const secondaryPinkBg = 'bg-[#f9a8d4]'; 

    return (
        // Inject custom CSS for the animation and handwriting font
        <>
            <style>{letterData.styles}</style>

            {/* Added the 'aphex-inspired-bg' class here to fill the entire background */}
            <div className="min-h-screen flex items-center justify-center p-4 aphex-inspired-bg">
                
                {/* Main Letter Container Card */}
                <div 
                    id="letter-card" 
                    className={`max-w-lg w-full bg-white p-8 rounded-3xl shadow-2xl 
                                 transition-all duration-700 ease-in-out border-4 
                                 ${currentState.cardClass}`}
                >
                    <div className="text-center">
                        
                        {/* Otter/Emoji Icon Container */}
                        <div className="mb-6">
                            
                            {/* Otter Image (Shown only in closed state) */}
                            {currentState.showOtter ? (
                                // FIX: ESLint suppression added to bypass Next.js <Image /> warning
                                // eslint-disable-next-line @next/next/no-img-element
                                <img 
                                    id="otter-img" 
                                    src="https://placehold.co/100x100/ec4899/ffffff?text=🦦" 
                                    alt="Cute Otter" 
                                    className="mx-auto h-24 w-24 object-contain rounded-full transition duration-500 animate-wiggle"
                                />
                            ) : (
                                // Emoji Icon (Shown in open/rejected states)
                                <div id="emoji-icon" className={`text-6xl transform hover:scale-110 transition duration-300 ${primaryPink}`}>
                                    {currentState.emoji}
                                </div>
                            )}
                        </div>
                        
                        {/* Main Title */}
                        <h1 id="main-title" className={`text-3xl sm:text-4xl font-bold mb-2 ${primaryPink}`}>
                            {currentState.mainTitle}
                        </h1>
                        
                        {/* Content Area */}
                        {currentStateId === 'open' ? (
                            // 1. OPEN State: Shows the handwritten message box
                            <>
                                {/* This is the brief description before the box */}
                                <p className="text-gray-600 mb-8">
                                    YIPEEEEE YOU OPENED IT! Here&apos;s what&apos;s inside:
                                </p>
                                <div 
                                    id="message-box" 
                                    className={`${secondaryPinkBg} bg-opacity-30 p-6 rounded-xl border border-primary-pink border-dashed shadow-inner`}
                                >
                                    <p className="handwritten text-gray-800">
                                        {currentState.content}
                                    </p>
                                </div>
                            </>
                        ) : (
                            // 2. CLOSED/REJECTED State: Shows the simple description text
                            <p id="main-message" className="text-gray-600 mb-8">
                                {currentState.content}
                            </p>
                        )}

                        {/* Button Container */}
                        <div id="button-container" className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            {/* The 'map' call will now work correctly because 'buttons' is defined in all states */}
                            {currentState.buttons.map((btn, index) => (
                                <LetterButton 
                                    key={index}
                                    label={btn.label}
                                    action={btn.action}
                                    style={btn.style}
                                    onClick={handleAction}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;