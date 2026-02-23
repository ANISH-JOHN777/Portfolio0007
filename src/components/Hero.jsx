import { Mail, Phone, Linkedin, Github, Code2, Download } from 'lucide-react';
import './Hero.css';

const Hero = ({ id }) => {
    const handleDownloadResume = () => {
        // Create a simple resume and trigger download
        const resumeData = `
M ANISH JOHN
Web Developer & Digital Explorer
=====================================

CONTACT INFORMATION:
Email: anishjohn0007@gmail.com
Phone: +91 8072937674
LinkedIn: https://www.linkedin.com/in/m-anish-raj/
GitHub: https://github.com/ANISH-JOHN777/
LeetCode: https://leetcode.com/u/anishjohnm/

PROFESSIONAL SUMMARY:
A passionate Web Developer with hands-on experience building dynamic and user-friendly
websites using HTML, CSS, JavaScript, and React. Adept at problem-solving and UI design,
with a proven track record of creating real-world applications like bike rentals and
billing systems. Eager to innovate and tackle new tech challenges with a creative mindset.

EDUCATION:
B-Tech in Information Technology
SNS College of Engineering (2023-2027)
CGPA: 8.51

12th Standard
Hope School (2023)
Percentage: 76%

TECHNICAL SKILLS:
Navigation & Propulsion: HTML, CSS, JavaScript, Web Design, WordPress
Core Systems: Python, React, GitHub
Design Blueprints: Design Thinking, Canva
Automated Systems: n8n Automation
Crew Competencies: Problem-Solving

PROFESSIONAL EXPERIENCE:
Product Manager - Almost Genius Labs
- Developed and maintained web applications to enhance user experience and functionality
- Collaborated with teams to gather requirements and translate them into technical specifications
- Managed project timelines and deliverables, ensuring on-time completion

Web Developer Intern - RETECH Solution (May 2025)
- Developed web applications utilizing HTML, CSS, and JavaScript within 21 days
- Engaged in projects focused on artificial intelligence

PROJECTS:
1. Blogvox - Voice-to-text blog generation with PDF export (Sep 2025)
   GitHub: https://github.com/ANISH-JOHN777/blogvox
   Live: https://blogvox-demo.netlify.app

2. Bike Rentals - Peer-to-peer bike rental platform
   GitHub: https://github.com/ANISH-JOHN777/bike-rentals
   Live: https://bike-rentals-demo.netlify.app

3. Billing Page - POS solution for invoice generation
   GitHub: https://github.com/ANISH-JOHN777/billing-page
   Live: https://billing-page-demo.netlify.app

4. Typing Game - Browser game to improve typing speed
   GitHub: https://github.com/ANISH-JOHN777/typing-game
   Live: https://typing-game-demo.netlify.app

5. New Way - AI-powered interview platform
   GitHub: https://github.com/ANISH-JOHN777/new-way
   Live: https://new-way-demo.netlify.app

ACHIEVEMENTS:
- Web Development Certifications
- Full Stack Web Development Certification
- IJARESM Publication
- IEEE Publication
- State level in Hockey
- District level in Football

Generated from Portfolio: ${new Date().toLocaleDateString()}
        `;

        // Create blob and download
        const element = document.createElement('a');
        const file = new Blob([resumeData], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'M_Anish_John_Resume.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <header id={id} className="hero scroll-reveal" role="banner" aria-label="Hero section with introduction and contact">
            <div className="hero-content">
                <h1 className="hero-title text-glow">M ANISH JOHN</h1>
                <p className="hero-subtitle">Web Developer & Digital Explorer</p>

                <div className="hero-contact" aria-label="Contact information">
                    <div className="contact-item" aria-label="Phone">
                        <Phone className="icon-glow" size={20} aria-hidden="true" />
                        <span>8072937674</span>
                    </div>
                    <div className="contact-item" aria-label="Email">
                        <Mail className="icon-glow" size={20} aria-hidden="true" />
                        <span>anishjohn0007@gmail.com</span>
                    </div>
                </div>

                <nav className="hero-social" aria-label="Social media links">
                    <a
                        href="https://www.linkedin.com/in/m-anish-raj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn profile - opens in new window"
                    >
                        <Linkedin className="icon-glow" size={24} aria-hidden="true" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/ANISH-JOHN777/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub profile - opens in new window"
                    >
                        <Github className="icon-glow" size={24} aria-hidden="true" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://leetcode.com/u/anishjohnm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LeetCode profile - opens in new window"
                    >
                        <Code2 className="icon-glow" size={24} aria-hidden="true" />
                        <span>LeetCode</span>
                    </a>
                    <button
                        onClick={handleDownloadResume}
                        className="social-link resume-btn"
                        aria-label="Download resume"
                        title="Download my resume"
                    >
                        <Download className="icon-glow" size={24} aria-hidden="true" />
                        <span>Resume</span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Hero;
