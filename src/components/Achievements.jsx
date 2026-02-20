import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            title: 'Certifications',
            description: 'Web Development, Full Stack Web Development'
        },
        {
            title: 'Publications',
            description: 'IJARESM Publication'
        },
        {
            title: 'Extracurricular Missions',
            description: 'State level in Hockey, District level in Football'
        }
    ];

    return (
        <section className="achievements glass-panel scroll-reveal">
            <h2 className="section-title text-glow">GALACTIC CREDENTIALS</h2>
            <div className="achievements-list">
                {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-description">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
