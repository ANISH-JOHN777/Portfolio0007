import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onPlayGame, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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
    const activeColor = '#0284c7';
    const logoColor = isDark ? '#38bdf8' : '#0284c7';

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
        <nav style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            width: '100%', 
            height: '70px', 
            background: bgColor,
            borderBottom: '2px solid #38bdf8',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            paddingRight: '20px',
            boxSizing: 'border-box',
            boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ color: logoColor, fontSize: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => handleNavClick('#hero')}>
                    M ANISH JOHN
                </div>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            style={{ 
                                color: activeSection === item.id ? activeColor : textColor,
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'color 0.3s'
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <button 
                        onClick={onPlayGame}
                        style={{
                            background: '#38bdf8',
                            color: '#fff',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        ▶ Play
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
