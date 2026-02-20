import { Mail, Phone, Linkedin, Github, Code2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero scroll-reveal">
            <div className="hero-content">
                <h1 className="hero-title text-glow">M ANISH JOHN</h1>
                <p className="hero-subtitle">Web Developer & Digital Explorer</p>

                <div className="hero-contact">
                    <div className="contact-item">
                        <Phone className="icon-glow" size={20} />
                        <span>8072937674</span>
                    </div>
                    <div className="contact-item">
                        <Mail className="icon-glow" size={20} />
                        <span>anishjohn0007@gmail.com</span>
                    </div>
                </div>

                <div className="hero-social">
                    <a
                        href="https://www.linkedin.com/in/m-anish-raj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <Linkedin className="icon-glow" size={24} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/ANISH-JOHN777/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <Github className="icon-glow" size={24} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://leetcode.com/u/anishjohnm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <Code2 className="icon-glow" size={24} />
                        <span>LeetCode</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
