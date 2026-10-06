import { Play, Linkedin, Github, Code2 } from 'lucide-react';
import './Footer.css';

const Footer = ({ onPlayGame }) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand-block">
                    <h3 className="footer-brand-name">M. ANISH JOHN</h3>
                    <p className="footer-positioning">Entrepreneur • Product Builder • Technology</p>
                    <p className="footer-ventures">Almost Genius Labs &amp; Delintra Technologies</p>
                </div>

                <div className="footer-links-block">
                    <div className="footer-social-row">
                        <a href="https://www.linkedin.com/in/m-anish-raj/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://github.com/ANISH-JOHN777/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://leetcode.com/u/anishjohnm/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                            <Code2 size={18} />
                        </a>
                    </div>

                    <button className="footer-game-btn" onClick={onPlayGame} title="Play interactive typing mini game">
                        <Play size={14} fill="currentColor" />
                        <span>Play Type Rush</span>
                    </button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 M. Anish John. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
