import { Layers, Cpu, Globe, Briefcase, FlaskConical, CheckCircle2 } from 'lucide-react';
import './WhatIBuild.css';

const WhatIBuild = ({ id }) => {
    const buildAreas = [
        {
            num: '01',
            title: 'SaaS Products',
            description: 'Designing software products around recurring business problems and scalable business models.',
            capabilities: ['Subscription Architecture', 'Multi-tenant Systems', 'User Dashboard Design', 'Payment Workflows'],
            icon: <Layers size={26} className="area-icon" />
        },
        {
            num: '02',
            title: 'AI & Automation',
            description: 'Building intelligent workflows and automation systems that reduce repetitive work and improve efficiency.',
            capabilities: ['n8n Automation', 'LLM API Integration', 'Contextual Bots', 'Workflow Engines'],
            icon: <Cpu size={26} className="area-icon" />
        },
        {
            num: '03',
            title: 'Web Applications',
            description: 'Creating modern, responsive web applications with strong user experience and practical functionality.',
            capabilities: ['React & Vite Architecture', 'Responsive UI Systems', 'REST API Integration', 'Fast Performance'],
            icon: <Globe size={26} className="area-icon" />
        },
        {
            num: '04',
            title: 'Digital Business Solutions',
            description: 'Turning business requirements into usable digital products and systems.',
            capabilities: ['Process Engineering', 'Custom Invoicing & CRM', 'Client Tools', 'Operational Tech'],
            icon: <Briefcase size={26} className="area-icon" />
        },
        {
            num: '05',
            title: 'Product Experiments',
            description: 'Rapidly validating ideas, building MVPs, testing workflows, and learning from real users.',
            capabilities: ['Rapid Prototyping', 'MVP Validation', 'User Feedback Loops', 'Product Iteration'],
            icon: <FlaskConical size={26} className="area-icon" />
        }
    ];

    return (
        <section id={id} className="what-i-build glass-panel scroll-reveal">
            <span className="section-tagline">PRODUCT CAPABILITIES &amp; FOCUS</span>
            <h2 className="section-title">What I Build</h2>

            <div className="build-grid">
                {buildAreas.map((area) => (
                    <div key={area.num} className="build-card">
                        <div className="build-card-top">
                            <span className="area-num">{area.num}</span>
                            <div className="area-icon-box">{area.icon}</div>
                        </div>
                        <h3 className="area-title">{area.title}</h3>
                        <p className="area-desc">{area.description}</p>

                        <div className="area-capabilities">
                            {area.capabilities.map((cap, cIdx) => (
                                <span key={cIdx} className="cap-pill">
                                    <CheckCircle2 size={12} className="cap-check" /> {cap}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatIBuild;
