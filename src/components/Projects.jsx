import { useState } from 'react';
import { Rocket, X, Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = ({ id, onModalChange }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 'blogvox',
            title: 'Blogvox',
            date: 'Sep 2025',
            description: 'Turn your voice into blog posts - just speak and watch your words become content.',
            fullDescription: 'I built this because I love the idea of creating content without being glued to a keyboard. Blogvox lets you literally talk your way through a blog post. Just hit record, speak naturally, and the app transcribes everything in real-time using your browser\'s speech recognition. Then it takes that raw text and organizes it into something that actually looks like a proper blog post - with headings, paragraphs, the works. When you\'re happy with it, you can export it as a clean PDF. It\'s perfect for those moments when typing feels like too much work, or when ideas flow better when you speak them out loud.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Real-time voice transcription - speak and see your words appear instantly.',
                'Smart formatting that turns your speech into structured blog content.',
                'Everything happens in your browser - no server needed, completely private.',
                'One-click PDF export so you can share or save your content anywhere.'
            ],
            github: 'https://github.com/ANISH-JOHN777/blogvox',
            live: 'https://blogvox-demo.netlify.app'
        },
        {
            id: 'bikeRentals',
            title: 'Bike Rentals',
            description: 'A platform where people can rent out their bikes to others in the community.',
            fullDescription: 'This project came from thinking about all those bikes just sitting unused in garages. Why not make it easy for bike owners to earn some money while helping others get around? I created a simple platform where anyone can list their bike for rent. You set your own price, add some photos, write a description, and boom - your bike is available to the community. On the flip side, if you need a bike for a day or weekend, you can browse what\'s available nearby, check out the details, and book it. It\'s like Airbnb but for bikes. I wanted to make the whole thing straightforward - no complicated processes, just neighbors helping neighbors get around.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Easy account creation for both bike owners and renters.',
                'Simple listing process - add photos, set your price, and you\'re done.',
                'Search and filter options to find exactly the bike you need.',
                'Direct connection between owners and renters - keep it simple and personal.'
            ],
            github: 'https://github.com/ANISH-JOHN777/bike-rentals',
            live: 'https://bike-rentals-demo.netlify.app'
        },
        {
            id: 'billingPage',
            title: 'Billing Page',
            description: 'Quick and easy bill generation for small businesses - print or save as PDF.',
            fullDescription: 'I made this for small shop owners and freelancers who just need to create bills without all the complexity of heavy accounting software. You enter customer details, add items with prices, and the app does all the math automatically - including taxes and discounts if needed. Then you can either print it right away or save it as a PDF to email to your customer. No subscriptions, no cloud storage, no fuss. Just a clean, professional bill that takes seconds to create. I\'ve seen how much time people waste on billing, so I wanted to make something that just... works.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Add items on the fly with automatic total calculations.',
                'Store basic customer info so you don\'t have to retype everything.',
                'Print-ready format that looks professional on paper.',
                'Generate PDF invoices you can email or save for records.'
            ],
            github: 'https://github.com/ANISH-JOHN777/billing-page',
            live: 'https://billing-page-demo.netlify.app'
        },
        {
            id: 'typingGame',
            title: 'Typing Game',
            description: 'A fun way to get faster at typing - catch the falling words before they hit the ground!',
            fullDescription: 'Learning to type faster can be boring, so I turned it into a game. Words fall from the top of the screen, and you have to type them correctly before they disappear at the bottom. Miss a word and it speeds up, making things more challenging. The game tracks your typing speed (WPM) and accuracy, so you can see yourself improving over time. I wanted something that felt more like playing than practicing. Whether you\'re trying to improve your typing for work or just want a fun challenge, this game makes it actually enjoyable. Plus, there\'s something oddly satisfying about the frantic rush when words start falling faster!',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Random word generation keeps every game fresh and different.',
                'Instant feedback - you know immediately if you got it right.',
                'Track your typing speed (WPM) and accuracy in real-time.',
                'Progressive difficulty that adapts to challenge you more as you improve.'
            ],
            github: 'https://github.com/ANISH-JOHN777/typing-game',
            live: 'https://typing-game-demo.netlify.app'
        },
        {
            id: 'newWay',
            title: 'New Way',
            description: 'Rethinking interviews with AI - helping both candidates and HR have better conversations.',
            fullDescription: 'Job interviews are stressful for everyone involved, so I wanted to build something that makes them better. This platform brings candidates and HR together through smooth video calls, but with some AI superpowers. For candidates, there\'s an AI tool that looks at your resume and the job description, then suggests ways to make your resume stronger and more relevant. For HR folks, the AI reads the candidate\'s resume and generates smart, tailored interview questions on the spot - no more generic "tell me about yourself" stuff. The goal was to make interviews more productive and less awkward for everyone. Real conversations, better preparation, less guesswork.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            features: [
                'Crystal-clear video and audio calls using modern WebRTC technology.',
                'AI-powered resume analyzer that gives candidates actionable improvement tips.',
                'Automatic generation of relevant interview questions based on each candidate\'s background.',
                'A modern interview experience that feels more collaborative than interrogative.'
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
            <section id={id} className="projects scroll-reveal" aria-label="Projects portfolio">
                <h2 className="section-title text-glow">Things I've Built</h2>

                <div className="projects-grid stagger-children">
                    {projects.map((project, index) => (
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
