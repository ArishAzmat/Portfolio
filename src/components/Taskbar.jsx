import { useState, useEffect, useRef } from 'react';
import './Taskbar.css';

export default function Taskbar({ windows, activeWindowId, onWindowToggle, onStartMenuToggle, startMenuOpen }) {
    const [time, setTime] = useState('');

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            setTime(`${h}:${m}`);
        };
        tick();
        const id = setInterval(tick, 10000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="taskbar">
            {/* Start Button */}
            <button
                className={`taskbar-start-btn ${startMenuOpen ? 'active' : ''}`}
                onClick={onStartMenuToggle}
                id="start-btn"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <rect x="0" y="0" width="7" height="7" fill="#ff0000" />
                    <rect x="9" y="0" width="7" height="7" fill="#00cc00" />
                    <rect x="0" y="9" width="7" height="7" fill="#0000ff" />
                    <rect x="9" y="9" width="7" height="7" fill="#ffcc00" />
                </svg>
                <span>Start</span>
            </button>

            {/* Separator */}
            <div className="taskbar-sep" />

            {/* Window Buttons */}
            <div className="taskbar-windows">
                {windows.filter(w => !w.closed).map(win => (
                    <button
                        key={win.id}
                        className={`taskbar-win-btn ${activeWindowId === win.id && !win.minimized ? 'active' : ''}`}
                        onClick={() => onWindowToggle(win.id)}
                    >
                        <span className="taskbar-win-icon">{win.icon}</span>
                        <span className="taskbar-win-title">{win.title}</span>
                    </button>
                ))}
            </div>

            {/* Tray */}
            <div className="taskbar-tray">
                <div className="taskbar-tray-sep" />
                <div className="taskbar-clock">
                    {time}
                </div>
            </div>
        </div>
    );
}
