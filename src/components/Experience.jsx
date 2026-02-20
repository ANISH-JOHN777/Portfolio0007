import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Product Manager',
            company: 'Almost genius labs',
            period: '',
            responsibilities: [
                'Developed and maintained web applications to enhance user experience and functionality.',
                'Collaborated with teams to gather requirements and translate them into technical specifications.',
                'Managed project timelines and deliverables, ensuring on-time completion of tasks.'
            ]
        },
        {
            title: 'Web Developer Intern',
            company: 'RETECH solution',
            period: 'May 2025',
            responsibilities: [
                'Developed web applications over a period of 21 days, utilizing HTML, CSS, and JavaScript.',
                'Engaged in projects focused on artificial intelligence for 30 days.'
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
