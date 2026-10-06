import { Layers, Cpu, Globe, Briefcase, FlaskConical } from 'lucide-react';
import './WhatIBuild.css';

const WhatIBuild = ({ id }) => {
    const buildAreas = [
        {
            num: '01',
            title: 'SaaS Products',
            description: 'Designing software products around recurring business problems and scalable business models.',
            icon: <Layers size={24} className="area-icon" />
        },
        {
            num: '02',
            title: 'AI & Automation',
            description: 'Building intelligent workflows and automation systems that reduce repetitive work and improve efficiency.',
            icon: <Cpu size={24} className="area-icon" />
        },
        {
            num: '03',
            title: 'Web Applications',
            description: 'Creating modern, responsive web applications with strong user experience and practical functionality.',
            icon: <Globe size={24} className="area-icon" />
        },
        {
            num: '04',
            title: 'Digital Business Solutions',
            description: 'Turning business requirements into usable digital products and systems.',
            icon: <Briefcase size={24} className="area-icon" />
        },
        {
            num: '05',
            title: 'Product Experiments',
            description: 'Rapidly validating ideas, building MVPs, testing workflows, and learning from real users.',
            icon: <FlaskConical size={24} className="area-icon" />
        }
    ];

    return (
        <section id={id} className="what-i-build glass-panel scroll-reveal">
            <span className="section-tagline">PRODUCT CAPABILITIES</span>
            <h2 className="section-title">What I Build</h2>

            <div className="build-grid">
                {buildAreas.map((area) => (
                    <div key={area.num} className="build-card">
                        <div className="build-card-top">
                            <span className="area-num">{area.num}</span>
                            {area.icon}
                        </div>
                        <h3 className="area-title">{area.title}</h3>
                        <p className="area-desc">{area.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatIBuild;
