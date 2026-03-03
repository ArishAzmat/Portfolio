/**
 * PixelIcons — Retro 16×16 pixel art SVG icon library
 * All icons use only <rect> elements for authentic pixel art look.
 * No curves, no gradients, no modern vector shapes.
 */

const base = { width: 16, height: 16, viewBox: '0 0 16 16', 'aria-hidden': true };

// ── Desktop / Shell icons ──────────────────────────────────────────────────

export function IconUser({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Head */}
            <rect x="5" y="1" width="6" height="6" fill="#f5cba7" />
            {/* Hair */}
            <rect x="4" y="1" width="8" height="2" fill="#3d2b1f" />
            {/* Eyes */}
            <rect x="6" y="4" width="1" height="1" fill="#1a1a2e" />
            <rect x="9" y="4" width="1" height="1" fill="#1a1a2e" />
            {/* Shoulders / body */}
            <rect x="3" y="9" width="10" height="6" fill="#1a3a6a" />
            <rect x="5" y="7" width="6" height="3" fill="#f5cba7" />
        </svg>
    );
}

export function IconFolder({ size = 16, open = false }) {
    return (
        <svg {...base} width={size} height={size}>
            {open ? (
                <>
                    <rect x="0" y="3" width="6" height="2" fill="#f0c040" />
                    <rect x="0" y="5" width="13" height="1" fill="#c89010" />
                    <rect x="0" y="6" width="2" height="7" fill="#f0c040" />
                    <rect x="2" y="7" width="1" height="6" fill="#c89010" />
                    <rect x="3" y="6" width="13" height="1" fill="#f0c040" />
                    <rect x="14" y="7" width="2" height="6" fill="#c89010" />
                    <rect x="3" y="12" width="14" height="1" fill="#c89010" />
                    <rect x="3" y="7" width="11" height="5" fill="#f0d060" />
                </>
            ) : (
                <>
                    <rect x="0" y="4" width="16" height="10" fill="#f0c040" />
                    <rect x="0" y="3" width="7" height="2" fill="#f0c040" />
                    <rect x="0" y="4" width="16" height="1" fill="#c89010" />
                    <rect x="0" y="14" width="16" height="1" fill="#c89010" />
                    <rect x="15" y="4" width="1" height="10" fill="#c89010" />
                </>
            )}
        </svg>
    );
}

export function IconDocument({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            <rect x="2" y="0" width="9" height="16" fill="#ffffff" />
            <rect x="11" y="3" width="3" height="13" fill="#ffffff" />
            {/* Folded corner */}
            <rect x="9" y="0" width="2" height="2" fill="#c0c0c0" />
            <rect x="11" y="0" width="3" height="3" fill="#808080" />
            {/* Lines of text */}
            <rect x="4" y="4" width="7" height="1" fill="#808080" />
            <rect x="4" y="6" width="7" height="1" fill="#808080" />
            <rect x="4" y="8" width="5" height="1" fill="#808080" />
            <rect x="4" y="10" width="6" height="1" fill="#808080" />
            {/* Outline */}
            <rect x="1" y="0" width="1" height="16" fill="#404040" />
            <rect x="2" y="15" width="12" height="1" fill="#404040" />
            <rect x="13" y="3" width="1" height="13" fill="#404040" />
        </svg>
    );
}

export function IconComputer({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Monitor */}
            <rect x="1" y="1" width="14" height="10" fill="#c0c0c0" />
            <rect x="2" y="2" width="12" height="8" fill="#000080" />
            {/* Screen content (fake pixels) */}
            <rect x="3" y="3" width="2" height="1" fill="#ffffff" />
            <rect x="7" y="5" width="4" height="1" fill="#00ff00" />
            {/* Stand */}
            <rect x="6" y="11" width="4" height="2" fill="#808080" />
            {/* Base */}
            <rect x="4" y="13" width="8" height="2" fill="#a0a0a0" />
            <rect x="4" y="13" width="8" height="1" fill="#808080" />
        </svg>
    );
}

export function IconTrash({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Lid */}
            <rect x="2" y="2" width="12" height="2" fill="#a0a0a0" />
            <rect x="5" y="0" width="6" height="2" fill="#a0a0a0" />
            <rect x="5" y="0" width="6" height="1" fill="#808080" />
            <rect x="2" y="3" width="12" height="1" fill="#606060" />
            {/* Body */}
            <rect x="3" y="4" width="10" height="11" fill="#c0c0c0" />
            <rect x="3" y="4" width="10" height="1" fill="#808080" />
            <rect x="13" y="4" width="1" height="11" fill="#808080" />
            <rect x="3" y="14" width="10" height="1" fill="#808080" />
            {/* Stripes */}
            <rect x="5" y="6" width="1" height="7" fill="#909090" />
            <rect x="7" y="6" width="1" height="7" fill="#909090" />
            <rect x="9" y="6" width="1" height="7" fill="#909090" />
            <rect x="11" y="6" width="1" height="7" fill="#909090" />
        </svg>
    );
}

