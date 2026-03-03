import { useRef, useState, useEffect, useCallback } from 'react';
import '../styles/window.css';

const ICONS = {
    folder: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="4" width="16" height="11" fill="#f0c040" />
            <rect x="0" y="3" width="7" height="2" fill="#f0c040" />
            <rect x="0" y="4" width="16" height="1" fill="#b08000" />
        </svg>
    ),
    doc: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="0" width="10" height="13" fill="white" stroke="#000" strokeWidth="1" />
            <rect x="10" y="0" width="2" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
            <rect x="4" y="4" width="6" height="1" fill="#000" />
            <rect x="4" y="6" width="6" height="1" fill="#000" />
            <rect x="4" y="8" width="4" height="1" fill="#000" />
        </svg>
    ),
    computer: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="14" height="10" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
            <rect x="2" y="2" width="12" height="8" fill="#000080" />
            <rect x="5" y="11" width="6" height="2" fill="#808080" />
            <rect x="2" y="13" width="12" height="2" fill="#808080" />
        </svg>
    ),
    exe: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="0" width="14" height="16" fill="#ffffc0" stroke="#808080" strokeWidth="1" />
            <rect x="2" y="2" width="5" height="5" fill="#ff8000" />
            <rect x="9" y="2" width="5" height="5" fill="#0000ff" />
            <rect x="2" y="9" width="5" height="5" fill="#00aa00" />
            <rect x="9" y="9" width="5" height="5" fill="#ff0000" />
        </svg>
    ),
    trash: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="4" width="12" height="11" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
            <rect x="5" y="2" width="6" height="3" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
            <rect x="0" y="4" width="16" height="2" fill="#808080" />
            <line x1="5" y1="7" x2="5" y2="13" stroke="#606060" strokeWidth="1" />
            <line x1="8" y1="7" x2="8" y2="13" stroke="#606060" strokeWidth="1" />
            <line x1="11" y1="7" x2="11" y2="13" stroke="#606060" strokeWidth="1" />
        </svg>
    ),
};

export default function Window({
    id,
    title,
    icon = 'folder',
    children,
    defaultPos = { x: 100, y: 80 },
    defaultSize = { w: 400, h: 300 },
    menuBar,
    statusBar,
    isActive,
    isMinimized,
    onFocus,
    onMinimize,
    onClose,
}) {
    const [pos, setPos] = useState(defaultPos);
    const [size] = useState(defaultSize);
    const dragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
    const windowRef = useRef(null);

    const handleMouseDown = useCallback((e) => {
        if (e.target.closest('.window-controls')) return;
        dragging.current = true;
        dragStart.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
        onFocus(id);
        e.preventDefault();
    }, [pos, id, onFocus]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!dragging.current) return;
            const dx = e.clientX - dragStart.current.x;
            const dy = e.clientY - dragStart.current.y;
            setPos({ x: dragStart.current.px + dx, y: dragStart.current.py + dy });
        };
        const handleMouseUp = () => { dragging.current = false; };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    if (isMinimized) return null;

    return (
        <div
            ref={windowRef}
            className={`window ${isActive ? 'active' : 'inactive'}`}
            style={{ left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex: isActive ? 100 : 10 }}
            onMouseDown={() => onFocus(id)}
        >
            {/* Title bar */}
            <div className="window-titlebar" onMouseDown={handleMouseDown}>
                <span className="window-titlebar-icon">{ICONS[icon]}</span>
                <span className="window-titlebar-title">{title}</span>
                <div className="window-controls">
                    <button className="window-ctrl-btn" onClick={() => onMinimize(id)} title="Minimize">_</button>
                    <button className="window-ctrl-btn" title="Maximize">□</button>
                    <button className="window-ctrl-btn close" onClick={() => onClose(id)} title="Close">✕</button>
                </div>
            </div>

            {/* Optional menu bar */}
            {menuBar && (
                <div className="window-menubar">
                    {menuBar.map((item) => (
                        <span key={item} className="window-menubar-item">{item}</span>
                    ))}
                </div>
            )}

            {/* Content */}
            <div className="window-content no-padding" style={{ padding: '8px' }}>
                {children}
            </div>

            {/* Optional status bar */}
            {statusBar && (
                <div className="window-statusbar">
                    {statusBar.map((item, i) => (
                        <span key={i} className="window-statusbar-cell">{item}</span>
                    ))}
                </div>
            )}
        </div>
    );
}
