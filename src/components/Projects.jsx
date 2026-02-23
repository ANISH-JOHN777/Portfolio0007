import { useState } from 'react';
import { Rocket, X, Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = ({ id }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTech, setSelectedTech] = useState('All');

    const projects = [
        {
            id: 'blogvox',
            title: 'Blogvox',
            date: 'Sep 2025',
            description: 'Voice-to-text blog generation with PDF export functionality.',
            fullDescription: 'This application revolutionizes content creation by allowing users to effortlessly convert spoken words into structured blog posts. By leveraging the browser\'s built-in Web Speech API, it captures audio in real-time and transcribes it into text. The system then intelligently formats this text into a coherent article with headings and key points, which can be previewed, edited, and exported as a professional PDF document.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Real-time voice-to-text transcription.',
                'Automated content structuring (headings, paragraphs).',
                'Client-side processing for speed and privacy.',
                'One-click PDF export for easy sharing and archiving.'
            ],
            github: 'https://github.com/ANISH-JOHN777/blogvox',
            live: 'https://blogvox-demo.netlify.app'
        },
        {
            id: 'bikeRentals',
            title: 'Bike Rentals',
            description: 'A peer-to-peer bike rental platform for users to list and rent bikes.',
            fullDescription: 'A community-driven marketplace connecting bike owners with individuals looking for a temporary ride. This peer-to-peer platform enables users to list their own bikes for rent, setting their own prices and availability. Renters can browse local listings, view bike details, and book a ride through a simple, intuitive interface, fostering a sustainable and community-focused mode of transport.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'User account creation and management for owners and renters.',
                'Intuitive interface for listing bikes with photos and descriptions.',
                'Search and filtering system for finding available bikes.',
                'A platform for direct user-to-user interaction and transaction.'
            ],
            github: 'https://github.com/ANISH-JOHN777/bike-rentals',
            live: 'https://bike-rentals-demo.netlify.app'
        },
        {
            id: 'billingPage',
            title: 'Billing Page',
            description: 'A simple page to generate customer bills with PDF and print options.',
            fullDescription: 'A lightweight, efficient point-of-sale (POS) solution designed for small businesses and freelancers. This tool simplifies the invoicing process by allowing users to quickly input customer details, add items with price and quantity, and instantly generate a formatted bill. The application dynamically calculates totals, taxes, and discounts, offering options to either print a physical copy or save the invoice as a PDF.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Dynamic item entry with automatic total calculation.',
                'Simple customer information management.',
                'Print-friendly bill formatting.',
                'Generate and download invoices as PDF files.'
            ],
            github: 'https://github.com/ANISH-JOHN777/billing-page',
            live: 'https://billing-page-demo.netlify.app'
        },
        {
            id: 'typingGame',
            title: 'Typing Game',
            description: 'A small game to improve typing speed by typing falling words.',
            fullDescription: 'An engaging browser game designed to boost typing speed and accuracy. Words cascade down the screen, and the player must correctly type them before they disappear off the bottom. The game tracks performance metrics like Words Per Minute (WPM) and accuracy, providing a fun and competitive way to practice and improve essential keyboarding skills through fast-paced, interactive gameplay.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Dynamic word generation for endless replayability.',
                'Real-time input validation and scoring.',
                'Speed and accuracy tracking (WPM).',
                'Increasing difficulty to challenge players.'
            ],
            github: 'https://github.com/ANISH-JOHN777/typing-game',
            live: 'https://typing-game-demo.netlify.app'
        },
        {
            id: 'newWay',
            title: 'New Way',
            description: 'An interview platform with AI-powered tools for HR and candidates.',
            fullDescription: 'A next-generation interview platform that leverages AI to streamline the hiring process. It provides a robust environment for real-time audio and video calls between HR professionals and candidates. For candidates, an AI Resume Enhancer suggests improvements based on the job description. For HR, an AI Question Generator creates relevant, insightful questions based on the candidate\'s resume, ensuring a more effective and data-driven interview.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'High-quality, real-time audio/video communication using WebRTC.',
                'AI-powered resume analysis and enhancement suggestions.',
                'Automated generation of interview questions tailored to the candidate.',
                'A collaborative space for a more modern interview experience.'
            ],
            github: 'https://github.com/ANISH-JOHN777/new-way',
            live: 'https://new-way-demo.netlify.app'
        }
    ];

    // Get unique technologies
    const allTechs = ['All', ...new Set(projects.flatMap(p => p.technologies))];

    // Filter projects
    const filteredProjects = selectedTech === 'All' 
        ? projects 
        : projects.filter(p => p.technologies.includes(selectedTech));

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section id={id} className="projects scroll-reveal" aria-label="Projects portfolio">
                <h2 className="section-title text-glow">STELLAR PROJECTS</h2>

                {/* Filter Buttons */}
                <div className="project-filters">
                    {allTechs.map((tech) => (
                        <button
                            key={tech}
                            className={`filter-btn ${selectedTech === tech ? 'active' : ''}`}
                            onClick={() => setSelectedTech(tech)}
                            aria-pressed={selectedTech === tech}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <button
                            key={project.id}
                            className="project-card card"
                            onClick={() => openModal(project)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            aria-label={`Open details for ${project.title} project`}
                        >
                            <div className="project-header">
                                <Rocket className="project-icon icon-glow" size={24} aria-hidden="true" />
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                            {project.date && <p className="project-date">{project.date}</p>}
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech" aria-label="Technologies used">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close project details modal">
                            <X size={24} aria-hidden="true" />
                        </button>

                        <div className="modal-header">
                            <Rocket className="icon-glow" size={32} aria-hidden="true" />
                            <h2 className="modal-title text-glow" id="modal-title">{selectedProject.title}</h2>
                        </div>

                        <p className="modal-description">{selectedProject.fullDescription}</p>

                        <div className="modal-section">
                            <h3 className="modal-subtitle">Key Features</h3>
                            <ul className="modal-features">
                                {selectedProject.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-tech">
                            {selectedProject.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="modal-actions">
                            {selectedProject.github && (
                                <a 
                                    href={selectedProject.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="action-btn github-btn"
                                    aria-label={`View ${selectedProject.title} on GitHub - opens in new window`}
                                >
                                    <Github size={20} aria-hidden="true" />
                                    GitHub
                                </a>
                            )}
                            {selectedProject.live && (
                                <a 
                                    href={selectedProject.live} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="action-btn live-btn"
                                    aria-label={`View ${selectedProject.title} live demo - opens in new window`}
                                >
                                    <ExternalLink size={20} aria-hidden="true" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;
