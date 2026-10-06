import { ArrowUpRight, Zap, Cpu, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import './Ventures.css';

const Ventures = ({ id }) => {
    const venturesData = [
        {
            id: 'agl',
            title: 'ALMOST GENIUS LABS',
            badge: 'FLAGSHIP VENTURE',
            category: 'Technology • SaaS • AI • Automation',
            description: 'A technology venture focused on building practical software products and digital solutions for real-world business problems.',
            highlights: ['SaaS Products', 'AI Workflows', 'n8n Automations', 'Digital Solutions'],
            cta: 'Explore AGL Capabilities',
            link: '#contact',
            icon: <Zap size={26} className="venture-icon agl" />,
            theme: 'agl-theme',
            status: 'ACTIVE BUILD PHASE'
        },
        {
            id: 'delintra',
            title: 'DELINTRA TECHNOLOGIES',
            badge: 'TECHNOLOGY & PRODUCT LAB',
            category: 'Technology • Products • Business',
            description: 'A technology-focused venture exploring digital products, business opportunities, and scalable technology solutions.',
            highlights: ['Product Development', 'Digital Platforms', 'Business Opportunities', 'Venture Strategy'],
            cta: 'Explore Delintra Solutions',
            link: '#contact',
            icon: <Cpu size={26} className="venture-icon delintra" />,
            theme: 'delintra-theme',
            status: 'EXPLORATION & DEV'
        },
        {
            id: 'ecommerce',
            title: 'E-COMMERCE BUSINESS',
            badge: 'COMMERCE & GROWTH',
            category: 'Commerce • Sales • Customer Growth',
            description: 'Building hands-on experience in e-commerce, customer acquisition, relationship management, sales, and business development.',
            highlights: ['Customer Acquisition', 'Direct Sales', 'CRM Systems', 'Business Growth'],
            cta: 'Connect On Commerce',
            link: '#contact',
            icon: <ShoppingBag size={26} className="venture-icon ecommerce" />,
            theme: 'ecommerce-theme',
            status: 'OPERATIONAL'
        }
    ];

    return (
        <section id={id} className="ventures glass-panel scroll-reveal">
            <span className="section-tagline">VENTURE BUILDING &amp; EXECUTION</span>
            <h2 className="section-title">Building Ventures</h2>

            <div className="ventures-grid">
                {venturesData.map((venture) => (
                    <div key={venture.id} className={`venture-card ${venture.theme}`}>
                        <div className="venture-card-top">
                            <div className="venture-header-meta">
                                <span className="venture-badge">{venture.badge}</span>
                                <span className="venture-status">
                                    <span className="status-indicator"></span>
                                    {venture.status}
                                </span>
                            </div>
                            <div className="venture-icon-box">{venture.icon}</div>
                        </div>

                        <h3 className="venture-title">{venture.title}</h3>
                        <p className="venture-category">{venture.category}</p>
                        <p className="venture-description">{venture.description}</p>

                        <div className="venture-highlights">
                            {venture.highlights.map((item, idx) => (
                                <span key={idx} className="highlight-tag">
                                    <ShieldCheck size={12} /> {item}
                                </span>
                            ))}
                        </div>

                        <div className="venture-footer">
                            <a href={venture.link} className="venture-cta">
                                <span>{venture.cta}</span>
                                <ArrowUpRight size={18} className="cta-arrow" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Ventures;
