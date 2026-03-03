import { useState } from 'react';
import './Projects.css';
import {
    IconChart,
    IconMountain,
    IconChat,
    IconGear,
    IconStar,
    IconNote,
    IconFolder,
    IconLink,
    IconCode,
} from '../components/PixelIcons';

const categories = ['All', 'Web', '3D / Art', 'Tools'];

const projects = [
    {
        id: 1, category: 'Web',
        title: 'Nexus Dashboard',
        desc: 'A real-time analytics dashboard with charts, filters, and dark mode.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        Icon: IconChart, color: '#000080',
    },
    {
        id: 2, category: '3D / Art',
        title: 'Low Poly World',
        desc: 'Interactive 3D low poly landscape explorer built with Three.js.',
        tech: ['Three.js', 'WebGL', 'GLSL'],
        Icon: IconMountain, color: '#2d6a4f',
    },
    {
        id: 3, category: 'Web',
        title: 'RetroChat',
        desc: 'A real-time chat app with a retro terminal aesthetic.',
        tech: ['React', 'Socket.io', 'Express'],
        Icon: IconChat, color: '#4a3f6b',
    },
    {
        id: 4, category: 'Tools',
        title: 'PixelForge CLI',
        desc: 'A command-line tool to batch process and optimize SVG assets.',
        tech: ['Python', 'Click', 'Pillow'],
        Icon: IconGear, color: '#8b4513',
    },
    {
        id: 5, category: '3D / Art',
        title: 'Poly Shader Pack',
        desc: 'A set of custom GLSL shaders for low-poly cel-shaded visuals.',
        tech: ['GLSL', 'Unity', 'WebGL'],
        Icon: IconStar, color: '#5c3d7a',
    },
    {
        id: 6, category: 'Tools',
        title: 'DevLog CLI',
        desc: 'A terminal-based developer journal with markdown export.',
        tech: ['Node.js', 'SQLite', 'Ink'],
        Icon: IconNote, color: '#1a3a5c',
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedId, setSelectedId] = useState(null);

    const filtered = projects.filter(p => activeCategory === 'All' || p.category === activeCategory);
    const selected = projects.find(p => p.id === selectedId) || filtered[0];

    return (
        <div className="projects-root">
            {/* Left panel — folder tree */}
            <div className="projects-tree">
                <div className="projects-tree-header">
                    <IconFolder size={12} /> Portfolio
                </div>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`projects-tree-item ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => { setActiveCategory(cat); setSelectedId(null); }}
                    >
                        <IconFolder size={12} open={activeCategory === cat} /> {cat}
                    </button>
                ))}
            </div>

            {/* Right panel — project list */}
            <div className="projects-list-panel">
                <div className="projects-list">
                    {filtered.map(p => (
                        <button
                            key={p.id}
                            className={`projects-list-item ${selected?.id === p.id ? 'active' : ''}`}
                            onClick={() => setSelectedId(p.id)}
                        >
                            <span className="projects-item-icon"><p.Icon size={14} /></span>
                            <span className="projects-item-title">{p.title}</span>
                        </button>
                    ))}
                </div>

                {/* Detail panel */}
                {selected && (
                    <div className="projects-detail">
                        <div className="projects-detail-header" style={{ background: selected.color }}>
                            <span className="projects-detail-icon"><selected.Icon size={20} /></span>
                            <span className="projects-detail-title">{selected.title}</span>
                        </div>
                        <div className="projects-detail-body">
                            <p className="projects-detail-category">{selected.category}</p>
                            <p className="projects-detail-desc">{selected.desc}</p>
                            <div className="projects-detail-tech">
                                {selected.tech.map(t => (
                                    <span key={t} className="projects-tech-tag">{t}</span>
                                ))}
                            </div>
                            <div className="projects-detail-actions">
                                <button className="retro-btn projects-detail-btn">
                                    <IconLink size={12} /> View Project
                                </button>
                                <button className="retro-btn projects-detail-btn">
                                    <IconCode size={12} /> Source Code
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
