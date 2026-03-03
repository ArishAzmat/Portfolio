import { useState, useCallback, useEffect, useRef } from 'react';
import LowPolyBackground from './components/LowPolyBackground';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import BootScreen from './components/BootScreen';
import Window from './components/Window';
import ContextMenu from './components/ContextMenu';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import './App.css';

const WINDOW_DEFS = {
  about: {
    id: 'about',
    title: 'About Me — Portfolio',
    icon: 'computer',
    defaultPos: { x: 80, y: 60 },
    defaultSize: { w: 480, h: 320 },
    menuBar: ['File', 'Edit', 'View', 'Help'],
    statusBar: ['Ready', 'NEXUS OS 9.5'],
  },
  projects: {
    id: 'projects',
    title: 'My Projects — File Explorer',
    icon: 'folder',
    defaultPos: { x: 200, y: 100 },
    defaultSize: { w: 520, h: 380 },
    menuBar: ['File', 'Edit', 'View', 'Favorites', 'Help'],
    statusBar: ['6 object(s)', '2.4 MB'],
  },
  skills: {
    id: 'skills',
    title: 'Skills.txt — Notepad',
    icon: 'doc',
    defaultPos: { x: 350, y: 80 },
    defaultSize: { w: 380, h: 370 },
    menuBar: ['File', 'Edit', 'Format', 'View', 'Help'],
    statusBar: ['Ln 1, Col 1'],
  },
  contact: {
    id: 'contact',
    title: 'Contact — New Message',
    icon: 'doc',
    defaultPos: { x: 140, y: 150 },
    defaultSize: { w: 420, h: 340 },
    menuBar: ['File', 'Send', 'View', 'Help'],
    statusBar: null,
  },
};

const createWindowState = (id) => ({
  ...WINDOW_DEFS[id],
  minimized: false,
  closed: false,
});

export default function App() {
  const [booted, setBooted] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);

  // Context menu
  const [ctxMenu, setCtxMenu] = useState(null); // { x, y } or null

  // Background theme
  const [bgTheme, setBgTheme] = useState('dusk');
  const [bgKey, setBgKey] = useState(0); // bump to re-mount bg on refresh
  const desktopRef = useRef(null);

  // Close start menu on outside click
  useEffect(() => {
    if (!startMenuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [startMenuOpen]);

  const openWindow = useCallback((id) => {
    setStartMenuOpen(false);
    setWindows(prev => {
      const existing = prev.find(w => w.id === id);
      if (existing) {
        return prev.map(w => w.id === id ? { ...w, minimized: false, closed: false } : w);
      }
      return [...prev, createWindowState(id)];
    });
    setActiveWindowId(id);
  }, []);

  const focusWindow = useCallback((id) => {
    setActiveWindowId(id);
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, minimized: true } : w));
    setActiveWindowId(null);
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, closed: true } : w));
    setActiveWindowId(prev => prev === id ? null : prev);
  }, []);

  const toggleWindow = useCallback((id) => {
    setWindows(prev => {
      const win = prev.find(w => w.id === id);
      if (!win || win.closed) return prev;
      if (activeWindowId === id && !win.minimized) {
        return prev.map(w => w.id === id ? { ...w, minimized: true } : w);
      }
      return prev.map(w => w.id === id ? { ...w, minimized: false } : w);
    });
    setActiveWindowId(id);
  }, [activeWindowId]);

  // Context menu handlers
  const handleDesktopContextMenu = useCallback((e) => {
    // Only fire on the desktop itself, not on windows or taskbar
    if (e.target.closest('.window') || e.target.closest('.taskbar')) return;
    e.preventDefault();
    setCtxMenu({ x: e.clientX, y: e.clientY });
    setStartMenuOpen(false);
  }, []);

  const handleRefresh = useCallback(() => {
    // Flash animation + re-mount background
    if (desktopRef.current) {
      desktopRef.current.classList.add('desktop-refreshing');
      setTimeout(() => desktopRef.current?.classList.remove('desktop-refreshing'), 500);
    }
    setBgKey(k => k + 1);
  }, []);

  const sectionContent = {
    about: <AboutMe onOpen={openWindow} />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  };

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      {/* Desktop area */}
      <div
        ref={desktopRef}
        className="app-desktop"
        onClick={() => { setStartMenuOpen(false); setCtxMenu(null); }}
        onContextMenu={handleDesktopContextMenu}
      >
        <LowPolyBackground key={bgKey} themeId={bgTheme} />
        <Desktop onOpenWindow={openWindow} />

        {/* Windows */}
        {windows.filter(w => !w.closed).map(win => (
          <Window
            key={win.id}
            {...win}
            isActive={activeWindowId === win.id}
            isMinimized={win.minimized}
            onFocus={focusWindow}
            onMinimize={minimizeWindow}
            onClose={closeWindow}
          >
            {sectionContent[win.id]}
          </Window>
        ))}
      </div>

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        onWindowToggle={toggleWindow}
        onStartMenuToggle={() => setStartMenuOpen(v => !v)}
        startMenuOpen={startMenuOpen}
      />

      {/* Start Menu */}
      {startMenuOpen && <StartMenu onOpen={openWindow} />}

      {/* Right-click context menu */}
      {ctxMenu && (
        <ContextMenu
          x={ctxMenu.x}
          y={ctxMenu.y}
          onClose={() => setCtxMenu(null)}
          onRefresh={handleRefresh}
          onChangeBg={setBgTheme}
          currentBgId={bgTheme}
        />
      )}
    </>
  );
}