// ── App / Section icons ────────────────────────────────────────────────────

export function IconChart({ size = 16 }) {
    // Bar chart — for dashboard / web projects
    return (
        <svg {...base} width={size} height={size}>
            <rect x="0" y="12" width="16" height="2" fill="#808080" />
            <rect x="0" y="0" width="2" height="14" fill="#808080" />
            {/* Bars */}
            <rect x="3" y="7" width="2" height="5" fill="#000080" />
            <rect x="7" y="4" width="2" height="8" fill="#000080" />
            <rect x="11" y="2" width="2" height="10" fill="#000080" />
        </svg>
    );
}

export function IconMountain({ size = 16 }) {
    // Low poly mountain — for 3D/art projects
    return (
        <svg {...base} width={size} height={size}>
            <rect x="6" y="1" width="4" height="2" fill="#c0c0c0" />
            <rect x="4" y="3" width="8" height="2" fill="#909090" />
            <rect x="2" y="5" width="12" height="2" fill="#707070" />
            <rect x="0" y="7" width="16" height="2" fill="#2d6a4f" />
            <rect x="0" y="9" width="16" height="7" fill="#1a3a2a" />
            {/* Snow cap */}
            <rect x="7" y="1" width="2" height="2" fill="#ffffff" />
            <rect x="6" y="3" width="4" height="1" fill="#e0e0e0" />
        </svg>
    );
}

export function IconChat({ size = 16 }) {
    // Chat bubble — for chat apps
    return (
        <svg {...base} width={size} height={size}>
            <rect x="1" y="2" width="13" height="9" fill="#c0c0c0" />
            <rect x="0" y="3" width="1" height="7" fill="#404040" />
            <rect x="14" y="3" width="1" height="7" fill="#404040" />
            <rect x="1" y="1" width="13" height="1" fill="#404040" />
            <rect x="1" y="11" width="13" height="1" fill="#404040" />
            {/* Tail */}
            <rect x="2" y="12" width="2" height="1" fill="#404040" />
            <rect x="2" y="13" width="1" height="1" fill="#404040" />
            <rect x="2" y="14" width="2" height="1" fill="#c0c0c0" />
            {/* Lines inside bubble */}
            <rect x="3" y="4" width="7" height="1" fill="#808080" />
            <rect x="3" y="6" width="9" height="1" fill="#808080" />
            <rect x="3" y="8" width="5" height="1" fill="#808080" />
        </svg>
    );
}

export function IconGear({ size = 16 }) {
    // Gear / settings / CLI tools
    return (
        <svg {...base} width={size} height={size}>
            {/* Gear body */}
            <rect x="5" y="5" width="6" height="6" fill="#808080" />
            {/* Teeth */}
            <rect x="6" y="3" width="4" height="2" fill="#808080" />
            <rect x="6" y="11" width="4" height="2" fill="#808080" />
            <rect x="3" y="6" width="2" height="4" fill="#808080" />
            <rect x="11" y="6" width="2" height="4" fill="#808080" />
            {/* Center hole */}
            <rect x="6" y="6" width="4" height="4" fill="#c0c0c0" />
            <rect x="7" y="7" width="2" height="2" fill="#606060" />
        </svg>
    );
}

export function IconStar({ size = 16 }) {
    // Star/sparkle — art/shader projects
    return (
        <svg {...base} width={size} height={size}>
            <rect x="7" y="0" width="2" height="4" fill="#f0c040" />
            <rect x="7" y="12" width="2" height="4" fill="#f0c040" />
            <rect x="0" y="7" width="4" height="2" fill="#f0c040" />
            <rect x="12" y="7" width="4" height="2" fill="#f0c040" />
            <rect x="7" y="4" width="2" height="8" fill="#f0c040" />
            <rect x="4" y="7" width="8" height="2" fill="#f0c040" />
            {/* Diagonals */}
            <rect x="2" y="2" width="2" height="2" fill="#f0c040" />
            <rect x="4" y="4" width="2" height="2" fill="#f0c040" />
            <rect x="10" y="10" width="2" height="2" fill="#f0c040" />
            <rect x="12" y="12" width="2" height="2" fill="#f0c040" />
            <rect x="10" y="2" width="2" height="2" fill="#f0c040" />
            <rect x="8" y="4" width="2" height="2" fill="#f0c040" />
            <rect x="2" y="12" width="2" height="2" fill="#f0c040" />
            <rect x="4" y="10" width="2" height="2" fill="#f0c040" />
        </svg>
    );
}

