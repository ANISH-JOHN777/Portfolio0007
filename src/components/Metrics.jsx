import { useEffect, useState } from 'react';
import { Code, GitBranch, Users, Linkedin, Award, Calendar } from 'lucide-react';
import './Metrics.css';

const Metrics = ({ id }) => {
    const [counts, setCounts] = useState({
        projects: 0,
        linesOfCode: 0,
        githubStars: 0,
        linkedinConnections: 0,
        yearsExperience: 0,
        achievements: 0
    });

    const targetValues = {
        projects: 25,
        linesOfCode: 50000,
        githubStars: 120,
        linkedinConnections: 500,
        yearsExperience: 2,
        achievements: 15
    };

    useEffect(() => {
        const duration = 2000; // 2 seconds animation
        const steps = 60;
        const interval = duration / steps;

        const animateValue = (key, target) => {
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                setCounts(prev => ({
                    ...prev,
                    [key]: Math.floor(current)
                }));
            }, interval);
        };

        Object.entries(targetValues).forEach(([key, value]) => {
            animateValue(key, value);
        });
    }, []);

    const metrics = [
        {
            icon: <Code size={32} />,
            value: counts.projects,
            label: 'Projects Completed',
            suffix: '+'
        },
        {
            icon: <GitBranch size={32} />,
            value: counts.linesOfCode.toLocaleString(),
            label: 'Lines of Code',
            suffix: '+'
        },
        {
            icon: <Users size={32} />,
            value: counts.githubStars,
            label: 'GitHub Stars',
            suffix: '+'
        },
        {
            icon: <Linkedin size={32} />,
            value: counts.linkedinConnections,
            label: 'LinkedIn Connections',
            suffix: '+'
        },
        {
            icon: <Calendar size={32} />,
            value: counts.yearsExperience,
            label: 'Years of Experience',
            suffix: '+'
        },
        {
            icon: <Award size={32} />,
            value: counts.achievements,
            label: 'Achievements',
            suffix: '+'
        }
    ];

    return (
        <section id={id} className="metrics glass-panel scroll-reveal">
            <h2 className="section-title text-glow">SUCCESS METRICS</h2>
            <div className="metrics-grid stagger-children">
                {metrics.map((metric, index) => (
                    <div 
                        key={index} 
                        className="metric-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="metric-icon">{metric.icon}</div>
                        <div className="metric-value">
                            {metric.value}{metric.suffix}
                        </div>
                        <div className="metric-label">{metric.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Metrics;
