import { Award, BookOpen, Trophy, CheckCircle2 } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
    const categories = [
        {
            title: 'PUBLICATIONS',
            icon: <BookOpen size={18} className="achievement-cat-icon" />,
            items: ['IJARESM Publication', 'IEEE Publication']
        },
        {
            title: 'INNOVATION',
            icon: <Award size={18} className="achievement-cat-icon" />,
            items: ['Hackathon Projects', 'NASA Space Apps Challenge Project']
        },
        {
            title: 'SPORTS',
            icon: <Trophy size={18} className="achievement-cat-icon" />,
            items: ['State-Level Hockey', 'District-Level Football']
        },
        {
            title: 'CERTIFICATIONS',
            icon: <CheckCircle2 size={18} className="achievement-cat-icon" />,
            items: ['Web Development Certification', 'Full-Stack Development Certification']
        }
    ];

    return (
        <section className="achievements glass-panel scroll-reveal">
            <span className="section-tagline">HONORS &amp; ACCOMPLISHMENTS</span>
            <h2 className="section-title">Beyond Building</h2>

            <div className="achievements-compact-grid">
                {categories.map((cat, idx) => (
                    <div key={idx} className="achievement-box">
                        <div className="achievement-box-header">
                            {cat.icon}
                            <h3 className="achievement-box-title">{cat.title}</h3>
                        </div>
                        <ul className="achievement-box-items">
                            {cat.items.map((item, iIdx) => (
                                <li key={iIdx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
