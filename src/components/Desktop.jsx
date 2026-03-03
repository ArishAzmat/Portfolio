import './Desktop.css';
import {
    IconUser,
    IconFolder,
    IconLightningBolt,
    IconEnvelope,
    IconTrash,
} from './PixelIcons';

// Tiny shortcut arrow icon
const IconShortcut = () => (
    <div style={{
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        width: '10px',
        height: '10px',
        background: '#ffffff',
        border: '1px solid #000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 2
    }}>
        <svg width="8" height="8" viewBox="0 0 8 8">
            <path d="M1 4h5M4 2l2 2-2 2" fill="none" stroke="#000" strokeWidth="1" />
        </svg>
    </div>
);

const ICON_DEFS = [
    { id: 'about', label: 'About.me', Icon: IconUser, isShortcut: true },
    { id: 'projects', label: 'Projects', Icon: IconFolder, isShortcut: true },
    { id: 'skills', label: 'Skills.exe', Icon: IconLightningBolt, isShortcut: true },
    { id: 'contact', label: 'Contact.txt', Icon: IconEnvelope, isShortcut: true },
    { id: null, label: 'Recycle Bin', Icon: IconTrash, isShortcut: false },
];

export default function Desktop({ onOpenWindow }) {
    return (
        <div className="desktop-icons">
            {ICON_DEFS.map((icon, i) => (
                <div
                    key={i}
                    className="desktop-icon"
                    onDoubleClick={() => icon.id && onOpenWindow(icon.id)}
                    tabIndex={0}
                    title={`Double-click to open ${icon.label}`}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && icon.id) onOpenWindow(icon.id);
                    }}
                >
                    <div className="desktop-icon-image-wrapper">
                        <icon.Icon size={32} />
                        {icon.isShortcut && <IconShortcut />}
                    </div>
                    <span className="desktop-icon-label">{icon.label}</span>
                </div>
            ))}
        </div>
    );
}
