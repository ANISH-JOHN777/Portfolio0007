import { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, BookOpen } from 'lucide-react';
import './Blog.css';

const Blog = ({ id, onModalChange }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: 'Building SaaS Products from Real-World Problems',
            excerpt: 'Why the most valuable software platforms are created by solving immediate, unglamorous friction points rather than inventing fake markets.',
            content: `The best SaaS ideas rarely come from brainstorming sessions in a vacuum. They come from experiencing real-world operational friction—repetitive manual steps, fragmented communications, or clumsy spreadsheet workflows that waste hours of productive human energy every single week.

## The Problem-First Framework

When evaluating product ideas at Almost Genius Labs, we start with simple diagnostic questions:
1. Is this a recurring pain point occurring daily or weekly?
2. Are people currently using clunky workarounds (spreadsheets, copy-pasting, manual emails)?
3. Can a focused digital application reduce the task time by 80%?

If the answer to all three is yes, you have identified a problem worth solving.

## From Friction to Product Spec

Building a product is not about feature volume; it is about core efficiency. An MVP should solve the primary bottleneck with extreme simplicity before adding secondary features. In SaaS, clarity of utility beats complexity of options every time.`,
            date: 'Mar 2026',
            readTime: '5 min read',
            tags: ['SaaS', 'Product Strategy', 'Venture Building']
        },
        {
            id: 2,
            title: 'What I Learned Building My First Startup Product',
            excerpt: 'Lessons in product validation, feature prioritization, customer feedback loops, and avoiding early over-engineering.',
            content: `Building your first product teaches you lessons that no textbook or tutorial can replicate. Here are the core realizations from taking an idea from prototype to real users:

## 1. Speed to Feedback Over Perfection
Code sitting on your local machine is unvalidated hypothesis. The faster you place a usable build in front of real users, the faster you discover what actually matters.

## 2. Talk to Users, Watch Their Actions
What users say they want in an interview is often different from what they actually interact with when using the product. Monitor user workflow patterns to uncover true UX priorities.

## 3. Simplicity is the Ultimate Differentiation
Early on, it is tempting to build every requested feature. But maintaining a tight, high-reliability core product creates far better user retention than a bloated app with a dozen partial tools.`,
            date: 'Feb 2026',
            readTime: '6 min read',
            tags: ['Founder Lessons', 'MVP', 'Building']
        },
        {
            id: 3,
            title: 'Why Small Businesses Need Better Automation',
            excerpt: 'How no-code workflows, AI assistants, and automated systems can transform small business efficiency.',
            content: `Small business operators often spend up to 40% of their working hours on administrative upkeep—manually sending invoices, copying client records, scheduling appointments, and following up on leads.

## The Automation Advantage

Modern automation tools like n8n, combined with AI endpoints, allow small businesses to operate with the leverage of enterprise teams without ballooning overhead.

- **Lead Processing:** Instant response triggers when an inquiry arrives.
- **Billing & Invoicing:** Automated invoice generation upon project milestones.
- **Customer Follow-ups:** Context-aware automated updates.

By automating repetitive administrative tasks, business owners can redirect their energy toward growth, strategy, and high-value customer relationships.`,
            date: 'Feb 2026',
            readTime: '4 min read',
            tags: ['Automation', 'AI', 'Business Systems']
        },
        {
            id: 4,
            title: 'Building CastReach: From Idea to Product',
            excerpt: 'The technical and product journey of designing an AI-assisted podcast networking and booking platform.',
            content: `CastReach was born out of observing how podcast hosts and prospective guests connect. The traditional process involves cold emails, manual calendar tag, back-and-forth messaging, and lost prep materials across multiple channels.

## Designing the Solution

We envisioned CastReach as a unified workspace for podcast collaboration:
- **Discovery:** Finding relevant hosts and guests by topic and audience niche.
- **AI-Assisted Pitching:** Drafting tailored outreach pitches based on speaker backgrounds.
- **Workflow Pipeline:** Tracking pitch statuses from initial contact to recording date.

Building CastReach required balancing complex background workflows with a clean, frictionless interface so users can focus on building relationships.`,
            date: 'Jan 2026',
            readTime: '7 min read',
            tags: ['CastReach', 'AI', 'SaaS']
        },
        {
            id: 5,
            title: 'Building a Modern Web Portfolio with React & Vite',
            excerpt: 'Technical breakdown of building a high-performance, accessible founder website using React 19 and Vite.',
            content: `A founder's portfolio is a digital identity headquarters. It needs to load lightning-fast, present clear brand hierarchy, and deliver clean micro-interactions without distracting clutter.

## Key Architecture Principles

- **Speed & Code Splitting:** Using Vite for instant HMR and optimized production bundles.
- **Clean Tokenized CSS:** Maintaining full control over luxury dark aesthetics, typography, and responsive grid layouts without framework overhead.
- **SEO & Meta Strategy:** Complete OpenGraph cards, structured JSON-LD schemas, and semantically hierarchy HTML.`,
            date: 'Jan 2026',
            readTime: '5 min read',
            tags: ['React', 'Vite', 'Frontend Architecture']
        }
    ];

    const openModal = (post) => {
        setSelectedPost(post);
        document.body.style.overflow = 'hidden';
        onModalChange?.(true);
    };

    const closeModal = () => {
        setSelectedPost(null);
        document.body.style.overflow = 'auto';
        onModalChange?.(false);
    };

    return (
        <section id={id} className="blog glass-panel scroll-reveal">
            <span className="section-tagline">THOUGHTS &amp; PERSPECTIVES</span>
            <h2 className="section-title">Ideas &amp; Insights</h2>

            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="blog-card"
                        onClick={() => openModal(post)}
                    >
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span className="meta-item"><Calendar size={13} /> {post.date}</span>
                                <span className="meta-item"><Clock size={13} /> {post.readTime}</span>
                            </div>

                            <h3 className="blog-card-title">{post.title}</h3>
                            <p className="blog-card-excerpt">{post.excerpt}</p>

                            <div className="blog-tags-strip">
                                {post.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="tech-tag mini">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="blog-card-footer">
                            <span className="read-article-link">
                                Read Article <ArrowRight size={14} />
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            {/* Reading Modal */}
            {selectedPost && (
                <div className="blog-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
                    <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                            <X size={22} />
                        </button>

                        <div className="blog-modal-header">
                            <div className="blog-card-meta">
                                <span className="meta-item"><Calendar size={14} /> {selectedPost.date}</span>
                                <span className="meta-item"><Clock size={14} /> {selectedPost.readTime}</span>
                            </div>
                            <h1 className="blog-modal-title">{selectedPost.title}</h1>

                            <div className="blog-tags-strip" style={{ marginTop: '0.8rem' }}>
                                {selectedPost.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="badge-gold">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="blog-modal-body">
                            {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                                if (paragraph.startsWith('## ')) {
                                    return <h2 key={idx} className="blog-heading">{paragraph.replace('## ', '')}</h2>;
                                }
                                return <p key={idx} className="blog-paragraph">{paragraph}</p>;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
