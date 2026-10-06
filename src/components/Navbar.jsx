import { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onPlayGame, isHidden }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', label: 'Home', href: '#hero' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'ventures', label: 'Ventures', href: '#ventures' },
        { id: 'experience', label: 'Experience', href: '#experience' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'insights', label: 'Insights', href: '#insights' },
        { id: 'contact', label: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
            let current = 'hero';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120;
                if (window.scrollY >= sectionTop) {
                    current = section.id || 'hero';
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
            <div className="navbar-container">
                <div 
                    className="brand-logo"
                    onClick={() => handleNavClick('#hero')}
                >
                    <span className="brand-name">M. ANISH JOHN</span>
                    <span className="brand-dot"></span>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-menu">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Navbar Action Buttons */}
                <div className="navbar-actions">
                    <button 
                        onClick={onPlayGame}
                        className="nav-game-btn"
                        title="Play interactive mini game"
                    >
                        <Play size={13} fill="currentColor" />
                        <span>Play</span>
                    </button>

                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#contact');
                        }}
                        className="nav-cta-btn"
                    >
                        Let's Connect
                    </a>

                    <button
                        className="navbar-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="navbar-mobile">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="mobile-actions">
                        <button 
                            onClick={() => {
                                onPlayGame();
                                setIsOpen(false);
                            }}
                            className="mobile-game-btn"
                        >
                            <Play size={15} fill="currentColor" />
                            <span>Play Interactive Game</span>
                        </button>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#contact');
                            }}
                            className="mobile-cta-btn"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
