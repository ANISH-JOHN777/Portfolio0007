import './Footer.css';

const Footer = ({ onPlayGame }) => {
    return (
        <footer className="footer">
            <button className="play-game-btn" onClick={onPlayGame}>
                ▶ Play SkyPop
            </button>
            <p>&copy; 2025 M Anish John. All systems operational.</p>
        </footer>
    );
};

export default Footer;
