import { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import './Blog.css';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: 'Building a Modern Web Portfolio with React & Vite',
            excerpt: 'Learn how to create a high-performance portfolio website using React 19, Vite, and modern web technologies.',
            content: `In today's competitive job market, a well-crafted portfolio is essential for showcasing your skills and attracting opportunities. In this post, I\'ll walk you through building a modern web portfolio using React and Vite.

## Why React & Vite?

React provides a component-based architecture that makes it easy to manage complex UIs, while Vite offers lightning-fast build times and excellent developer experience.

## Key Features

- **Performance Optimized**: Code splitting, lazy loading, and minification
- **SEO Friendly**: Meta tags, Open Graph, JSON-LD structured data
- **Accessible**: WCAG 2.1 compliance with proper ARIA labels
- **Dark Mode**: Theme toggle with localStorage persistence
- **Mobile First**: Responsive design for all devices

## Implementation Tips

1. Use CSS variables for consistent theming
2. Implement intersection observer for scroll animations
3. Optimize images with proper formats and sizes
4. Preload critical resources for faster page loads

Building a portfolio is not just about showcasing projects—it\'s about demonstrating your technical expertise and attention to detail.`,
            date: 'Feb 15, 2026',
            readTime: '5 min read',
            tags: ['React', 'Vite', 'Web Development', 'Portfolio']
        },
        {
            id: 2,
            title: 'Mastering React Hooks: From useState to Custom Hooks',
            excerpt: 'A comprehensive guide to React Hooks with practical examples and best practices for modern React development.',
            content: `React Hooks revolutionized how we write React components. They allow you to use state and other React features without writing a class component.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from functional components.

## Essential Hooks

- **useState**: Manage component state
- **useEffect**: Handle side effects
- **useContext**: Access context values
- **useReducer**: Complex state management
- **Custom Hooks**: Extract component logic into reusable functions

## Best Practices

1. Only call hooks at the top level
2. Only call hooks from React functions
3. Use the exhaustive-deps rule to avoid stale closures
4. Create custom hooks for reusable logic

Hooks make React code more readable, reusable, and maintainable. Learning to use them effectively is crucial for modern React development.`,
            date: 'Feb 10, 2026',
            readTime: '8 min read',
            tags: ['React', 'JavaScript', 'Hooks', 'Tutorial']
        },
        {
            id: 3,
            title: 'Web Performance Optimization: From Theory to Practice',
            excerpt: 'Practical strategies to improve your website\'s performance and achieve excellent Lighthouse scores.',
            content: `Web performance is not just a nice-to-have—it\'s a critical factor for user experience and SEO rankings.

## Performance Metrics

- **Core Web Vitals**: LCP, FID, CLS
- **Time to First Byte (TTFB)**: Server response time
- **First Contentful Paint (FCP)**: When first content appears
- **Time to Interactive (TTI)**: When page is fully interactive

## Optimization Techniques

1. **Code Splitting**: Load only required code
2. **Lazy Loading**: Defer non-critical resources
3. **Image Optimization**: Use modern formats (WebP)
4. **Caching**: Leverage browser and CDN caching
5. **Minification**: Remove unnecessary characters

## Tools for Measurement

- Lighthouse
- WebPageTest
- GTmetrix
- Chrome DevTools Performance Tab

Performance optimization is an ongoing process. Regular monitoring and optimization ensure your users have the best experience.`,
            date: 'Feb 5, 2026',
            readTime: '6 min read',
            tags: ['Performance', 'Web Development', 'Optimization']
        }
    ];

    return (
        <section className="blog glass-panel scroll-reveal">
            <h2 className="section-title text-glow">BLOG & INSIGHTS</h2>

            <div className="blog-container">
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="blog-card"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="blog-card-content">
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>

                                <div className="blog-meta">
                                    <span className="meta-item">
                                        <Calendar size={16} />
                                        {post.date}
                                    </span>
                                    <span className="meta-item">
                                        <Clock size={16} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <div className="blog-tags">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="blog-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="read-more">
                                Read More
                                <ArrowRight size={16} />
                            </button>
                        </article>
                    ))}
                </div>
            </div>

            {selectedPost && (
                <div className="blog-modal-overlay" onClick={() => setSelectedPost(null)}>
                    <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-btn"
                            onClick={() => setSelectedPost(null)}
                            aria-label="Close blog post"
                        >
                            <X size={24} />
                        </button>

                        <article className="blog-full">
                            <h1>{selectedPost.title}</h1>

                            <div className="blog-meta">
                                <span className="meta-item">
                                    <Calendar size={16} />
                                    {selectedPost.date}
                                </span>
                                <span className="meta-item">
                                    <Clock size={16} />
                                    {selectedPost.readTime}
                                </span>
                            </div>

                            <div className="blog-tags">
                                {selectedPost.tags.map((tag, index) => (
                                    <span key={index} className="blog-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="blog-content">
                                {selectedPost.content.split('\n').map((line, index) => {
                                    if (line.startsWith('## ')) {
                                        return (
                                            <h2 key={index} className="blog-heading">
                                                {line.replace('## ', '')}
                                            </h2>
                                        );
                                    } else if (line.startsWith('- ')) {
                                        return (
                                            <li key={index} className="blog-list-item">
                                                {line.replace('- ', '')}
                                            </li>
                                        );
                                    } else if (line.trim()) {
                                        return (
                                            <p key={index} className="blog-paragraph">
                                                {line}
                                            </p>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </article>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
