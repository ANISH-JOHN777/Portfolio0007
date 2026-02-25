import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Experience.css';

const Experience = ({ id }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const experiences = [
        {
            title: 'Product Manager',
            company: 'Almost Genius Labs',
            period: '6 months',
            responsibilities: [
                'Built and maintained web applications that people actually used - focusing on making sure they worked smoothly and made sense to users.',
                'Worked closely with the team to understand what was needed and figured out how to make it happen technically.',
                'Kept projects on track, made sure deadlines were met, and learned a ton about managing both code and expectations.'
            ]
        },
        {
            title: 'Web Developer Intern',
            company: '21 RETECH Solution',
            period: 'May 2025 - Present',
            responsibilities: [
                'Creating web applications with HTML, CSS, and JavaScript - the building blocks I really enjoy working with.',
                'Getting my hands on modern frameworks and tools, learning how professional developers approach problems.',
                'Working alongside experienced developers who taught me better ways to write cleaner, more efficient code.',
                'Participating in code reviews where I got honest feedback and learned that there\'s always room to improve.'
            ]
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id={id} className="experience glass-panel scroll-reveal">
            <h2 className="section-title text-glow">My Journey So Far</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div 
                            className={`timeline-content ${expandedIndex === index ? 'expanded' : ''}`}
                            onClick={() => toggleExpand(index)}
                        >
                            <div className="experience-header">
                                <div className="header-content">
                                    <h3 className="job-title">{exp.title}</h3>
                                    <p className="company-name">
                                        {exp.company}
                                        {exp.period && <span className="period"> | {exp.period}</span>}
                                    </p>
                                </div>
                                <button 
                                    className={`expand-btn ${expandedIndex === index ? 'rotated' : ''}`}
                                    aria-expanded={expandedIndex === index}
                                    aria-label={`${expandedIndex === index ? 'Collapse' : 'Expand'} ${exp.title} details`}
                                >
                                    <ChevronDown size={20} />
                                </button>
                            </div>
                            
                            {expandedIndex === index && (
                                <ul className="responsibilities expanded-content">
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
