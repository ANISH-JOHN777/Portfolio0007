import './Skills.css';

const Skills = ({ id }) => {
    const skillCategories = [
        {
            title: 'Navigation & Propulsion',
            skills: ['HTML', 'CSS', 'JavaScript', 'Front End Coding', 'Web Design', 'WordPress']
        },
        {
            title: 'Core Systems',
            skills: ['Python', 'React', 'GitHub']
        },
        {
            title: 'Design Blueprints',
            skills: ['Design Thinking', 'Canva']
        },
        {
            title: 'Automated Systems',
            skills: ['n8n Automation']
        },
        {
            title: 'Crew Competencies',
            skills: ['Problem-Solving']
        }
    ];

    return (
        <section id={id} className="skills glass-panel scroll-reveal">
            <h2 className="section-title text-glow">TECH CONSTELLATION</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
