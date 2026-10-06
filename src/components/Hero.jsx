import { ArrowRight, Download, Linkedin, Github, Code2, Sparkles, Building2, Layers, Cpu, Compass } from 'lucide-react';
import jsPDF from 'jspdf';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = ({ id }) => {
    const handleDownloadResume = () => {
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const goldColor = [212, 175, 55];
        const textColor = [20, 20, 20];
        const lightColor = [100, 100, 105];

        let y = 22;

        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(22);
        pdf.setTextColor(...goldColor);
        pdf.text('M. ANISH JOHN', 105, y, { align: 'center' });

        y += 8;
        pdf.setFont('Helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(...lightColor);
        pdf.text('ENTREPRENEUR • PRODUCT BUILDER • TECHNOLOGY', 105, y, { align: 'center' });

        y += 5;
        pdf.setFontSize(9);
        pdf.text('Co-Founder @ Almost Genius Labs & Delintra Technologies', 105, y, { align: 'center' });

        y += 6;
        pdf.setDrawColor(...goldColor);
        pdf.line(20, y, 190, y);

        y += 8;
        pdf.setFontSize(9);
        pdf.text('Email: anishjohn0007@gmail.com | Phone: +91 8072937674 | Web: portfolio0007-tau.vercel.app', 105, y, { align: 'center' });
        y += 4;
        pdf.text('LinkedIn: linkedin.com/in/m-anish-raj | GitHub: github.com/ANISH-JOHN777', 105, y, { align: 'center' });

        const addSection = (title, content) => {
            y += 8;
            pdf.setFont('Helvetica', 'bold');
            pdf.setFontSize(11);
            pdf.setTextColor(...goldColor);
            pdf.text(title, 20, y);

            const titleWidth = pdf.getTextWidth(title);
            pdf.setDrawColor(...goldColor);
            pdf.line(20, y + 1.5, 20 + titleWidth, y + 1.5);

            y += 7;
            pdf.setFont('Helvetica', 'normal');
            pdf.setFontSize(9.5);
            pdf.setTextColor(...textColor);

            const lines = pdf.splitTextToSize(content, 170);
            lines.forEach(line => {
                if (y > 270) {
                    pdf.addPage();
                    y = 20;
                }
                pdf.text(line, 20, y);
                y += 5;
            });
        };

        addSection('EXECUTIVE SUMMARY', 'Entrepreneur and product builder focused on software products, SaaS platforms, AI solutions, and automation systems. Co-founder of Almost Genius Labs and Delintra Technologies, driving technology ideation, product strategy, end-to-end development, and business growth.');
        addSection('VENTURES & EXPERIENCE', '• Co-Founder @ Almost Genius Labs (2026 - Present): Building software products, SaaS platforms, AI workflows and automation solutions.\n• Co-Founder @ Delintra Technologies (2026 - Present): Exploring technology-driven products and business opportunities.\n• E-commerce Entrepreneur (2026 - Present): Customer acquisition, digital sales, and business development.');
        addSection('FEATURED PRODUCTS', '• CastReach: AI-powered podcast networking & guest outreach platform.\n• FinalTrip AI: AI travel itinerary & workflow planner.\n• StickyNode: Desktop productivity notes & contextual reminders.\n• Asteroid Impact Simulator: Interactive Three.js planetary impact visualizer.');
        addSection('CORE COMPETENCIES', 'SaaS Products, AI Applications, Automation (n8n), Web Apps (React, Node, Python, Vite), Product Strategy, Business Development, UI/UX Systems.');
        addSection('EDUCATION & CERTIFICATIONS', 'B.Tech in Information Technology - SNS College of Engineering (2023-2027) | CGPA: 8.51\nIEEE & IJARESM Research Publications | Web Development & Full-Stack Certifications.');

        pdf.save('M_Anish_John_Profile.pdf');
    };

    return (
        <header id={id} className="hero scroll-reveal">
            <div className="hero-container">
                {/* Founder Halo Portrait */}
                <div className="hero-portrait-wrapper">
                    <div className="portrait-halo"></div>
                    <div className="portrait-ring">
                        <img src={profileImg} alt="M. Anish John - Entrepreneur &amp; Product Builder" className="hero-portrait-img" />
                    </div>
                    <div className="portrait-status-dot" title="Actively building ventures &amp; products">
                        <span className="dot-ping"></span>
                        <span className="dot-core"></span>
                    </div>
                </div>

                {/* Subtitle Badge */}
                <div className="hero-badge">
                    <Sparkles size={14} className="gold-icon" />
                    <span>ENTREPRENEUR • PRODUCT BUILDER • TECHNOLOGY</span>
                </div>

                <h1 className="hero-name">M. ANISH JOHN</h1>

                <h2 className="hero-headline">
                    Building Ideas Into <span className="text-gold-gradient">Scalable Technology.</span>
                </h2>

                <p className="hero-supporting">
                    I build software products, SaaS platforms, AI solutions and automation systems that turn real-world problems into practical digital experiences.
                </p>

                {/* Founder Venture Tags */}
                <div className="hero-founder-tag">
                    <span className="founder-label">Co-Founder @</span>
                    <span className="venture-tag gold">Almost Genius Labs</span>
                    <span className="divider">&amp;</span>
                    <span className="venture-tag">Delintra Technologies</span>
                </div>

                {/* Hero CTAs */}
                <div className="hero-actions">
                    <a href="#ventures" className="btn-gold">
                        <span>Explore My Work</span>
                        <ArrowRight size={18} />
                    </a>

                    <a href="#contact" className="btn-outline-gold">
                        <span>Let's Connect</span>
                    </a>

                    <button onClick={handleDownloadResume} className="btn-resume-download" title="Download executive summary PDF">
                        <Download size={16} />
                        <span>Executive Summary</span>
                    </button>
                </div>

                {/* Quick Highlight Stats Strip */}
                <div className="hero-stats-strip">
                    <div className="hero-stat-box">
                        <Building2 size={18} className="stat-icon" />
                        <div className="stat-text">
                            <span className="stat-num">2</span>
                            <span className="stat-lbl">Active Ventures</span>
                        </div>
                    </div>
                    <div className="hero-stat-box">
                        <Layers size={18} className="stat-icon" />
                        <div className="stat-text">
                            <span className="stat-num">4+</span>
                            <span className="stat-lbl">Flagship Products</span>
                        </div>
                    </div>
                    <div className="hero-stat-box">
                        <Cpu size={18} className="stat-icon" />
                        <div className="stat-text">
                            <span className="stat-num">AI &amp; SaaS</span>
                            <span className="stat-lbl">Core Focus</span>
                        </div>
                    </div>
                </div>

                {/* Social Strip */}
                <div className="hero-social-strip">
                    <a href="https://www.linkedin.com/in/m-anish-raj/" target="_blank" rel="noopener noreferrer" className="social-pill">
                        <Linkedin size={15} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/ANISH-JOHN777/" target="_blank" rel="noopener noreferrer" className="social-pill">
                        <Github size={15} />
                        <span>GitHub</span>
                    </a>
                    <a href="https://leetcode.com/u/anishjohnm/" target="_blank" rel="noopener noreferrer" className="social-pill">
                        <Code2 size={15} />
                        <span>LeetCode</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
