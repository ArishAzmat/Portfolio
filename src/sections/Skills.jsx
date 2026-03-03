import './Skills.css';
import { IconMonitor, IconGear, IconStar } from '../components/PixelIcons';

// Pixel checkmark SVG inline
const PixelCheck = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <rect x="0" y="5" width="2" height="2" fill="#000080" />
        <rect x="2" y="7" width="2" height="2" fill="#000080" />
        <rect x="4" y="5" width="2" height="2" fill="#000080" />
        <rect x="6" y="3" width="2" height="2" fill="#000080" />
        <rect x="8" y="1" width="2" height="2" fill="#000080" />
    </svg>
);

const skillGroups = [
    {
        name: 'Frontend',
        Icon: IconMonitor,
        skills: [
            { name: 'React / Next.js', level: 90 },
            { name: 'HTML & CSS', level: 95 },
            { name: 'JavaScript / TypeScript', level: 85 },
            { name: 'Three.js / WebGL', level: 70 },
        ],
    },
    {
        name: 'Backend',
        Icon: IconGear,
        skills: [
            { name: 'Node.js / Express', level: 85 },
            { name: 'Python / Django', level: 75 },
            { name: 'PostgreSQL / SQLite', level: 80 },
            { name: 'REST APIs / GraphQL', level: 82 },
        ],
    },
    {
        name: 'Tools & Design',
        Icon: IconStar,
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Figma / Blender', level: 65 },
            { name: 'Docker / CI-CD', level: 60 },
            { name: 'Linux / CLI', level: 78 },
        ],
    },
];

function PixelBar({ level }) {
    const segments = 10;
    const filled = Math.round((level / 100) * segments);
    return (
        <div className="skill-bar">
            {Array.from({ length: segments }).map((_, i) => (
                <span key={i} className={`skill-bar-seg ${i < filled ? 'filled' : ''}`} />
            ))}
            <span className="skill-bar-pct">{level}%</span>
        </div>
    );
}

export default function Skills() {
    return (
        <div className="skills-root">
            <div className="skills-header">
                <span className="skills-header-text">SKILLS.TXT — System Properties</span>
            </div>
            {skillGroups.map(group => (
                <div key={group.name} className="skills-group">
                    <div className="skills-group-title">
                        <group.Icon size={12} /> {group.name}
                    </div>
                    {group.skills.map(skill => (
                        <div key={skill.name} className="skill-row">
                            <span className="skill-name"><PixelCheck /> {skill.name}</span>
                            <PixelBar level={skill.level} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
