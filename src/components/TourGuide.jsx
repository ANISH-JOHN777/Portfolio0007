import { useState, useEffect, useRef } from 'react';
import { Bot, X, ChevronRight, SkipForward, Sparkles, Hand, BarChart, Rocket, Code, Briefcase, Palette, TrendingUp, PenTool, Mail, PartyPopper, MessageCircle, Minimize2, Smile } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import './TourGuide.css';

const TourGuide = ({ isHidden }) => {
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [isMinimized, setIsMinimized] = useState(false);
    const [hasCompletedTour, setHasCompletedTour] = useState(false);
    const initialMessage = "Hi there! I'm Anish - well, robot version of me! I built this portfolio and I'm so excited to show you around. Let me take you through everything I've created. Ready? Let's go!";
    const [displayedMessage, setDisplayedMessage] = useState(initialMessage);
    const [isTyping, setIsTyping] = useState(false);
    const messageRef = useRef(initialMessage);

    const tourSteps = [
        {
            section: 'hero',
            icon: Hand,
            message: "Hi there! I'm Anish - well, robot version of me! I built this portfolio and I'm so excited to show you around. Let me take you through everything I've created. Ready? Let's go!",
            title: "Hey, I'm Anish!"
        },
        {
            section: 'metrics',
            icon: BarChart,
            message: "These numbers? Yeah, I'm pretty proud of them! They show my journey in web development - every commit, every project, every late night coding session. It's been quite a ride!",
            title: "My Achievements"
        },
        {
            section: 'about',
            icon: Rocket,
            message: "Here's my story! I wanted to share a bit about who I am, what drives me, and why I love building things for the web. This is the real me - no corporate jargon, just genuine passion!",
            title: "About Me"
        },
        {
            section: 'skills',
            icon: Code,
            message: "Check out the tools I work with! From React to Python, these are the technologies I've learned and love using. Some came easy, others took time, but I enjoyed learning every single one!",
            title: "My Tech Stack"
        },
        {
            section: 'experience',
            icon: Briefcase,
            message: "My professional journey so far! Click on each role to see what I actually did. I tried to write it like I'm telling a friend, not like a boring resume. Go ahead, explore!",
            title: "Where I've Worked"
        },
        {
            section: 'projects',
            icon: Palette,
            message: "This is my favorite section - things I've actually built! Each project solved a real problem or scratched a personal itch. Click on any card to read the full story behind it!",
            title: "Things I've Built"
        },
        {
            section: 'github',
            icon: TrendingUp,
            message: "My GitHub activity! This is where all the magic happens - every commit, every repository, every line of code. It's my digital workshop, and I'm always tinkering with something!",
            title: "My GitHub"
        },
        {
            section: 'blog',
            icon: PenTool,
            message: "I like to write about what I learn! These posts are my way of sharing knowledge and documenting my journey. Maybe something here will help you too!",
            title: "My Thoughts"
        },
        {
            section: 'contact',
            icon: Mail,
            message: "Want to chat? I'd genuinely love to hear from you! Whether it's about a project, collaboration, or just to say hi - shoot me a message. I actually read and respond to everything!",
            title: "Let's Connect"
        },
        {
            section: 'complete',
            icon: PartyPopper,
            message: "That's the full tour! Hope you enjoyed getting to know me and my work. Oh, and before you go - did you spot the Type Rush game? It's hidden somewhere on this page. Try to find it and test your typing speed! Feel free to explore more or reach out if you want to chat. Thanks for stopping by!",
            title: "Tour Complete!"
        }
    ];

    useEffect(() => {
        // Check if tour was already completed
        const tourCompleted = localStorage.getItem('portfolioTourCompleted');
        
        if (tourCompleted === 'true') {
            setHasCompletedTour(true);
            return;
        }

        // Always show the tour automatically until user completes it
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (hasCompletedTour || !isVisible) return;

        const handleScroll = () => {
            const sections = tourSteps
                .filter(step => step.section !== 'complete')
                .map(step => document.getElementById(step.section));

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        if (currentStep !== i) {
                            setCurrentStep(i);
                            setIsMinimized(false);
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentStep, hasCompletedTour, isVisible]);

    // Typing animation effect
    useEffect(() => {
        const currentMessage = tourSteps[currentStep].message;
        
        // Skip if message hasn't changed
        if (currentMessage === messageRef.current) return;
        
        messageRef.current = currentMessage;
        setIsTyping(true);
        setDisplayedMessage('');
        
        let index = 0;
        const typingSpeed = 20; // milliseconds per character
        
        const typingInterval = setInterval(() => {
            if (index < currentMessage.length) {
                setDisplayedMessage(currentMessage.slice(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, typingSpeed);
        
        return () => clearInterval(typingInterval);
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep < tourSteps.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            
            if (nextStep === tourSteps.length - 1) {
                // On final step, just show the completion message without scrolling
                completeTour();
            } else {
                // Scroll to next section
                const nextSection = document.getElementById(tourSteps[nextStep].section);
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
    };

    const completeTour = () => {
        localStorage.setItem('portfolioTourCompleted', 'true');
        setHasCompletedTour(true);
        // Don't auto-hide anymore, let user click the final button
    };

    const handleClose = () => {
        setIsVisible(false);
        // Tour will auto-open again on next refresh until user completes it
    };

    const handleSkip = () => {
        completeTour();
        handleClose();
    };

    const handleReopen = () => {
        setIsVisible(true);
        setIsMinimized(false);
        // Reset tour state so scroll tracking works again
        setHasCompletedTour(false);
        setCurrentStep(0);
    };

    if (!isVisible && !hasCompletedTour) return null;
    if (isHidden) return null;

    return (
        <>
            {!isVisible && (
                <button 
                    className="tour-guide-trigger"
                    onClick={handleReopen}
                    aria-label="Talk to Anish (robot guide)"
                >
                    <Bot size={24} />
                </button>
            )}

            {isVisible && (
                <div className={`tour-guide ${isMinimized ? 'minimized' : ''} ${theme === 'light' ? 'light-theme' : ''}`}>
                    <div className="tour-guide-robot">
                        <div className="robot-particles">
                            <Sparkles className="particle particle-1" size={12} />
                            <Sparkles className="particle particle-2" size={10} />
                            <Sparkles className="particle particle-3" size={11} />
                        </div>
                        
                        {/* Robot Head */}
                        <div className="robot-head">
                            <div className="robot-antenna"></div>
                            <div className="robot-eyes">
                                <div className={`robot-eye left ${isTyping ? 'talking' : ''}`}></div>
                                <div className={`robot-eye right ${isTyping ? 'talking' : ''}`}></div>
                            </div>
                            <div className={`robot-mouth ${isTyping ? 'talking' : ''}`}></div>
                        </div>
                        
                        {/* Robot Body */}
                        <div className="robot-body">
                            <div className="robot-panel"></div>
                        </div>
                        
                        {/* Robot Arms */}
                        <div className="robot-arm left"></div>
                        <div className="robot-arm right"></div>
                        
                        {/* Robot Legs */}
                        <div className="robot-legs">
                            <div className="robot-leg left"></div>
                            <div className="robot-leg right"></div>
                        </div>
                        
                        <div className="robot-glow"></div>
                    </div>

                    {!isMinimized && (
                        <div className="tour-guide-content speech-bubble">
                            <div className="speech-bubble-tail"></div>
                            <div className="content-shine"></div>
                            <div className="tour-guide-header">
                                <div className="title-container">
                                    <Bot size={16} className="title-icon" />
                                    <h3 className="tour-guide-title">{tourSteps[currentStep].title}</h3>
                                </div>
                                <button 
                                    className="tour-guide-close"
                                    onClick={handleClose}
                                    aria-label="Close Anish's tour"
                                >
                                    <X size={14} />
                                </button>
                            </div>

                            <div className="message-container">
                                <div className="message-icon-wrapper">
                                    {(() => {
                                        const IconComponent = tourSteps[currentStep].icon;
                                        return IconComponent ? <IconComponent size={20} className="message-icon" /> : null;
                                    })()}
                                </div>
                                <p className="tour-guide-message">
                                    {displayedMessage}
                                    {isTyping && <span className="typing-cursor">|</span>}
                                </p>
                            </div>
                            
                            <div className="progress-bar-container">
                                <div 
                                    className="progress-bar-fill"
                                    style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                                >
                                    <div className="progress-glow"></div>
                                </div>
                            </div>

                            <div className="tour-guide-footer">
                                <div className="progress-text">
                                    <span className="step-number">{currentStep + 1}</span>
                                    <span className="step-separator">/</span>
                                    <span className="step-total">{tourSteps.length}</span>
                                </div>

                                <div className="tour-guide-actions">
                                    {currentStep < tourSteps.length - 1 && (
                                        <>  
                                            <button 
                                                className="tour-guide-skip"
                                                onClick={handleSkip}
                                            >
                                                <SkipForward size={14} />
                                                Skip Tour
                                            </button>
                                            <button 
                                                className="tour-guide-next"
                                                onClick={handleNext}
                                            >
                                                Next
                                                <ChevronRight size={14} />
                                            </button>
                                        </>
                                    )}
                                    {currentStep === tourSteps.length - 1 && (
                                        <button 
                                            className="tour-guide-next"
                                            onClick={() => {
                                                completeTour();
                                                handleClose();
                                            }}
                                        >
                                            Thanks, Anish!
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="tour-guide-dots">
                                {tourSteps.map((_, index) => (
                                    <span 
                                        key={index}
                                        className={`dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <button 
                        className="tour-guide-minimize"
                        onClick={() => setIsMinimized(!isMinimized)}
                        aria-label={isMinimized ? 'See what Anish is saying' : 'Minimize robot guide'}
                    >
                        {isMinimized ? <MessageCircle size={16} /> : <Minimize2 size={16} />}
                    </button>
                </div>
            )}
        </>
    );
};

export default TourGuide;
