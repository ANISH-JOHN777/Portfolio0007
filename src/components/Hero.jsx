import { Mail, Phone, Linkedin, Github, Code2, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import './Hero.css';

const Hero = ({ id }) => {
    const handleDownloadResume = () => {
        // Create PDF using jsPDF
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Define colors
        const primaryColor = [139, 92, 246]; // Violet
        const textColor = [31, 41, 55]; // Dark gray
        const lightColor = [107, 114, 128]; // Light gray

        let yPosition = 20;

        // Header - Name
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(24);
        pdf.setTextColor(...primaryColor);
        pdf.text('M ANISH JOHN', 105, yPosition, { align: 'center' });

        // Subtitle
        yPosition += 10;
        pdf.setFont('Helvetica', 'normal');
        pdf.setFontSize(11);
        pdf.setTextColor(...lightColor);
        pdf.text('Web Developer | Problem Solver | Creative Builder', 105, yPosition, { align: 'center' });

        // Divider line
        yPosition += 8;
        pdf.setDrawColor(...primaryColor);
        pdf.line(20, yPosition, 190, yPosition);

        // Contact Information
        yPosition += 10;
        pdf.setFont('Helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...lightColor);
        
        const contactInfo = [
            'Email: anishjohn0007@gmail.com | Phone: +91 8072937674',
            'GitHub: github.com/ANISH-JOHN777 | LinkedIn: linkedin.com/in/m-anish-raj'
        ];
        
        contactInfo.forEach(info => {
            pdf.text(info, 105, yPosition, { align: 'center' });
            yPosition += 5;
        });

        // Section function
        const addSection = (title, content) => {
            yPosition += 8;
            
            // Section title
            pdf.setFont('Helvetica', 'bold');
            pdf.setFontSize(11);
            pdf.setTextColor(...primaryColor);
            pdf.text(title, 20, yPosition);
            
            // Section underline
            const titleWidth = pdf.getTextWidth(title);
            pdf.setDrawColor(...primaryColor);
            pdf.line(20, yPosition + 2, 20 + titleWidth, yPosition + 2);
            
            yPosition += 8;
            
            // Content
            pdf.setFont('Helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.setTextColor(...textColor);
            
            const lines = pdf.splitTextToSize(content, 170);
            lines.forEach(line => {
                if (yPosition > 270) {
                    pdf.addPage();
                    yPosition = 20;
                }
                pdf.text(line, 25, yPosition);
                yPosition += 6;
            });
        };

        // Professional Summary
        const summary = `I'm a web developer who genuinely loves what I do. I've built real projects with HTML, CSS, JavaScript, and React - not just tutorials, but actual applications that solve real problems. From a bike rental platform to billing systems and AI-powered interview tools, I enjoy creating things that make people's lives easier. I'm always eager to learn new technologies and tackle interesting challenges. What drives me is building user-friendly experiences that people actually want to use.`;
        addSection('PROFESSIONAL SUMMARY', summary);

        // Education
        yPosition += 4;
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(...primaryColor);
        pdf.text('EDUCATION', 20, yPosition);
        
        const titleWidth = pdf.getTextWidth('EDUCATION');
        pdf.setDrawColor(...primaryColor);
        pdf.line(20, yPosition + 2, 20 + titleWidth, yPosition + 2);
        
        yPosition += 8;
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(10);
        pdf.setTextColor(...textColor);
        pdf.text('B-Tech in Information Technology', 25, yPosition);
        yPosition += 5;
        pdf.setFont('Helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...lightColor);
        pdf.text('SNS College of Engineering (2023-2027) | CGPA: 8.51', 25, yPosition);

        // Technical Skills
        yPosition += 10;
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(...primaryColor);
        pdf.text('TECHNICAL SKILLS', 20, yPosition);
        
        const skillsTitle = pdf.getTextWidth('TECHNICAL SKILLS');
        pdf.setDrawColor(...primaryColor);
        pdf.line(20, yPosition + 2, 20 + skillsTitle, yPosition + 2);
        
        yPosition += 8;
        pdf.setFont('Helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...textColor);
        
        const skills = `Frontend: HTML5, CSS3, JavaScript ES6+, React, Responsive Design
Backend: Python, Node.js | Databases: MongoDB | Tools: Git/GitHub, VS Code, Figma
Other: Web Design, Problem-Solving, UI/UX Design, n8n Automation`;
        
        const skillLines = pdf.splitTextToSize(skills, 165);
        skillLines.forEach(line => {
            if (yPosition > 270) {
                pdf.addPage();
                yPosition = 20;
            }
            pdf.text(line, 25, yPosition);
            yPosition += 5;
        });

        // Professional Experience
        yPosition += 4;
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(...primaryColor);
        pdf.text('PROFESSIONAL EXPERIENCE', 20, yPosition);
        
        const expTitle = pdf.getTextWidth('PROFESSIONAL EXPERIENCE');
        pdf.setDrawColor(...primaryColor);
        pdf.line(20, yPosition + 2, 20 + expTitle, yPosition + 2);
        
        yPosition += 8;
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(10);
        pdf.setTextColor(...textColor);
        pdf.text('Product Manager - Almost Genius Labs', 25, yPosition);
        yPosition += 5;
        pdf.setFont('Helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...lightColor);
        pdf.text('Built web apps people actually used | Worked with teams to understand needs | Kept projects on track', 25, yPosition);

        // Projects
        yPosition += 10;
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(...primaryColor);
        pdf.text('KEY PROJECTS', 20, yPosition);
        
        const projTitle = pdf.getTextWidth('KEY PROJECTS');
        pdf.setDrawColor(...primaryColor);
        pdf.line(20, yPosition + 2, 20 + projTitle, yPosition + 2);
        
        yPosition += 8;
        
        const projects = [
            { name: 'Blogvox', desc: 'Voice-to-blog tool - speak naturally and create formatted blog posts with PDF export' },
            { name: 'Bike Rentals', desc: 'Community bike-sharing platform - helping neighbors rent bikes from each other' },
            { name: 'Billing Page', desc: 'Simple invoicing tool for small businesses - no complexity, just quick bills' },
            { name: 'Typing Game', desc: 'Fun way to improve typing speed - catch falling words before they disappear' },
            { name: 'New Way', desc: 'Interview platform with AI resume enhancement and smart question generation' }
        ];
        
        projects.forEach(project => {
            if (yPosition > 270) {
                pdf.addPage();
                yPosition = 20;
            }
            pdf.setFont('Helvetica', 'bold');
            pdf.setFontSize(9);
            pdf.setTextColor(...textColor);
            pdf.text(`• ${project.name}`, 25, yPosition);
            yPosition += 4;
            pdf.setFont('Helvetica', 'normal');
            pdf.setFontSize(8);
            pdf.setTextColor(...lightColor);
            pdf.text(project.desc, 30, yPosition);
            yPosition += 5;
        });

        // Achievements
        yPosition += 4;
        if (yPosition > 270) {
            pdf.addPage();
            yPosition = 20;
        }
        
        pdf.setFont('Helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(...primaryColor);
        pdf.text('ACHIEVEMENTS', 20, yPosition);
        
        const achTitle = pdf.getTextWidth('ACHIEVEMENTS');
        pdf.setDrawColor(...primaryColor);
        pdf.line(20, yPosition + 2, 20 + achTitle, yPosition + 2);
        
        yPosition += 8;
        pdf.setFont('Helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...textColor);
        
        const achievements = [
            '• Web Development Certifications & Full Stack Web Development Certification',
            '• IJARESM & IEEE Publications',
            '• State level achievements in Hockey | District level in Football'
        ];
        
        achievements.forEach(ach => {
            if (yPosition > 270) {
                pdf.addPage();
                yPosition = 20;
            }
            pdf.text(ach, 25, yPosition);
            yPosition += 5;
        });

        // Footer
        pdf.setFontSize(8);
        pdf.setTextColor(...lightColor);
        const pageCount = pdf.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);
            pdf.text(`Page ${i} of ${pageCount}`, 105, 285, { align: 'center' });
        }

        // Download PDF
        pdf.save('M_Anish_John_Resume.pdf');
    };

    return (
        <header id={id} className="hero scroll-reveal" role="banner" aria-label="Hero section with introduction and contact">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="name-char" style={{animationDelay: '0s'}}>M</span>
                    <span className="name-char" style={{animationDelay: '0.08s'}}>.</span>
                    <span className="name-char" style={{animationDelay: '0.15s'}}> </span>
                    <span className="name-char" style={{animationDelay: '0.2s'}}>A</span>
                    <span className="name-char" style={{animationDelay: '0.25s'}}>N</span>
                    <span className="name-char" style={{animationDelay: '0.3s'}}>I</span>
                    <span className="name-char" style={{animationDelay: '0.35s'}}>S</span>
                    <span className="name-char" style={{animationDelay: '0.4s'}}>H</span>
                    <span className="name-char" style={{animationDelay: '0.45s'}}> </span>
                    <span className="name-char" style={{animationDelay: '0.55s'}}>J</span>
                    <span className="name-char" style={{animationDelay: '0.6s'}}>O</span>
                    <span className="name-char" style={{animationDelay: '0.65s'}}>H</span>
                    <span className="name-char" style={{animationDelay: '0.7s'}}>N</span>
                </h1>
                <p className="hero-subtitle">Web Developer | Problem Solver | Creative Builder</p>

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
