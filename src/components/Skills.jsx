import './Skills.css';

const Skills = ({ id }) => {
    const skillCategories = [
        {
            title: 'Web Development',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Responsive Design']
        },
        {
            title: 'Programming & Tools',
            skills: ['Python', 'GitHub', 'Version Control']
        },
        {
            title: 'Design & Creativity',
            skills: ['UI/UX Design', 'Canva', 'Design Thinking']
        },
        {
            title: 'Automation & Workflow',
            skills: ['n8n Automation', 'Process Optimization']
        },
        {
            title: 'Problem Solving',
            skills: ['Debugging', 'Critical Thinking', 'User-Centered Solutions']
        }
    ];

    return (
        <section id={id} className="skills glass-panel scroll-reveal">
            <h2 className="section-title text-glow">What I Work With</h2>
            <div className="skills-grid stagger-children">
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
