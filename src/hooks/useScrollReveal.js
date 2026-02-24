import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% visible
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing after reveal (remove for repeating animations)
                    // observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Observe all scroll-reveal elements (including variants)
        const scrollSelectors = [
            '.scroll-reveal',
            '.scroll-reveal-left',
            '.scroll-reveal-right',
            '.scroll-reveal-scale',
            '.scroll-reveal-rotate',
            '.stagger-children'
        ];

        const allElements = [];
        scrollSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                observer.observe(el);
                allElements.push(el);
            });
        });

        // Apply staggered delays to child elements
        const staggeredContainers = document.querySelectorAll('.stagger-children');
        staggeredContainers.forEach((container) => {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
                child.style.transitionDelay = `${index * 0.1}s`;
            });
        });

        return () => {
            allElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useScrollReveal;
