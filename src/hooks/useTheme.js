import { useEffect, useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';
        
        // Check localStorage first
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        
        // Default to light theme for new users
        return 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        
        if (theme === 'light') {
            root.classList.add('light-theme');
        } else {
            root.classList.remove('light-theme');
        }
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return { theme, toggleTheme };
};

export default useTheme;
