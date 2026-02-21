import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, onToggle }) => {
    return (
        <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
            {theme === 'dark' ? (
                <Sun size={20} aria-hidden="true" />
            ) : (
                <Moon size={20} aria-hidden="true" />
            )}
        </button>
    );
};

export default ThemeToggle;