export function IconNote({ size = 16 }) {
    // Notepad — journal/log tools
    return (
        <svg {...base} width={size} height={size}>
            {/* Page */}
            <rect x="2" y="1" width="12" height="14" fill="#ffffc0" />
            <rect x="2" y="1" width="12" height="1" fill="#808080" />
            <rect x="2" y="14" width="12" height="1" fill="#808080" />
            <rect x="2" y="1" width="1" height="14" fill="#808080" />
            <rect x="13" y="1" width="1" height="14" fill="#808080" />
            {/* Spiral holes */}
            <rect x="4" y="3" width="2" height="2" fill="#ff8080" />
            <rect x="4" y="7" width="2" height="2" fill="#ff8080" />
            <rect x="4" y="11" width="2" height="2" fill="#ff8080" />
            {/* Lines */}
            <rect x="7" y="4" width="5" height="1" fill="#c0c0c0" />
            <rect x="7" y="6" width="5" height="1" fill="#c0c0c0" />
            <rect x="7" y="8" width="5" height="1" fill="#c0c0c0" />
            <rect x="7" y="10" width="3" height="1" fill="#c0c0c0" />
        </svg>
    );
}

export function IconEnvelope({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            <rect x="0" y="3" width="16" height="10" fill="#ffffc0" />
            <rect x="0" y="3" width="16" height="1" fill="#808080" />
            <rect x="0" y="12" width="16" height="1" fill="#808080" />
            <rect x="0" y="3" width="1" height="10" fill="#808080" />
            <rect x="15" y="3" width="1" height="10" fill="#808080" />
            {/* Flap V shape */}
            <rect x="1" y="4" width="1" height="1" fill="#c0a000" />
            <rect x="2" y="5" width="1" height="1" fill="#c0a000" />
            <rect x="3" y="6" width="1" height="1" fill="#c0a000" />
            <rect x="4" y="7" width="1" height="1" fill="#c0a000" />
            <rect x="5" y="8" width="1" height="1" fill="#c0a000" />
            <rect x="6" y="9" width="1" height="1" fill="#c0a000" />
            <rect x="7" y="10" width="2" height="1" fill="#c0a000" />
            <rect x="9" y="9" width="1" height="1" fill="#c0a000" />
            <rect x="10" y="8" width="1" height="1" fill="#c0a000" />
            <rect x="11" y="7" width="1" height="1" fill="#c0a000" />
            <rect x="12" y="6" width="1" height="1" fill="#c0a000" />
            <rect x="13" y="5" width="1" height="1" fill="#c0a000" />
            <rect x="14" y="4" width="1" height="1" fill="#c0a000" />
        </svg>
    );
}

export function IconLightning({ size = 16 }) {
    // Skills / power
    return (
        <svg {...base} width={size} height={size}>
            <rect x="6" y="0" width="5" height="7" fill="#f0c040" />
            <rect x="5" y="1" width="1" height="6" fill="#f0c040" />
            <rect x="3" y="7" width="8" height="2" fill="#f0c040" />
            <rect x="4" y="9" width="7" height="7" fill="#f0c040" />
            <rect x="5" y="8" width="6" height="8" fill="#f0c040" />
            {/* Clear away to form bolt shape */}
            <rect x="9" y="0" width="7" height="7" fill="none" />
            <rect x="7" y="9" width="9" height="7" fill="none" />
        </svg>
    );
}

export function IconLightningBolt({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Bolt shape via pixel rects */}
            <rect x="9" y="0" width="3" height="6" fill="#f0c040" />
            <rect x="7" y="2" width="5" height="5" fill="#f0c040" />
            <rect x="5" y="5" width="7" height="5" fill="#f0c040" />
            <rect x="4" y="7" width="8" height="3" fill="#f0c040" />
            <rect x="4" y="9" width="6" height="6" fill="#f0c040" />
            <rect x="4" y="13" width="4" height="3" fill="#f0c040" />
            {/* White highlight */}
            <rect x="8" y="1" width="2" height="3" fill="#fff8a0" />
        </svg>
    );
}

