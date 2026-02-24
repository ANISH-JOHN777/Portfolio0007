import './Footer.css';
import { Play } from 'lucide-react';

const Footer = ({ onPlayGame }) => {
    return (
        <footer className="footer">
            <button className="play-game-btn" onClick={onPlayGame}>
                <Play size={20} /> Play Type Rush
            </button>
            <p>&copy; 2025 M Anish John. All systems operational.</p>
        </footer>
    );
};

export default Footer;
