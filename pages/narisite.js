import React, { useState } from 'react'; // Removed unused 'useEffect'

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
        primaryPinkHex: '#ec4899', // Used for border/background
        secondaryPinkHex: '#f9a8d4', // Used for message box background
    },
    states: {
        // CLOSED STATE (Uses Otter)
        closed: {
            emoji: "💌", 
            mainTitle: "A Secret Letter Has Arrived!",
            content: "A cute little otter brought this letter just for you. Do you wanna open it up and see what's inside?",
            buttons: [
                { label: "🔓 Okay open it!", action: "open", style: "primary" },
                { label: "🙈 No, I don't wanna", action: "rejected", style: "secondary" }
            ],
            // Changed 'border-primary-pink' to explicit Tailwind hex notation
            cardClass: 'border-[#ec4899]', 
            showOtter: true
        },
        // OPEN STATE (Uses Emoji)
        open: {
            emoji: "💖",
            mainTitle: "Read It! Read It!",
            content: 
                "HELLOOOO Nari!!!,\n\n" +
                "I hope your doing well! And i know things are hard but i know your really trying to be the best for other and yourself, and you are being the best and that's why I wanna love you the most. And thats not only the reason you are very special to me too and I care about you like ALOT ALOT!!!! " +
                "I have been thinking... I really love you and we made alot of memories together in two months!!!!! And I really miss you :(" +
                "And i really want to try all over again with you:D:D:D. And I think we can really do it this time!!!\n\n" +
                "And i wanna LOVE ALL YOUR INSECURITIES!\n— Senka XP ❤️",
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
            content: "I wrote this letter just for you ToT! It's okay, you can open it anytime you're ready.",
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
    const primaryPinkHex = letterData.theme.primaryPinkHex;
    
    // The classes for the primary button now use the explicit hex code in bracket notation
    // to prevent the Tailwind JIT compiler from failing the build.
    const classes = `
        w-full sm:w-auto px-8 py-3 font-bold rounded-full shadow-lg transition duration-200 
        ${isPrimary 
            // Changed 'bg-primary-pink' to 'bg-[#ec4899]' and kept text-black as requested
            ? `bg-[${primaryPinkHex}] text-black hover:shadow-xl hover:bg-pink-700 transform hover:-translate-y-0.5` 
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

    // Explicitly grab the hex colors from the theme data
    const { primaryPinkHex, secondaryPinkHex } = letterData.theme;

    // Function to handle button clicks and change the state
    const handleAction = (nextStateId) => {
        setCurrentStateId(nextStateId);
    };

    // Tailwind-safe color class strings (using explicit hex notation for text color)
    const primaryPinkText = `text-[${primaryPinkHex}]`;
    // Background class must be used directly in the JSX or defined as a full string
    const secondaryPinkBgClass = `bg-[${secondaryPinkHex}]`;

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
                                <img 
                                    id="otter-img" 
                                    // Placeholder image changed to GIF URL for interactive fun
                                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXVqdTlrenRqZHpxZXE0NDNsejU3cmR2MGN3c25mYXYyZ3A0cTA0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/86dmgeaLBuQG4/giphy.gif" 
                                    alt="Cute Otter" 
                                    className="mx-auto h-24 w-24 object-contain rounded-full transition duration-500 animate-wiggle"
                                />
                            ) : (
                                // Emoji Icon (Shown in open/rejected states)
                                <div id="emoji-icon" className={`text-6xl transform hover:scale-110 transition duration-300 ${primaryPinkText}`}>
                                    {currentState.emoji}
                                </div>
                            )}
                        </div>
                        
                        {/* Main Title */}
                        <h1 id="main-title" className={`text-3xl sm:text-4xl font-bold mb-2 ${primaryPinkText}`}>
                            {currentState.mainTitle}
                        </h1>
                        
                        {/* Content Area */}
                        {currentStateId === 'open' ? (
                            // 1. OPEN State: Shows the handwritten message box
                            <>
                                {/* This is the brief description before the box */}
                                <p className="text-gray-600 mb-8">
                                    YIPEEEEE YOU OPENED IT! Here's what's inside:
                                </p>
                                <div 
                                    id="message-box" 
                                    // Replaced dynamic string secondaryPinkBg with explicit class 
                                    className={`bg-[#f9a8d4] bg-opacity-30 p-6 rounded-xl border border-[${primaryPinkHex}] border-dashed shadow-inner`}
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
