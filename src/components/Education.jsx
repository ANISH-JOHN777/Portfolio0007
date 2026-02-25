import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'B-Tech, Information Technology',
            institution: 'SNS College of Engineering',
            period: '2023-2027',
            grade: 'CGPA: 8.51'
        },
        {
            degree: '12th Std',
            institution: 'Hope School',
            period: '2023',
            grade: 'Percentage: 76%'
        }
    ];

    return (
        <section className="education glass-panel scroll-reveal-left">
            <h2 className="section-title text-glow">My Education</h2>
            <div className="education-list stagger-children">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3 className="degree">{edu.degree}</h3>
                        <p className="institution">{edu.institution} | {edu.period}</p>
                        <p className="grade">{edu.grade}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