export function IconRefresh({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Left arc top */}
            <rect x="3" y="2" width="8" height="2" fill="#404040" />
            <rect x="2" y="3" width="2" height="4" fill="#404040" />
            <rect x="12" y="2" width="2" height="2" fill="#404040" />
            {/* Right arc bottom */}
            <rect x="5" y="12" width="8" height="2" fill="#404040" />
            <rect x="12" y="9" width="2" height="4" fill="#404040" />
            <rect x="2" y="11" width="2" height="2" fill="#404040" />
            {/* Top arrow */}
            <rect x="11" y="1" width="3" height="1" fill="#404040" />
            <rect x="13" y="2" width="1" height="2" fill="#404040" />
            <rect x="12" y="3" width="1" height="1" fill="#404040" />
            {/* Bottom arrow */}
            <rect x="2" y="12" width="3" height="1" fill="#404040" />
            <rect x="2" y="13" width="1" height="2" fill="#404040" />
            <rect x="3" y="14" width="1" height="1" fill="#404040" />
        </svg>
    );
}

export function IconImage({ size = 16 }) {
    // Picture/wallpaper
    return (
        <svg {...base} width={size} height={size}>
            <rect x="1" y="2" width="14" height="12" fill="#c8e0f0" />
            <rect x="1" y="2" width="14" height="1" fill="#404040" />
            <rect x="1" y="13" width="14" height="1" fill="#404040" />
            <rect x="1" y="2" width="1" height="12" fill="#404040" />
            <rect x="14" y="2" width="1" height="12" fill="#404040" />
            {/* Sun */}
            <rect x="3" y="4" width="3" height="3" fill="#f0c040" />
            {/* Mountains */}
            <rect x="2" y="8" width="6" height="5" fill="#2d6a4f" />
            <rect x="4" y="6" width="2" height="2" fill="#2d6a4f" />
            <rect x="7" y="7" width="7" height="6" fill="#4a3f6b" />
            <rect x="9" y="5" width="3" height="2" fill="#4a3f6b" />
        </svg>
    );
}

export function IconMonitor({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            <rect x="1" y="1" width="14" height="10" fill="#c0c0c0" />
            <rect x="1" y="1" width="14" height="1" fill="#ffffff" />
            <rect x="1" y="10" width="14" height="1" fill="#404040" />
            <rect x="1" y="1" width="1" height="10" fill="#ffffff" />
            <rect x="14" y="1" width="1" height="10" fill="#404040" />
            <rect x="2" y="2" width="12" height="8" fill="#000080" />
            {/* Screen glow */}
            <rect x="3" y="3" width="3" height="1" fill="#ffffff" />
            <rect x="3" y="5" width="8" height="1" fill="#00aaff" />
            <rect x="3" y="7" width="5" height="1" fill="#00aaff" />
            {/* Stand */}
            <rect x="6" y="11" width="4" height="2" fill="#808080" />
            <rect x="4" y="13" width="8" height="2" fill="#a0a0a0" />
        </svg>
    );
}

export function IconGrid({ size = 16 }) {
    // Arrange icons
    return (
        <svg {...base} width={size} height={size}>
            <rect x="0" y="0" width="6" height="6" fill="#808080" />
            <rect x="1" y="1" width="4" height="4" fill="#c0c0c0" />
            <rect x="8" y="0" width="6" height="6" fill="#808080" />
            <rect x="9" y="1" width="4" height="4" fill="#c0c0c0" />
            <rect x="0" y="8" width="6" height="6" fill="#808080" />
            <rect x="1" y="9" width="4" height="4" fill="#c0c0c0" />
            <rect x="8" y="8" width="6" height="6" fill="#808080" />
            <rect x="9" y="9" width="4" height="4" fill="#c0c0c0" />
        </svg>
    );
}

export function IconLink({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Left link ring */}
            <rect x="1" y="5" width="6" height="6" fill="#000080" />
            <rect x="2" y="6" width="4" height="4" fill="#c0c0c0" />
            {/* Right link ring */}
            <rect x="9" y="5" width="6" height="6" fill="#000080" />
            <rect x="10" y="6" width="4" height="4" fill="#c0c0c0" />
            {/* Chain links */}
            <rect x="6" y="7" width="4" height="2" fill="#000080" />
        </svg>
    );
}

