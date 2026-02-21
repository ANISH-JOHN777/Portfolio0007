import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Product Manager',
            company: 'Almost Genius Labs',
            period: '6 months',
            responsibilities: [
                'Developed and maintained web applications to enhance user experience and functionality.',
                'Collaborated with teams to gather requirements and translate them into technical specifications.',
                'Managed project timelines and deliverables, ensuring on-time completion of tasks.'
            ]
        },
        {
            title: 'Web Developer Intern',
            company: '21 RETECH Solution',
            period: 'May 2025 - Present',
            responsibilities: [
                'Developed web applications utilizing HTML, CSS, and JavaScript.',
                'Engaged with cutting-edge technologies and frameworks for modern web development.',
                'Collaborated with senior developers to implement best practices and optimize code quality.',
                'Participated in code reviews and learned industry-standard development workflows.'
            ]
        }
    ];

    return (
        <section className="experience glass-panel scroll-reveal">
            <h2 className="section-title text-glow">PROFESSIONAL VOYAGES</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="job-title">{exp.title}</h3>
                            <p className="company-name">
                                {exp.company}
                                {exp.period && <span className="period"> | {exp.period}</span>}
                            </p>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((resp, respIndex) => (
                                    <li key={respIndex}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
