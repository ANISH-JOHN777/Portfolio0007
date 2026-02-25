import { useState } from 'react';
import { Mail, Phone, Send, AlertCircle, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = ({ id }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [status, setStatus] = useState(null); // null, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formState.name || !formState.email || !formState.message) {
            setErrorMessage('Please fill in all fields');
            setStatus('error');
            return;
        }

        setStatus('loading');
        
        try {
            // Send email using Formspree
            const response = await fetch('https://formspree.io/f/mzdajbbp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    _subject: `New message from ${formState.name}`,
                    _replyto: formState.email
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(null), 3000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (err) {
            setErrorMessage('Failed to send message. Please try again or email directly to anishjohn0007@gmail.com');
            setStatus('error');
            console.error('Form submission error:', err);
        }
    };

    return (
        <section id={id} className="contact glass-panel scroll-reveal">
            <h2 className="section-title text-glow">Let's Talk</h2>
            
            <div className="contact-container">
                <div className="contact-info">
                    <h3>I'd Love to Hear From You</h3>
                    <p>Whether you have a project idea, want to collaborate on something cool, or just want to chat about web development - I'm all ears! Drop me a message and I'll get back to you as soon as I can.</p>
                    
                    <div className="contact-methods">
                        <a href="mailto:anishjohn0007@gmail.com" className="contact-method">
                            <Mail size={24} aria-hidden="true" />
                            <span>anishjohn0007@gmail.com</span>
                        </a>
                        <a href="tel:+918072937674" className="contact-method">
                            <Phone size={24} aria-hidden="true" />
                            <span>+91 8072937674</span>
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} method="POST" noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            aria-label="Your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            aria-label="Your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            rows="5"
                            aria-label="Your message"
                            required
                        />
                    </div>

                    {status === 'error' && (
                        <div className="form-status error">
                            <AlertCircle size={20} aria-hidden="true" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="form-status success">
                            <CheckCircle size={20} aria-hidden="true" />
                            <span>Message sent successfully! I'll get back to you soon.</span>
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={status === 'loading'}
                        aria-label="Send message"
                    >
                        {status === 'loading' ? (
                            <>
                                <span className="spinner"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={20} aria-hidden="true" />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
