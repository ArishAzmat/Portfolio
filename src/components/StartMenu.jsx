import './StartMenu.css';
import {
    IconUser,
    IconFolder,
    IconLightningBolt,
    IconEnvelope,
    IconPower,
} from './PixelIcons';

const menuItems = [
    { label: 'About Me', id: 'about', Icon: IconUser },
    { label: 'Projects', id: 'projects', Icon: IconFolder },
    { label: 'Skills', id: 'skills', Icon: IconLightningBolt },
    { label: 'Contact', id: 'contact', Icon: IconEnvelope },
];

export default function StartMenu({ onOpen }) {
    return (
        <div className="start-menu" id="start-menu">
            {/* Sidebar */}
            <div className="start-menu-sidebar">
                <span className="start-menu-sidebar-text">NEXUS OS 9.5</span>
            </div>

            {/* Items */}
            <div className="start-menu-items">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        className="start-menu-item"
                        onClick={() => onOpen(item.id)}
                    >
                        <item.Icon size={14} />
                        {item.label}
                    </button>
                ))}

                <div className="start-menu-divider" />

                <button className="start-menu-item start-menu-item-dim" onClick={() => { }}>
                    <IconPower size={14} />
                    Shut Down...
                </button>
            </div>
        </div>
    );
}
