import { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import './Blog.css';

const Blog = ({ id }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: 'Building a Modern Web Portfolio with React & Vite',
            excerpt: 'Learn how to create a high-performance portfolio website using React 19, Vite, and modern web technologies.',
            content: `In today's competitive job market, a well-crafted portfolio is essential for showcasing your skills and attracting opportunities. Your online presence is often the first impression potential employers or clients will have of you. A modern, performant portfolio demonstrates not only your technical capabilities but also your commitment to quality and user experience. In this comprehensive post, I'll walk you through building a professional web portfolio using React and Vite, two of the most powerful tools in modern web development.

## Why React & Vite?

React provides a component-based architecture that makes it easy to manage complex UIs, while Vite offers lightning-fast build times and excellent developer experience. React's ecosystem is matured with countless libraries and community support, making it ideal for scaling your portfolio as you add more features and projects. Vite's instant server start and efficient hot module replacement (HMR) means you'll spend less time waiting and more time coding.

When you're building a portfolio, you want to focus on showcasing your work, not struggling with build tools. This is where Vite shines. Its next-generation frontend tooling approach makes development a joy, and the production builds are optimized to perfection.

## Key Features

Performance Optimized: Code splitting, lazy loading, and minification ensure your portfolio loads lightning-fast on any connection, improving user experience and SEO rankings significantly.

SEO Friendly: Meta tags, Open Graph, JSON-LD structured data make your portfolio easily discoverable by search engines and shareable on social media platforms.

Accessible: WCAG 2.1 compliance with proper ARIA labels ensures your portfolio is usable by everyone, including people with disabilities, expanding your reach and demonstrating inclusivity.

Dark Mode: Theme toggle with localStorage persistence allows visitors to use your portfolio in their preferred visual format, reducing eye strain and improving overall experience.

Mobile First: Responsive design for all devices ensures your portfolio looks stunning whether accessed on a smartphone, tablet, or desktop computer.

## Implementation Tips

1. Use CSS variables for consistent theming across your entire application, making it easy to update colors and styles globally
2. Implement intersection observer for smooth scroll animations that trigger when elements come into view
3. Optimize images with proper formats and sizes to reduce load times without compromising quality
4. Preload critical resources for faster page loads and better perceived performance
5. Use semantic HTML and proper heading hierarchy for better accessibility and SEO
6. Implement proper error handling and loading states for better user feedback

Building a portfolio is not just about showcasing projects—it's about demonstrating your technical expertise, attention to detail, and commitment to user experience. Every interaction matters, from smooth transitions to thoughtful error messages.`,
            date: 'Feb 15, 2026',
            readTime: '5 min read',
            tags: ['React', 'Vite', 'Web Development', 'Portfolio']
        },
        {
            id: 2,
            title: 'Mastering React Hooks: From useState to Custom Hooks',
            excerpt: 'A comprehensive guide to React Hooks with practical examples and best practices for modern React development.',
            content: `React Hooks revolutionized how we write React components by allowing you to use state and other React features without writing a class component. This shift toward functional components has made React more intuitive and powerful. Before Hooks were introduced in React 16.8, managing state and side effects required complex class component logic.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They allow you to extract component logic into reusable, shareable functions. This paradigm shift has fundamentally changed how developers approach React development, making code more modular and easier to test. Hooks follow two important rules that you must follow to ensure proper functionality and avoid subtle bugs in your application.

Understanding how Hooks work under the hood helps you write more efficient and bug-free code. The React team designed Hooks to be flexible and composable, allowing you to combine them in powerful ways.

## Essential Hooks

useState: Manage component state and trigger re-renders when state changes, replacing the need for setState in class components.

useEffect: Handle side effects like fetching data, subscribing to events, and cleaning up resources when components unmount.

useContext: Access context values throughout your component tree without prop drilling, enabling cleaner and more maintainable code.

useReducer: Complex state management for cases where useState isn't sufficient, allowing you to centralize state logic.

Custom Hooks: Extract component logic into reusable functions that can be shared across multiple components, promoting DRY principles.

## Best Practices

1. Only call hooks at the top level of your function, not inside conditions or loops, to ensure consistent hook ordering
2. Only call hooks from React functions or custom hooks, never from regular JavaScript functions
3. Use the exhaustive-deps rule in ESLint to avoid stale closures and ensure your effects are properly synchronized
4. Create custom hooks for reusable logic to promote code reuse and maintainability across your application
5. Keep hooks small and focused on a single responsibility for better testability
6. Use meaningful names for custom hooks that describe their purpose and return values

Hooks make React code more readable, reusable, and maintainable. Learning to use them effectively is crucial for modern React development and will significantly improve your productivity.`,
            date: 'Feb 10, 2026',
            readTime: '8 min read',
            tags: ['React', 'JavaScript', 'Hooks', 'Tutorial']
        },
        {
            id: 3,
            title: 'Web Performance Optimization: From Theory to Practice',
            excerpt: 'Practical strategies to improve your website\'s performance and achieve excellent Lighthouse scores.',
            content: `Web performance is not just a nice-to-have—it's a critical factor for user experience and SEO rankings. Users expect websites to load quickly, and even a one-second delay can result in significant bounce rates. Performance optimization is an investment in your users' satisfaction and your business metrics. Studies show that faster websites have higher conversion rates, better user engagement, and improved search rankings.

## Performance Metrics

Understanding web performance metrics is the foundation for optimization. Different metrics measure different aspects of user experience, and collectively they tell the story of how your website performs.

Core Web Vitals: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift) - these are Google's key metrics for page experience.

Time to First Byte (TTFB): Server response time that indicates how quickly your server responds to requests from users.

First Contentful Paint (FCP): When the first content appears on the user's screen, crucial for perceived performance.

Time to Interactive (TTI): When the page becomes fully interactive and users can interact with elements without delay.

## Optimization Techniques

Code Splitting: Load only required code using dynamic imports and route-based splitting to reduce initial bundle size.

Lazy Loading: Defer non-critical resources and images until they're actually needed by the user.

Image Optimization: Use modern formats like WebP with proper fallbacks, implement responsive images with srcset, and serve appropriately sized images.

Caching: Leverage browser caching with proper headers, CDN caching for static assets, and service workers for offline support.

Minification: Remove unnecessary characters from code without changing functionality, including HTML, CSS, and JavaScript.

## Tools for Measurement

Lighthouse: Google's comprehensive auditing tool that provides detailed performance reports and actionable recommendations.

WebPageTest: Advanced testing tool that shows detailed waterfall charts and film strip views of page loading.

GTmetrix: Visual representation of waterfall charts and comprehensive reports that make it easy to identify bottlenecks.

Chrome DevTools Performance Tab: Browser-native tools for profiling and identifying performance issues in real-time.

Performance optimization is an ongoing process that requires continuous monitoring and iteration. Regular performance audits help maintain optimal user experience as your application grows.`,
            date: 'Feb 5, 2026',
            readTime: '6 min read',
            tags: ['Performance', 'Web Development', 'Optimization']
        }
    ];

    return (
        <section id={id} className="blog glass-panel scroll-reveal">
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
