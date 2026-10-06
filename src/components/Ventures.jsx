import { ArrowUpRight, Zap, Cpu, ShoppingBag } from 'lucide-react';
import './Ventures.css';

const Ventures = ({ id }) => {
    const venturesData = [
        {
            id: 'agl',
            title: 'ALMOST GENIUS LABS',
            badge: 'FLAGSHIP VENTURE',
            category: 'Technology • SaaS • AI • Automation',
            description: 'A technology venture focused on building practical software products and digital solutions for real-world business problems.',
            cta: 'Explore AGL',
            link: '#contact',
            icon: <Zap size={24} className="venture-icon agl" />,
            theme: 'agl-theme'
        },
        {
            id: 'delintra',
            title: 'DELINTRA TECHNOLOGIES',
            badge: 'TECHNOLOGY & PRODUCT LAB',
            category: 'Technology • Products • Business',
            description: 'A technology-focused venture exploring digital products, business opportunities, and scalable technology solutions.',
            cta: 'Explore Delintra',
            link: '#contact',
            icon: <Cpu size={24} className="venture-icon delintra" />,
            theme: 'delintra-theme'
        },
        {
            id: 'ecommerce',
            title: 'E-COMMERCE BUSINESS',
            badge: 'COMMERCE & GROWTH',
            category: 'Commerce • Sales • Customer Growth',
            description: 'Building hands-on experience in e-commerce, customer acquisition, relationship management, sales, and business development.',
            cta: 'Connect On Commerce',
            link: '#contact',
            icon: <ShoppingBag size={24} className="venture-icon ecommerce" />,
            theme: 'ecommerce-theme'
        }
    ];

    return (
        <section id={id} className="ventures glass-panel scroll-reveal">
            <span className="section-tagline">VENTURE BUILDING</span>
            <h2 className="section-title">Building Ventures</h2>

            <div className="ventures-grid">
                {venturesData.map((venture) => (
                    <div key={venture.id} className={`venture-card ${venture.theme}`}>
                        <div className="venture-card-header">
                            <span className="venture-badge">{venture.badge}</span>
                            {venture.icon}
                        </div>

                        <h3 className="venture-title">{venture.title}</h3>
                        <p className="venture-category">{venture.category}</p>
                        <p className="venture-description">{venture.description}</p>

                        <div className="venture-footer">
                            <a href={venture.link} className="venture-cta">
                                <span>{venture.cta}</span>
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Ventures;
