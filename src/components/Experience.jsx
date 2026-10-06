import { useState } from 'react';
import { ChevronDown, Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = ({ id }) => {
    const [expandedIndex, setExpandedIndex] = useState(0); // Default open first item

    const experiences = [
        {
            title: 'Co-Founder',
            company: 'Almost Genius Labs',
            period: '2026 — Present',
            description: 'Building software products, SaaS solutions, AI applications, automation systems and digital solutions.',
            focusPoints: [
                'Product ideation & initial feature scoping',
                'Product strategy & market gap validation',
                'Software development & full-stack web architecture',
                'SaaS development & multi-tenant application design',
                'AI and automation workflows (n8n, LLM APIs)',
                'Client requirements gathering & solution engineering',
                'Business development & go-to-market execution',
                'Product validation through real user feedback'
            ]
        },
        {
            title: 'Co-Founder',
            company: 'Delintra Technologies',
            period: '2026 — Present',
            description: 'Building and exploring technology-driven products and business opportunities with a focus on scalable digital solutions.',
            focusPoints: [
                'Technology strategy & stack selection',
                'Product development & rapid MVP prototyping',
                'Business strategy & market opportunity analysis',
                'Innovation & digital solution design',
                'Digital solutions architecture',
                'Venture building & operational scaling'
            ]
        },
        {
            title: 'E-commerce Business Entrepreneur',
            company: 'Independent Business',
            period: '2026 — Present',
            description: 'Building hands-on experience in e-commerce, customer acquisition, sales, relationship management and business development.',
            focusPoints: [
                'E-commerce operations & storefront management',
                'Direct sales & pitch execution',
                'Customer acquisition & retention strategies',
                'Digital marketing & performance outreach',
                'Customer relationship management (CRM)',
                'Business development & revenue growth'
            ]
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id={id} className="experience glass-panel scroll-reveal">
            <span className="section-tagline">CAREER &amp; LEADERSHIP</span>
            <h2 className="section-title">Experience</h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker">
                            <Briefcase size={14} className="marker-icon" />
                        </div>
                        <div 
                            className={`timeline-content ${expandedIndex === index ? 'expanded' : ''}`}
                            onClick={() => toggleExpand(index)}
                        >
                            <div className="experience-header">
                                <div className="header-info">
                                    <h3 className="job-title">{exp.title}</h3>
                                    <p className="company-name">
                                        <span className="company">{exp.company}</span>
                                        <span className="period-badge">{exp.period}</span>
                                    </p>
                                </div>
                                <button 
                                    className={`expand-btn ${expandedIndex === index ? 'rotated' : ''}`}
                                    aria-expanded={expandedIndex === index}
                                    aria-label={`Toggle ${exp.title} details`}
                                >
                                    <ChevronDown size={18} />
                                </button>
                            </div>

                            <p className="experience-desc">{exp.description}</p>
                            
                            {expandedIndex === index && (
                                <div className="focus-section">
                                    <h4 className="focus-title">Core Focus &amp; Responsibilities:</h4>
                                    <ul className="focus-list">
                                        {exp.focusPoints.map((point, pIndex) => (
                                            <li key={pIndex}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
