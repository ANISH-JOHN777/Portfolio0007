import { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github, Code2, AlertCircle, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react';
import './Contact.css';

const Contact = ({ id }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: 'Product / Business Opportunity',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [copiedItem, setCopiedItem] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(type);
        setTimeout(() => setCopiedItem(null), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formState.name || !formState.email || !formState.message) {
            setErrorMessage('Please fill in all required fields.');
            setStatus('error');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/mzdajbbp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    subject: formState.subject,
                    message: formState.message,
                    _subject: `New inquiry from ${formState.name} [${formState.subject}]`,
                    _replyto: formState.email
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', subject: 'Product / Business Opportunity', message: '' });
                setTimeout(() => setStatus(null), 4000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (err) {
            setErrorMessage('Could not transmit message. Please email directly to anishjohn0007@gmail.com');
            setStatus('error');
        }
    };

    return (
        <section id={id} className="contact glass-panel scroll-reveal">
            <span className="section-tagline">INITIATE COLLABORATION</span>
            <h2 className="section-title">Let's Build Something</h2>

            <div className="contact-grid">
                <div className="contact-info-panel">
                    <p className="contact-lead-text">
                        I'm always interested in connecting with founders, builders, businesses, and people working on interesting problems.
                    </p>

                    <div className="collaboration-reasons">
                        <span className="reasons-heading">Whether you're looking to:</span>
                        <ul className="reasons-list">
                            <li>Build a product</li>
                            <li>Automate a business process</li>
                            <li>Explore a technology idea</li>
                            <li>Collaborate on a startup</li>
                            <li>Discuss a business opportunity</li>
                        </ul>
                        <p className="reasons-footer">I'd be happy to connect.</p>
                    </div>

                    <div className="direct-contact-methods">
                        <div className="contact-method-card">
                            <Mail size={22} className="method-icon" />
                            <div className="method-text">
                                <span className="method-label">Direct Email</span>
                                <span className="method-val">anishjohn0007@gmail.com</span>
                            </div>
                            <button 
                                className="copy-btn" 
                                onClick={() => handleCopy('anishjohn0007@gmail.com', 'email')}
                                title="Copy Email to Clipboard"
                            >
                                {copiedItem === 'email' ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                            </button>
                        </div>

                        <div className="contact-method-card">
                            <Phone size={22} className="method-icon" />
                            <div className="method-text">
                                <span className="method-label">Phone &amp; WhatsApp</span>
                                <span className="method-val">+91 8072937674</span>
                            </div>
                            <button 
                                className="copy-btn" 
                                onClick={() => handleCopy('+918072937674', 'phone')}
                                title="Copy Phone to Clipboard"
                            >
                                {copiedItem === 'phone' ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="contact-social-links">
                        <a href="https://www.linkedin.com/in/m-anish-raj/" target="_blank" rel="noopener noreferrer" className="social-box" title="LinkedIn Profile">
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/ANISH-JOHN777/" target="_blank" rel="noopener noreferrer" className="social-box" title="GitHub Profile">
                            <Github size={18} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://leetcode.com/u/anishjohnm/" target="_blank" rel="noopener noreferrer" className="social-box" title="LeetCode Profile">
                            <Code2 size={18} />
                            <span>LeetCode</span>
                        </a>
                    </div>
                </div>

                <form className="contact-form-panel" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Topic / Purpose</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                        >
                            <option value="Product / Business Opportunity">Product / Business Opportunity</option>
                            <option value="SaaS & Automation Consultation">SaaS &amp; Automation Consultation</option>
                            <option value="Startup Collaboration">Startup Collaboration</option>
                            <option value="General Tech Inquiry">General Tech Inquiry</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Briefly describe your idea, requirement, or proposition..."
                            rows="4"
                            required
                        />
                    </div>

                    {status === 'error' && (
                        <div className="form-status error">
                            <AlertCircle size={18} />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="form-status success">
                            <CheckCircle2 size={18} />
                            <span>Message transmitted successfully! I will get back to you shortly.</span>
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="btn-gold submit-btn"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? (
                            <span>Sending...</span>
                        ) : (
                            <>
                                <span>Let's Talk</span>
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
