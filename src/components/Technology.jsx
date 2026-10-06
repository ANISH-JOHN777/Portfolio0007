import { Code, Cpu, Terminal, Palette, TrendingUp } from 'lucide-react';
import './Technology.css';

const Technology = ({ id }) => {
    const techCategories = [
        {
            title: 'PRODUCT & SOFTWARE',
            icon: <Code size={20} className="tech-cat-icon" />,
            skills: ['React', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'REST APIs']
        },
        {
            title: 'AI & AUTOMATION',
            icon: <Cpu size={20} className="tech-cat-icon" />,
            skills: ['AI Applications', 'Generative AI', 'Automation', 'n8n', 'RAG', 'AI Workflows']
        },
        {
            title: 'DEVELOPMENT',
            icon: <Terminal size={20} className="tech-cat-icon" />,
            skills: ['Git', 'GitHub', 'Vite', 'Tailwind CSS', 'Supabase', 'Firebase']
        },
        {
            title: 'PRODUCT & DESIGN',
            icon: <Palette size={20} className="tech-cat-icon" />,
            skills: ['UI/UX', 'Product Thinking', 'Prototyping', 'Design Systems']
        },
        {
            title: 'BUSINESS',
            icon: <TrendingUp size={20} className="tech-cat-icon" />,
            skills: ['Product Strategy', 'Market Research', 'Business Development', 'E-commerce', 'Customer Acquisition']
        }
    ];

    return (
        <section id={id} className="technology glass-panel scroll-reveal">
            <span className="section-tagline">TECHNICAL &amp; STRATEGIC CAPABILITIES</span>
            <h2 className="section-title">Technology</h2>

            <div className="technology-grid">
                {techCategories.map((category, index) => (
                    <div key={index} className="tech-category-card">
                        <div className="tech-category-header">
                            {category.icon}
                            <h3 className="tech-category-title">{category.title}</h3>
                        </div>

                        <div className="tech-skills-list">
                            {category.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="tech-skill-badge">
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

export default Technology;
