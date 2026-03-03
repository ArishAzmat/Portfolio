import './AboutMe.css';
import { IconFolder, IconEnvelope, IconGithub } from '../components/PixelIcons';

export default function AboutMe({ onOpen }) {
    return (
        <div className="about-root">
            {/* Avatar */}
            <div className="about-avatar-wrap">
                <div className="about-avatar">
                    {/* Low poly pixel art face */}
                    <svg viewBox="0 0 80 80" width="80" height="80">
                        {/* Background */}
                        <polygon points="0,0 80,0 80,80 0,80" fill="#2a4a7a" />
                        {/* Head */}
                        <polygon points="20,15 60,15 65,55 40,70 15,55" fill="#f5cba7" />
                        {/* Hair */}
                        <polygon points="18,20 62,20 60,10 40,5 20,10" fill="#3d2b1f" />
                        <polygon points="15,30 20,15 18,20" fill="#3d2b1f" />
                        <polygon points="65,30 60,15 62,20" fill="#3d2b1f" />
                        {/* Eyes */}
                        <rect x="26" y="32" width="10" height="7" rx="2" fill="#1a1a2e" />
                        <rect x="44" y="32" width="10" height="7" rx="2" fill="#1a1a2e" />
                        <circle cx="31" cy="35" r="2" fill="white" />
                        <circle cx="49" cy="35" r="2" fill="white" />
                        {/* Nose */}
                        <polygon points="38,42 42,42 40,48" fill="#d4a076" />
                        {/* Mouth */}
                        <polygon points="30,55 50,55 45,60 35,60" fill="#c87941" />
                        {/* Shirt collar */}
                        <polygon points="20,68 35,62 40,70 45,62 60,68 60,80 20,80" fill="#1a3a6a" />
                    </svg>
                </div>
            </div>

            {/* Info */}
            <div className="about-info">
                <h1 className="about-name">Arish Azmat</h1>
                <p className="about-title">Senior Software Engineer & Vibe Coder</p>
                <div className="about-divider" />
                <p className="about-bio">
                    Passionate developer crafting digital experiences since 2018.
                    Specialized in modern web apps, creative coding, and building
                    things that make people smile. Powered by [+] coffee and nostalgia.
                </p>

                <div className="about-tags">
                    {['React', 'Node.js', 'Python', 'Three.js', 'SQL'].map(tag => (
                        <span key={tag} className="about-tag">{tag}</span>
                    ))}
                </div>

                <div className="about-actions">
                    <button className="retro-btn about-action-btn" onClick={() => onOpen('projects')}>
                        <IconFolder size={12} /> My Projects
                    </button>
                    <button className="retro-btn about-action-btn" onClick={() => onOpen('contact')}>
                        <IconEnvelope size={12} /> Contact Me
                    </button>
                    <button className="retro-btn about-action-btn" onClick={() => window.open('https://github.com', '_blank')}>
                        <IconGithub size={12} /> GitHub
                    </button>
                </div>
            </div>
        </div>
    );
}
