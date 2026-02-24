import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onPlayGame, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const navItems = [
        { id: 'home', label: 'Home', href: '#hero' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'skills', label: 'Skills', href: '#skills' },
        { id: 'experience', label: 'Experience', href: '#experience' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'blog', label: 'Blog', href: '#blog' },
        { id: 'contact', label: 'Contact', href: '#contact' }
    ];

    const isDark = theme === 'dark';
    const bgColor = isDark ? '#111111' : '#f8f9fa';
    const textColor = isDark ? '#d1d5db' : '#4b5563';
    const activeColor = '#8b5cf6';
    const logoColor = isDark ? '#a78bfa' : '#7c3aed';

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    currentSection = section.id || 'home';
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 70;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav className="navbar" style={{ 
                background: bgColor,
                borderBottom: '2px solid #8b5cf6',
            }}>
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <div 
                            className="brand-logo"
                            style={{ color: logoColor }}
                            onClick={() => handleNavClick('#hero')}
                        >
                            M ANISH JOHN
                        </div>
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
                                style={{ 
                                    color: activeSection === item.id ? activeColor : textColor,
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                        <button 
                            onClick={onPlayGame}
                            className="nav-game-btn"
                        >
                            ▶ Play
                        </button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="navbar-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ display: isMobile ? 'flex' : 'none' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobile && isOpen && (
                    <div className="navbar-mobile active">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                                style={{ 
                                    color: activeSection === item.id ? activeColor : textColor,
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                        <button 
                            onClick={() => {
                                onPlayGame();
                                setIsOpen(false);
                            }}
                            className="mobile-nav-game-btn"
                        >
                            <Gamepad2 size={18} />
                            Play Game
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
