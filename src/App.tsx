import { useState, useEffect, useRef } from 'react';
import { Dock } from './components/Dock';
import { MenuBar } from './components/MenuBar';
import { MacBootScreen } from './components/MacBootScreen';
import { AppWindow } from './components/AppWindow';
import { DotGrid } from './components/DotGrid';
import { StickyWidget } from './components/StickyWidget';

export interface AppData {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  zIndex: number;
}

function App() {
  const [hasBooted, setHasBooted] = useState(false);
  const [activeZ, setActiveZ] = useState(10);
  const [apps, setApps] = useState<AppData[]>(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const openAppId = params.get('app');
    
    return [
      { id: 'project1', title: 'OCAD University', isOpen: openAppId === 'project1', isMinimized: false, isFullscreen: false, zIndex: 10 },
      { id: 'project2', title: 'Syncro', isOpen: openAppId === 'project2', isMinimized: false, isFullscreen: false, zIndex: 10 },
      { id: 'project3', title: 'Design Projects', isOpen: openAppId === 'project3', isMinimized: false, isFullscreen: false, zIndex: 10 },
      { id: 'about', title: 'About Me', isOpen: openAppId === 'about', isMinimized: false, isFullscreen: false, zIndex: 10 },
    ];
  });
  const [isTextHover, setIsTextHover] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  const openApp = (id: string) => {
    setApps(apps.map(app => {
      if (app.id === id) {
        return { ...app, isOpen: true, isMinimized: false, zIndex: activeZ + 1 };
      }
      return app;
    }));
    setActiveZ(prev => prev + 1);
  };

  const closeApp = (id: string) => {
    setApps(apps.map(app => app.id === id ? { ...app, isOpen: false } : app));
  };

  const minimizeApp = (id: string) => {
    setApps(apps.map(app => app.id === id ? { ...app, isMinimized: true } : app));
  };

  const toggleFullscreen = (id: string) => {
    setApps(apps.map(app => {
      if (app.id === id) {
        return { ...app, isFullscreen: !app.isFullscreen, zIndex: activeZ + 1 };
      }
      return app;
    }));
    setActiveZ(prev => prev + 1);
  };

  const focusApp = (id: string) => {
    setApps(apps.map(app => app.id === id ? { ...app, zIndex: activeZ + 1 } : app));
    setActiveZ(prev => prev + 1);
  };

  useEffect(() => {
    const openApps = apps.filter(a => a.isOpen && !a.isMinimized);
    const url = new URL(window.location.href);
    
    if (openApps.length > 0) {
      const topApp = [...openApps].sort((a, b) => b.zIndex - a.zIndex)[0];
      if (url.searchParams.get('app') !== topApp.id) {
        url.searchParams.set('app', topApp.id);
        window.history.replaceState({}, '', url);
      }
    } else {
      if (url.searchParams.has('app')) {
        url.searchParams.delete('app');
        window.history.replaceState({}, '', url);
      }
    }
  }, [apps]);

  return (
    <main className="h-screen w-screen relative overflow-hidden bg-surface">
      {!hasBooted && <MacBootScreen onComplete={() => setHasBooted(true)} />}

      {/* Top Menu Bar */}
      <MenuBar />

      {/* Windows Layer */}
      {hasBooted && apps.map(app => (
        <AppWindow
          key={app.id}
          {...app}
          onClose={() => closeApp(app.id)}
          onMinimize={() => minimizeApp(app.id)}
          onFullscreen={() => toggleFullscreen(app.id)}
          onFocus={() => focusApp(app.id)}
        >
          {/* Placeholder Content */}
          <div className="p-8 flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl font-bold mb-4">{app.title}</h2>
            <p className="text-foreground/60 max-w-md mx-auto text-lg leading-relaxed">
              This is a placeholder for the {app.title} project. Eventually, this will contain screenshots, case studies, or interactive embeds!
            </p>
          </div>
        </AppWindow>
      ))}

      {/* Custom Text Cursor */}
      <div 
        ref={cursorRef}
        className={`pointer-events-none w-[2px] h-12 bg-black dark:bg-white rounded-sm fixed top-0 left-0 z-[9999] transition-opacity duration-300 mix-blend-difference text-white ${isTextHover ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: `translate(-50%, -50%)` }}
      >
      </div>

      {/* Interactive Dot Grid Background */}
      <DotGrid />

      {/* Desktop Content Area */}
      <div className="relative w-[55%] z-10 h-[calc(100vh-28px)] m-auto flex flex-col items-start justify-center">
        <div 
          className="cursor-none"
          onMouseEnter={() => setIsTextHover(true)}
          onMouseLeave={() => setIsTextHover(false)}
        >
          <div className='text-[clamp(1.5rem,4vw,3rem)] font-medium mb-6'>
            Hello !
          </div>
          <div className='text-[clamp(2.25rem,5vw,3.5rem)] leading-none font-semibold font-serif'>
            My name is Sudeshna Gangoli.
          </div>
          <div className='text-[clamp(1.875rem,5vw,3.25rem)] leading-none font-semibold text-black/90 dark:text-white/70 mt-2 lg:mt-4'>
            I am a UX story teller, blending visual design & strategy.
          </div>
        </div>
      </div>

      {/* Sticky Notes */}
      {hasBooted && (
        <>
          <StickyWidget 
            id="note-1" 
            initialX={typeof window !== 'undefined' ? window.innerWidth - 340 : 800} 
            initialY={100} 
            color="yellow" 
            defaultText={"Scribblings for next project:\n\n- Fix grid padding\n- Setup CMS data\n- Polish animations ✨"} 
            zIndex={5}
          />
          <StickyWidget 
            id="note-2" 
            initialX={typeof window !== 'undefined' ? window.innerWidth - 300 : 850} 
            initialY={380} 
            color="pink" 
            defaultText={"Current Activities:\n\nBuilding out this amazing OS-style portfolio! 🚀"} 
            zIndex={6}
          />
        </>
      )}

      {/* Dock */}
      <Dock 
        onOpenApp={openApp} 
        activeApps={apps.filter(a => a.isOpen && !a.isMinimized).map(a => a.id)} 
      />
    </main>
  );
}

export default App;
