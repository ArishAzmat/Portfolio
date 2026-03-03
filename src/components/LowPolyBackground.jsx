import { BG_THEMES } from './bgThemes';

const STARS = [
    [60, 30], [150, 20], [300, 50], [480, 15], [700, 40], [900, 25], [1050, 60], [1150, 30],
    [200, 80], [550, 70], [850, 85], [1100, 75], [400, 100], [750, 90], [100, 110], [650, 45],
];

const TREE_LEFT = [30, 60, 90, 120, 50, 75];
const TREE_RIGHT = [1100, 1130, 1160, 1080, 1145];

export default function LowPolyBackground({ themeId = 'dusk' }) {
    const theme = BG_THEMES.find(t => t.id === themeId) || BG_THEMES[0];
    const [sky1, sky2, sky3, sky4] = theme.sky;
    const [hill1, hill2] = theme.hills;
    const [ground1, ground2] = theme.ground;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transition: 'opacity 0.4s ease' }}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={sky1} />
                    <stop offset="40%" stopColor={sky2} />
                    <stop offset="70%" stopColor={sky3} />
                    <stop offset="100%" stopColor={sky4} />
                </linearGradient>
            </defs>

            {/* Sky */}
            <rect width="1200" height="700" fill="url(#skyGrad)" />

            {/* Stars */}
            {STARS.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 1.5 : 1} fill="white" opacity={0.5 + (i % 3) * 0.15} />
            ))}

            {/* Sun / Moon */}
            <circle cx={theme.sun.cx} cy={theme.sun.cy} r="70" fill={theme.sun.color} opacity="0.15" />
            <circle cx={theme.sun.cx} cy={theme.sun.cy} r="45" fill={theme.sun.glow} opacity="0.25" />
            <circle cx={theme.sun.cx} cy={theme.sun.cy} r="28" fill="#fff8d0" opacity="0.7" />

            {/* Mountains */}
            {theme.mountains.map((m, i) => (
                <polygon key={i} points={m.points} fill={m.fill} opacity={i < 2 ? 0.8 : 1} />
            ))}

            {/* Foreground hills */}
            <polygon points="0,580 200,480 400,550 600,470 800,540 1000,465 1200,530 1200,700 0,700" fill={hill1} />
            <polygon points="0,600 250,510 450,570 650,500 850,565 1050,490 1200,545 1200,700 0,700" fill={hill2} />

            {/* Trees — left */}
            {TREE_LEFT.map((x, i) => (
                <g key={i} transform={`translate(${x}, ${590 - (i % 2) * 15})`}>
                    <polygon points="0,-40 12,0 -12,0" fill={theme.treeColor} />
                    <polygon points="0,-28 10,4 -10,4" fill={theme.treeDark} />
                    <rect x="-3" y="0" width="6" height="8" fill={theme.trunkColor} />
                </g>
            ))}

            {/* Trees — right */}
            {TREE_RIGHT.map((x, i) => (
                <g key={i} transform={`translate(${x}, ${585 - (i % 2) * 12})`}>
                    <polygon points="0,-35 10,0 -10,0" fill={theme.treeColor} />
                    <polygon points="0,-24 8,4 -8,4" fill={theme.treeDark} />
                    <rect x="-2.5" y="0" width="5" height="7" fill={theme.trunkColor} />
                </g>
            ))}

            {/* River */}
            <polygon points="480,700 520,560 560,540 590,550 610,545 650,560 680,700" fill={theme.river.fill} opacity="0.8" />
            <polygon points="495,700 525,570 560,550 600,558 640,550 665,570 685,700" fill={theme.river.overlay} opacity="0.5" />

            {/* Ground */}
            <polygon points="0,640 300,600 600,620 900,598 1200,615 1200,700 0,700" fill={ground1} />
            <polygon points="0,660 200,645 500,650 800,640 1200,655 1200,700 0,700" fill={ground2} />

            {/* Horizon glow */}
            <ellipse cx={theme.sun.cx} cy="360" rx="350" ry="60" fill={theme.sun.color} opacity="0.07" />
        </svg>
    );
}
