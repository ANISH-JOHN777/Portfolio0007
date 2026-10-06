import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
    const educationItems = [
        {
            degree: 'B.Tech, Information Technology',
            institution: 'SNS College of Engineering',
            period: '2023–2027',
            score: 'CGPA: 8.51'
        },
        {
            degree: '12th Std',
            institution: 'Hope School',
            period: '2023',
            score: 'Percentage: 76%'
        }
    ];

    return (
        <section className="education glass-panel scroll-reveal">
            <span className="section-tagline">ACADEMIC BACKGROUND</span>
            <h2 className="section-title">Education</h2>

            <div className="education-compact-list">
                {educationItems.map((edu, idx) => (
                    <div key={idx} className="education-card">
                        <div className="edu-icon-wrap">
                            <GraduationCap size={18} className="edu-icon" />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <p className="edu-meta">
                                <span className="edu-inst">{edu.institution}</span>
                                <span className="edu-period">{edu.period}</span>
                            </p>
                            <span className="edu-score-badge">{edu.score}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
