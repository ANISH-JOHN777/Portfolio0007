import profileImg from '../assets/profile.jpg';
import './About.css';

const About = ({ id }) => {
    return (
        <section id={id} className="about glass-panel scroll-reveal">
            <span className="section-tagline">BACKGROUND &amp; PHILOSOPHY</span>
            <h2 className="section-title">About Me</h2>

            <div className="about-layout-grid">
                <div className="about-content">
                    <p className="about-lead">
                        I'm an entrepreneur and product builder who enjoys turning real-world problems into practical technology.
                    </p>

                    <p className="about-text">
                        I work at the intersection of technology, products, and business — from identifying a problem and designing the solution to building, testing, and taking it toward real users.
                    </p>

                    <div className="about-ventures-card">
                        <h3 className="ventures-card-title">Currently Building</h3>

                        <div className="venture-mention">
                            <div className="venture-mention-header">
                                <span className="venture-dot gold"></span>
                                <span className="venture-name">Almost Genius Labs</span>
                            </div>
                            <p className="venture-desc">focused on software products, SaaS, AI, automation, and digital solutions.</p>
                        </div>

                        <div className="venture-mention">
                            <div className="venture-mention-header">
                                <span className="venture-dot"></span>
                                <span className="venture-name">Delintra Technologies</span>
                            </div>
                            <p className="venture-desc">focused on technology-driven products, business opportunities, and digital solutions.</p>
                        </div>
                    </div>

                    <p className="about-text">
                        Alongside my technology ventures, I'm also building hands-on experience in e-commerce, sales, customer acquisition, and business development.
                    </p>

                    <p className="about-text">
                        I enjoy exploring problems that are underserved, designing simple solutions, and turning ideas into products that can create measurable value.
                    </p>

                    <div className="about-interests-box">
                        <span className="interests-label">PRIMARY INTERESTS</span>
                        <div className="interests-tags">
                            <span className="interest-tag">SaaS</span>
                            <span className="interest-tag">AI</span>
                            <span className="interest-tag">Automation</span>
                            <span className="interest-tag">Software Products</span>
                            <span className="interest-tag">Product Strategy</span>
                            <span className="interest-tag">E-commerce</span>
                            <span className="interest-tag">Business Development</span>
                        </div>
                    </div>

                    <p className="about-quote">
                        "I'm still learning, experimenting, and building — but I believe the best way to learn technology is to actually use it to build something useful."
                    </p>
                </div>

                <div className="about-portrait-column">
                    <div className="founder-card">
                        <div className="founder-img-wrapper">
                            <img src={profileImg} alt="M. Anish John - Founder &amp; Product Builder" className="founder-portrait" />
                            <div className="founder-img-overlay"></div>
                        </div>
                        <div className="founder-card-footer">
                            <h3 className="founder-name">M. ANISH JOHN</h3>
                            <span className="founder-title">ENTREPRENEUR &amp; PRODUCT BUILDER</span>
                            <div className="founder-ventures-pill">
                                <span>Co-Founder @ AGL &amp; Delintra</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
