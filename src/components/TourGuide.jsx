import { useState, useEffect } from 'react';
import { Bot, X, ChevronRight, SkipForward } from 'lucide-react';
import './TourGuide.css';

const TourGuide = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [isMinimized, setIsMinimized] = useState(false);
    const [hasCompletedTour, setHasCompletedTour] = useState(false);

    const tourSteps = [
        {
            section: 'hero',
            message: "👋 Welcome, space traveler! I'm your AI guide. Let me show you around this stellar portfolio!",
            title: "Welcome!"
        },
        {
            section: 'metrics',
            message: "📊 Check out these impressive achievement metrics! These numbers showcase the developer's journey.",
            title: "Success Metrics"
        },
        {
            section: 'about',
            message: "🚀 This is the About section - discover the story, passions, and journey of this developer!",
            title: "About Me"
        },
        {
            section: 'skills',
            message: "💻 Explore the technical arsenal! These are the technologies and tools mastered over time.",
            title: "Skills & Tech"
        },
        {
            section: 'experience',
            message: "💼 Professional voyages! Click on the cards to expand and see detailed responsibilities.",
            title: "Experience"
        },
        {
            section: 'projects',
            message: "🎨 The showcase of creativity! Each project tells a unique story of problem-solving.",
            title: "Projects"
        },
        {
            section: 'github',
            message: "📈 GitHub stats reveal the coding activity - commits, contributions, and open-source love!",
            title: "GitHub Stats"
        },
        {
            section: 'blog',
            message: "✍️ Thoughts and insights! Dive into articles about technology, learning, and development.",
            title: "Blog"
        },
        {
            section: 'contact',
            message: "📬 Ready to connect? Reach out through the contact form - let's build something amazing together!",
            title: "Get in Touch"
        },
        {
            section: 'complete',
            message: "🎉 Tour complete! Feel free to explore at your own pace. Need me again? Click the robot icon!",
            title: "All Done!"
        }
    ];

    useEffect(() => {
        // Check if tour was already completed
        const tourCompleted = localStorage.getItem('portfolioTourCompleted');
        if (tourCompleted === 'true') {
            setHasCompletedTour(true);
            return;
        }

        // Show welcome message after brief delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

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

    const handleNext = () => {
        if (currentStep < tourSteps.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            
            if (nextStep === tourSteps.length - 1) {
                // Completed tour
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
        setTimeout(() => setIsVisible(false), 3000);
    };

    const handleSkip = () => {
        completeTour();
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleReopen = () => {
        setIsVisible(true);
        setIsMinimized(false);
    };

    if (!isVisible && !hasCompletedTour) return null;

    return (
        <>
            {!isVisible && (
                <button 
                    className="tour-guide-trigger"
                    onClick={handleReopen}
                    aria-label="Restart tour guide"
                >
                    <Bot size={24} />
                </button>
            )}

            {isVisible && (
                <div className={`tour-guide ${isMinimized ? 'minimized' : ''}`}>
                    <div className="tour-guide-robot">
                        <Bot size={48} className="robot-icon" />
                        <div className="robot-pulse"></div>
                    </div>

                    {!isMinimized && (
                        <div className="tour-guide-content">
                            <div className="tour-guide-header">
                                <h3 className="tour-guide-title">{tourSteps[currentStep].title}</h3>
                                <button 
                                    className="tour-guide-close"
                                    onClick={handleClose}
                                    aria-label="Close tour guide"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <p className="tour-guide-message">{tourSteps[currentStep].message}</p>

                            <div className="tour-guide-footer">
                                <span className="tour-guide-progress">
                                    {currentStep + 1} / {tourSteps.length}
                                </span>

                                <div className="tour-guide-actions">
                                    {currentStep < tourSteps.length - 1 && (
                                        <>
                                            <button 
                                                className="tour-guide-skip"
                                                onClick={handleSkip}
                                            >
                                                <SkipForward size={16} />
                                                Skip Tour
                                            </button>
                                            <button 
                                                className="tour-guide-next"
                                                onClick={handleNext}
                                            >
                                                Next
                                                <ChevronRight size={16} />
                                            </button>
                                        </>
                                    )}
                                    {currentStep === tourSteps.length - 1 && (
                                        <button 
                                            className="tour-guide-next"
                                            onClick={handleClose}
                                        >
                                            Got it!
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
                        aria-label={isMinimized ? 'Expand tour guide' : 'Minimize tour guide'}
                    >
                        {isMinimized ? '💬' : '➖'}
                    </button>
                </div>
            )}
        </>
    );
};

export default TourGuide;
