import { useState } from 'react';
import { Rocket, X, Github, ExternalLink, ChevronDown, ChevronUp, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = ({ id, onModalChange }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showArchive, setShowArchive] = useState(false);

    const featuredProjects = [
        {
            id: 'castreach',
            title: 'CASTREACH',
            category: 'AI • SaaS • Product',
            badge: 'AI SAAS PLATFORM',
            description: 'An AI-powered podcast networking platform connecting hosts, guests, and organizers through discovery, outreach, booking, messaging and collaboration.',
            fullDescription: 'CastReach solves the fragmented workflow of podcast booking and guest outreach. Designed as an end-to-end SaaS platform, it provides intelligent guest discovery, automated AI-assisted outreach messages, unified booking calendars, real-time messaging, and shared episode preparation toolkits.',
            technologies: ['React', 'Node.js', 'AI / LLM', 'Tailwind CSS', 'REST API'],
            features: [
                'Smart Guest & Host Discovery with filtered criteria matching.',
                'AI-Assisted Personal Outreach message generation.',
                'Integrated Booking & Calendar scheduling workflow.',
                'Host & Guest rich professional profiles.',
                'Real-time Messaging & Episode Preparation workspace.',
                'Collaborative show notes and prep docs.'
            ],
            github: 'https://github.com/ANISH-JOHN777/CastReach',
            live: null,
            isFeatured: true
        },
        {
            id: 'finaltrip-ai',
            title: 'FINALTRIP AI',
            category: 'AI • Travel • Product',
            badge: 'AI WORKFLOW PLANNER',
            description: 'An AI-powered trip planning platform designed to create structured travel itineraries with destinations, routes, transportation, stays and trip planning workflows.',
            fullDescription: 'FinalTrip AI turns vague travel ideas into detailed, day-by-day itineraries. Powered by generative AI models and mapping data, the platform generates optimized travel routes, recommends authentic local spots, organizes stays, and compiles complete budget and transportation timelines.',
            technologies: ['React', 'Python', 'Flask', 'OpenAI API', 'Tailwind CSS'],
            features: [
                'AI-driven custom itinerary generation based on user preferences.',
                'Multi-destination route optimization and travel time calculations.',
                'Integrated accommodation & transportation planning modules.',
                'Exportable, shareable travel itinerary links and PDFs.'
            ],
            github: 'https://github.com/ANISH-JOHN777/FinalTrip-AI',
            live: null,
            isFeatured: true
        },
        {
            id: 'stickynode',
            title: 'STICKYNODE',
            category: 'Electron • Productivity • Desktop',
            badge: 'DESKTOP PRODUCTIVITY TOOL',
            description: 'A lightweight desktop productivity tool designed around persistent, contextual notes and reminders.',
            fullDescription: 'StickyNode is a minimal desktop note-taking utility built with Electron. Designed for power users and founders, it keeps critical notes, code snippets, and contextual reminders pinned to your desktop workspace with zero latency and low memory footprint.',
            technologies: ['Electron', 'JavaScript', 'Node.js', 'CSS3'],
            features: [
                'Persistent floating desktop note windows with custom opacity.',
                'Contextual reminder triggers and quick search.',
                'Full Markdown formatting and instant hotkey access.',
                'Local data storage ensuring 100% privacy and offline operation.'
            ],
            github: 'https://github.com/ANISH-JOHN777/StickyNode',
            live: null,
            isFeatured: true
        },
        {
            id: 'asteroid-impact',
            title: 'ASTEROID IMPACT SIMULATOR',
            category: 'React • Three.js • Flask • Data Visualization',
            badge: '3D DATA VISUALIZATION',
            description: 'An interactive asteroid impact simulation exploring planetary impact scenarios through data-driven visualization.',
            fullDescription: 'Built with Three.js and Flask backend math engines, this simulator models orbital trajectories, kinetic impact energy, blast radius estimations, and planetary impact scenarios through interactive 3D WebGL visualizations.',
            technologies: ['React', 'Three.js', 'Flask', 'Python', 'WebGL'],
            features: [
                '3D WebGL interactive globe with accurate orbital mechanics.',
                'Real-time kinetic energy, crater diameter, and blast radius calculation.',
                'Dynamic parameter controls for velocity, diameter, density, and impact angle.',
                'Scientific data overlay and impact impact reports.'
            ],
            github: 'https://github.com/ANISH-JOHN777/Asteroid-Impact-Simulator',
            live: null,
            isFeatured: true
        }
    ];

    const archiveProjects = [
        {
            id: 'blogvox',
            title: 'Blogvox',
            category: 'Web App • Voice AI',
            description: 'Turn your voice into blog posts - speak naturally and generate formatted blog posts with PDF export.',
            fullDescription: 'Blogvox allows creators to speak naturally into their browser and instantly transcribes and formats spoken words into clean blog posts with headings, paragraphs, and instant PDF download.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Speech Recognition'],
            features: [
                'Real-time voice transcription in browser.',
                'Smart paragraph & title formatting.',
                'One-click PDF export.'
            ],
            github: 'https://github.com/ANISH-JOHN777/blogvox',
            live: 'https://blogvox-demo.netlify.app'
        },
        {
            id: 'bikeRentals',
            title: 'Bike Rentals',
            category: 'Web App • Marketplace',
            description: 'A peer-to-peer platform where neighbors can rent out unused bikes to community members.',
            fullDescription: 'A community marketplace connecting bike owners with local renters. Users can create listings, upload photos, set custom rental prices, and connect directly.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Owner & Renter profile management.',
                'Bike listing catalog with search and filters.',
                'Direct rental request workflow.'
            ],
            github: 'https://github.com/ANISH-JOHN777/bike-rentals',
            live: 'https://bike-rentals-demo.netlify.app'
        },
        {
            id: 'billingPage',
            title: 'Billing Page',
            category: 'Web App • FinTech Tool',
            description: 'Quick invoice generation for small businesses - print or export professional bills as PDF.',
            fullDescription: 'Designed for small business owners and freelancers to quickly build clean itemized bills with automatic tax calculation and print/PDF export.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Instant line-item calculations & tax compute.',
                'Print-ready professional invoice layout.',
                'Local browser persistence.'
            ],
            github: 'https://github.com/ANISH-JOHN777/billing-page',
            live: 'https://billing-page-demo.netlify.app'
        },
        {
            id: 'typingGame',
            title: 'Typing Game',
            category: 'Web App • Game',
            description: 'Interactive speed-typing game tracking WPM and accuracy as words descend.',
            fullDescription: 'A fast-paced web game designed to test and improve typing speed by catching falling words before they hit the bottom edge.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Real-time WPM & accuracy metric tracking.',
                'Adaptive speed progression.',
                'High score local storage.'
            ],
            github: 'https://github.com/ANISH-JOHN777/typing-game',
            live: 'https://typing-game-demo.netlify.app'
        },
        {
            id: 'newWay',
            title: 'New Way',
            category: 'Web App • AI Hiring',
            description: 'Rethinking interviews with AI resume analysis and smart question generation.',
            fullDescription: 'A platform combining video communication with AI resume auditing for candidates and tailored interview question generation for HR.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'WebRTC'],
            features: [
                'AI resume feedback generator.',
                'Tailored interview question generation.',
                'WebRTC video interface.'
            ],
            github: 'https://github.com/ANISH-JOHN777/new-way',
            live: 'https://new-way-demo.netlify.app'
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
        onModalChange?.(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
        onModalChange?.(false);
    };

    return (
        <>
            <section id={id} className="projects glass-panel scroll-reveal">
                <span className="section-tagline">PORTFOLIO &amp; LABS</span>
                <h2 className="section-title">Products &amp; Experiments</h2>

                {/* Main Featured Products */}
                <div className="featured-projects-grid">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="featured-project-card"
                        >
                            <div className="card-top-bar">
                                <span className="project-badge"><Sparkles size={12} /> {project.badge || project.category}</span>
                                <Rocket size={20} className="card-rocket-icon" />
                            </div>

                            <h3 className="project-name" onClick={() => openModal(project)}>{project.title}</h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tech-strip">
                                {project.technologies.map((tech, tIdx) => (
                                    <span key={tIdx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-card-footer">
                                <button className="view-details-btn" onClick={() => openModal(project)}>
                                    <span>Product Overview</span>
                                    <ArrowUpRight size={16} />
                                </button>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-github-icon" title="View Source on GitHub">
                                        <Github size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secondary Section - Project Archive */}
                <div className="archive-section">
                    <button 
                        className="archive-toggle-btn"
                        onClick={() => setShowArchive(!showArchive)}
                    >
                        <Layers size={18} />
                        <span>Earlier Experiments &amp; Project Archive ({archiveProjects.length})</span>
                        {showArchive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {showArchive && (
                        <div className="archive-grid animate-fadeIn">
                            {archiveProjects.map((project) => (
                                <div 
                                    key={project.id} 
                                    className="archive-card"
                                    onClick={() => openModal(project)}
                                >
                                    <div className="archive-card-header">
                                        <h4 className="archive-title">{project.title}</h4>
                                        <span className="archive-cat">{project.category}</span>
                                    </div>
                                    <p className="archive-desc">{project.description}</p>
                                    <div className="archive-tech-row">
                                        {project.technologies.slice(0, 3).map((t, i) => (
                                            <span key={i} className="tech-tag mini">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Modal Detail Window */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                            <X size={22} />
                        </button>

                        <div className="modal-header">
                            <span className="badge-gold">{selectedProject.category}</span>
                            <h2 className="modal-project-title">{selectedProject.title}</h2>
                        </div>

                        <p className="modal-full-desc">{selectedProject.fullDescription}</p>

                        <div className="modal-features-block">
                            <h3 className="modal-sub-heading">Key Capabilities &amp; Architecture:</h3>
                            <ul className="modal-features-list">
                                {selectedProject.features.map((feat, idx) => (
                                    <li key={idx}>{feat}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-tech-stack">
                            <h4 className="modal-sub-heading">Tech Stack:</h4>
                            <div className="modal-tags">
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-actions">
                            {selectedProject.github && (
                                <a 
                                    href={selectedProject.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-outline-gold"
                                >
                                    <Github size={18} />
                                    <span>View GitHub Repo</span>
                                </a>
                            )}
                            {selectedProject.live && (
                                <a 
                                    href={selectedProject.live} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-gold"
                                >
                                    <ExternalLink size={18} />
                                    <span>Launch Live Demo</span>
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
