import { useEffect, useState } from 'react';
import './BootScreen.css';

const messages = [
    'NEXUS OS 9.5 — Booting...',
    'Loading kernel modules...',
    'Initializing low-poly subsystems...',
    'Mounting filesystem...',
    'Starting graphical interface...',
];

export default function BootScreen({ onDone }) {
    const [msgIdx, setMsgIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let p = 0;
        let m = 0;
        const interval = setInterval(() => {
            p += 3;
            if (p % 20 === 0 && m < messages.length - 1) m++;
            setProgress(p);
            setMsgIdx(m);
            if (p >= 100) {
                clearInterval(interval);
                setDone(true);
                setTimeout(onDone, 500);
            }
        }, 45);
        return () => clearInterval(interval);
    }, [onDone]);

    return (
        <div className={`boot-screen ${done ? 'boot-fade-out' : ''}`}>
            <div className="boot-content">
                {/* Logo */}
                <pre className="boot-ascii">
                    {`  _   _ _______  ____  _   _  ___  ____
 | \\ | | ____\\ \\/ /  \\/  || | | |/ ___|
 |  \\| |  _|  \\  /| |\\/| || | | | |
 | |\\  | |___ /  \\| |  | || |_| | |___
 |_| \\_|_____/_/\\_\\_|  |_| \\___/ \\____|`}
                </pre>

                <p className="boot-version">Version 9.5.2 — Low Poly Edition</p>
                <p className="boot-copy">Copyright © 1996–2026 NEXUS Corp. All rights reserved.</p>

                <div className="boot-divider" />

                {/* Status message */}
                <p className="boot-msg">{messages[msgIdx]}<span className="boot-cursor">_</span></p>

                {/* Progress bar */}
                <div className="boot-bar-outer">
                    <div className="boot-bar-inner" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
}
