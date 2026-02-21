import { useState, useEffect } from 'react';
import { Github, Star, GitFork, Eye } from 'lucide-react';
import './GitHubStats.css';

const GitHubStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGitHubStats();
    }, []);

    const fetchGitHubStats = async () => {
        try {
            // Fetch user stats
            const userResponse = await fetch('https://api.github.com/users/ANISH-JOHN777');
            const userData = await userResponse.json();

            // Fetch repos
            const reposResponse = await fetch('https://api.github.com/users/ANISH-JOHN777/repos?sort=stars&per_page=100');
            const reposData = await reposResponse.json();

            // Calculate stats
            let totalStars = 0;
            let totalForks = 0;
            let totalWatchers = 0;
            let languages = {};

            reposData.forEach(repo => {
                totalStars += repo.stargazers_count;
                totalForks += repo.forks_count;
                totalWatchers += repo.watchers_count;

                if (repo.language) {
                    languages[repo.language] = (languages[repo.language] || 0) + 1;
                }
            });

            const topLanguages = Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([lang]) => lang);

            setStats({
                followers: userData.followers,
                following: userData.following,
                publicRepos: userData.public_repos,
                totalStars,
                totalForks,
                totalWatchers,
                topLanguages,
                avatar: userData.avatar_url,
                bio: userData.bio,
                location: userData.location
            });

            setLoading(false);
        } catch (err) {
            setError('Failed to load GitHub stats');
            setLoading(false);
            console.error('GitHub API error:', err);
        }
    };

    if (loading) {
        return (
            <section className="github-stats glass-panel scroll-reveal">
                <h2 className="section-title text-glow">GITHUB ACTIVITY</h2>
                <p className="loading-text">Loading stats...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="github-stats glass-panel scroll-reveal">
                <h2 className="section-title text-glow">GITHUB ACTIVITY</h2>
                <p className="error-text">{error}</p>
            </section>
        );
    }

    return (
        <section className="github-stats glass-panel scroll-reveal">
            <h2 className="section-title text-glow">GITHUB ACTIVITY</h2>

            <div className="github-container">
                <div className="github-header">
                    <div className="github-profile">
                        <img src={stats.avatar} alt="GitHub Profile" className="github-avatar" />
                        <div className="github-info">
                            <h3>ANISH-JOHN777</h3>
                            {stats.bio && <p className="github-bio">{stats.bio}</p>}
                            {stats.location && <p className="github-location">📍 {stats.location}</p>}
                        </div>
                    </div>
                    <a
                        href="https://github.com/ANISH-JOHN777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        aria-label="Visit GitHub profile"
                    >
                        <Github size={24} />
                        View Profile
                    </a>
                </div>

                <div className="github-stats-grid">
                    <div className="stat-card">
                        <Star className="stat-icon" size={24} />
                        <div className="stat-content">
                            <span className="stat-number">{stats.totalStars}</span>
                            <span className="stat-label">Stars</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <GitFork className="stat-icon" size={24} />
                        <div className="stat-content">
                            <span className="stat-number">{stats.totalForks}</span>
                            <span className="stat-label">Forks</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <Eye className="stat-icon" size={24} />
                        <div className="stat-content">
                            <span className="stat-number">{stats.publicRepos}</span>
                            <span className="stat-label">Repos</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <Github className="stat-icon" size={24} />
                        <div className="stat-content">
                            <span className="stat-number">{stats.followers}</span>
                            <span className="stat-label">Followers</span>
                        </div>
                    </div>
                </div>

                {stats.topLanguages.length > 0 && (
                    <div className="languages-section">
                        <h4>Top Languages</h4>
                        <div className="languages-list">
                            {stats.topLanguages.map((lang, index) => (
                                <span key={index} className="language-tag">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GitHubStats;
