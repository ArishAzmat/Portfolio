import { useEffect, useRef, useState } from 'react';
import './ContextMenu.css';
import { BG_THEMES } from './bgThemes';
import { IconRefresh, IconImage, IconMonitor, IconGrid } from './PixelIcons';

export default function ContextMenu({ x, y, onClose, onRefresh, onChangeBg, currentBgId }) {
    const [showBgSubmenu, setShowBgSubmenu] = useState(false);
    const menuRef = useRef(null);

    // Close on outside click or Escape
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) onClose();
        };
        document.addEventListener('keydown', handleKey);
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.removeEventListener('mousedown', handleClick);
        };
    }, [onClose]);

    // Adjust position so menu never goes off-screen
    const safeX = Math.min(x, window.innerWidth - 200);
    const safeY = Math.min(y, window.innerHeight - 240);

    return (
        <div
            className="ctx-menu"
            style={{ left: safeX, top: safeY }}
            ref={menuRef}
            onContextMenu={(e) => e.preventDefault()}
        >
            <button
                className="ctx-menu-item"
                onClick={() => { onRefresh(); onClose(); }}
            >
                <span className="ctx-menu-item-icon"><IconRefresh size={14} /></span>
                Refresh
            </button>

            <div className="ctx-menu-sep" />

            <button
                className="ctx-menu-item has-submenu"
                onMouseEnter={() => setShowBgSubmenu(true)}
                onMouseLeave={() => setShowBgSubmenu(false)}
            >
                <span className="ctx-menu-item-icon"><IconImage size={14} /></span>
                Change Background

                {showBgSubmenu && (
                    <div className="ctx-submenu">
                        {BG_THEMES.map(theme => (
                            <button
                                key={theme.id}
                                className={`ctx-menu-item ${theme.id === currentBgId ? 'active' : ''}`}
                                onClick={() => { onChangeBg(theme.id); onClose(); }}
                                style={theme.id === currentBgId ? { background: '#000080', color: '#fff' } : {}}
                            >
                                <span
                                    className="ctx-bg-swatch"
                                    style={{
                                        background: `linear-gradient(135deg, ${theme.swatchColors[0]} 0%, ${theme.swatchColors[1]} 50%, ${theme.swatchColors[2]} 100%)`,
                                    }}
                                />
                                &nbsp;{theme.name}
                                {theme.id === currentBgId ? ' \u2713' : ''}
                            </button>
                        ))}
                    </div>
                )}
            </button>

            <div className="ctx-menu-sep" />

            <button className="ctx-menu-item disabled">
                <span className="ctx-menu-item-icon"><IconMonitor size={14} /></span>
                Display Properties...
            </button>
            <button className="ctx-menu-item disabled">
                <span className="ctx-menu-item-icon"><IconGrid size={14} /></span>
                Arrange Icons
            </button>
        </div>
    );
}
