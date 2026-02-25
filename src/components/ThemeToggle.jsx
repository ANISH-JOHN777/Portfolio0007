import { Sun } from 'lucide-react';
import './ThemeToggle.css';
import lanternIcon from '../assets/latternF.png';

const VintageLantern = ({ isGlowing }) => (
    <img 
        src={lanternIcon} 
        alt="Lantern" 
        className={`lantern-icon ${isGlowing ? 'glowing' : ''}`}
        style={{ width: '38px', height: '38px' }}
    />
);

const ThemeToggle = ({ theme, onToggle, isHidden }) => {
    if (isHidden) return null;
    const isDark = theme === 'dark';
    
    return (
        <button
            className={`theme-toggle ${isDark ? 'dark-mode' : 'light-mode'}`}
            onClick={onToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            {isDark ? (
                <Sun size={20} aria-hidden="true" />
            ) : (
                <VintageLantern isGlowing={false} />
            )}
        </button>
    );
};

export default ThemeToggle;