export function IconCode({ size = 16 }) {
    // Source code / github
    return (
        <svg {...base} width={size} height={size}>
            {/* Background */}
            <rect x="0" y="0" width="16" height="16" fill="#1a1a1a" />
            {/* Code lines */}
            <rect x="2" y="3" width="5" height="1" fill="#00cc00" />
            <rect x="4" y="5" width="6" height="1" fill="#00cc00" />
            <rect x="4" y="7" width="4" height="1" fill="#00cc00" />
            <rect x="2" y="9" width="6" height="1" fill="#00cc00" />
            <rect x="2" y="11" width="3" height="1" fill="#00cc00" />
            {/* < > brackets */}
            <rect x="9" y="5" width="1" height="1" fill="#ffffff" />
            <rect x="10" y="6" width="1" height="1" fill="#ffffff" />
            <rect x="9" y="7" width="1" height="1" fill="#ffffff" />
            <rect x="12" y="5" width="1" height="1" fill="#ffffff" />
            <rect x="11" y="6" width="1" height="1" fill="#ffffff" />
            <rect x="12" y="7" width="1" height="1" fill="#ffffff" />
            {/* Cursor blink */}
            <rect x="2" y="13" width="1" height="2" fill="#ffffff" />
        </svg>
    );
}

export function IconPower({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Circle */}
            <rect x="4" y="2" width="8" height="2" fill="#c04040" />
            <rect x="2" y="4" width="2" height="8" fill="#c04040" />
            <rect x="12" y="4" width="2" height="8" fill="#c04040" />
            <rect x="4" y="12" width="8" height="2" fill="#c04040" />
            {/* Power line in middle */}
            <rect x="7" y="2" width="2" height="7" fill="#c04040" />
            {/* inner cutout */}
            <rect x="4" y="4" width="8" height="8" fill="none" />
            <rect x="5" y="5" width="6" height="6" fill="none" />
        </svg>
    );
}

export function IconSend({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            {/* Arrow pointing right */}
            <rect x="0" y="7" width="10" height="2" fill="#000080" />
            <rect x="8" y="5" width="2" height="6" fill="#000080" />
            <rect x="10" y="4" width="2" height="1" fill="#000080" />
            <rect x="12" y="3" width="2" height="1" fill="#000080" />
            <rect x="14" y="2" width="2" height="12" fill="#000080" />
            <rect x="12" y="12" width="2" height="1" fill="#000080" />
            <rect x="10" y="11" width="2" height="1" fill="#000080" />
        </svg>
    );
}

export function IconClear({ size = 16 }) {
    // Eraser / clear
    return (
        <svg {...base} width={size} height={size}>
            <rect x="1" y="5" width="11" height="8" fill="#ff8080" />
            <rect x="1" y="5" width="11" height="1" fill="#c04040" />
            <rect x="1" y="12" width="11" height="1" fill="#c04040" />
            <rect x="1" y="5" width="1" height="8" fill="#c04040" />
            <rect x="11" y="5" width="1" height="8" fill="#c04040" />
            {/* X */}
            <rect x="3" y="7" width="2" height="2" fill="#ffffff" />
            <rect x="5" y="9" width="2" height="2" fill="#ffffff" />
            <rect x="7" y="7" width="2" height="2" fill="#ffffff" />
            <rect x="5" y="9" width="2" height="2" fill="#ffffff" />
            {/* Handle */}
            <rect x="12" y="3" width="3" height="10" fill="#c0a060" />
            <rect x="12" y="3" width="3" height="1" fill="#907040" />
        </svg>
    );
}

export function IconGithub({ size = 16 }) {
    return (
        <svg {...base} width={size} height={size}>
            <rect x="0" y="0" width="16" height="16" fill="#1a1a1a" />
            {/* Cat-octocat silhouette, pixel version */}
            <rect x="4" y="2" width="8" height="8" fill="#ffffff" />
            {/* Ears */}
            <rect x="3" y="2" width="2" height="2" fill="#ffffff" />
            <rect x="11" y="2" width="2" height="2" fill="#ffffff" />
            {/* Eyes */}
            <rect x="5" y="5" width="2" height="2" fill="#1a1a1a" />
            <rect x="9" y="5" width="2" height="2" fill="#1a1a1a" />
            {/* Nose */}
            <rect x="7" y="7" width="2" height="1" fill="#1a1a1a" />
            {/* Body / tentacle base */}
            <rect x="3" y="10" width="10" height="4" fill="#ffffff" />
            <rect x="2" y="12" width="2" height="3" fill="#ffffff" />
            <rect x="5" y="12" width="2" height="3" fill="#ffffff" />
            <rect x="9" y="12" width="2" height="3" fill="#ffffff" />
            <rect x="12" y="12" width="2" height="3" fill="#ffffff" />
        </svg>
    );
}
