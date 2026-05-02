import React, { useRef, useState } from 'react';
import { useDraggable } from '../hooks/useDraggable';

interface AppWindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFullscreen: () => void;
  onFocus: () => void;
  children?: React.ReactNode;
}

export function AppWindow({
  title,
  isOpen,
  isMinimized,
  isFullscreen,
  zIndex,
  onClose,
  onMinimize,
  onFullscreen,
  onFocus,
  children
}: AppWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  
  // Calculate initial centered position
  const [initialPos] = useState(() => {
    // Default size of 80% width up to 1000px, 80% height up to 700px
    const width = Math.min(1000, window.innerWidth * 0.8);
    const height = Math.min(700, window.innerHeight * 0.8);
    // Add random slight offset so multiple windows don't perfectly stack
    const offset = Math.floor(Math.random() * 40) - 20;
    return {
      x: Math.max(0, (window.innerWidth - width) / 2) + offset,
      y: Math.max(28, (window.innerHeight - height) / 2) + offset,
      width,
      height
    };
  });

  const { position, handlePointerDown, isDragging } = useDraggable(
    { x: initialPos.x, y: initialPos.y },
    windowRef,
    isFullscreen // disable dragging when fullscreen
  );

  return (
    <div
      ref={windowRef}
      onPointerDown={onFocus}
      className={`absolute flex flex-col overflow-hidden ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
        ${!isDragging ? 'transition-all duration-500' : ''}
        rounded-2xl
        ${!isOpen || isMinimized
            ? 'opacity-0 scale-[0.4] translate-y-[40vh] pointer-events-none' 
            : 'opacity-100 scale-100 translate-y-0'}
        bg-white/50 dark:bg-black/50 backdrop-blur-3xl border border-white/60 dark:border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)]
      `}
      style={{
        zIndex,
        ...(isFullscreen
          ? {
              top: 28, // Menubar height
              left: 0,
              width: '100vw',
              height: 'calc(100vh - 28px)',
            }
          : {
              top: position.y,
              left: position.x,
              width: initialPos.width,
              height: initialPos.height,
            }),
      }}
    >
      {/* Title Bar */}
      <div 
        className="h-12 flex items-center px-4 relative shrink-0 cursor-default"
        onPointerDown={handlePointerDown}
      >
        {/* Traffic Lights */}
        <div className="flex gap-2 z-10 group/lights">
          {/* Close */}
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-3 h-3 rounded-full bg-[#ff5f56] flex items-center justify-center transition-colors shadow-inner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[8px] h-[8px] text-black/60 opacity-0 group-hover/lights:opacity-100 transition-opacity"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          {/* Minimize */}
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="w-3 h-3 rounded-full bg-[#ffbd2e] flex items-center justify-center transition-colors shadow-inner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[8px] h-[8px] text-black/60 opacity-0 group-hover/lights:opacity-100 transition-opacity"><path d="M5 12h14"/></svg>
          </button>
          {/* Fullscreen */}
          <button 
            onClick={(e) => { e.stopPropagation(); onFullscreen(); }}
            className="w-3 h-3 rounded-full bg-[#27c93f] flex items-center justify-center transition-colors shadow-inner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[8px] h-[8px] text-black/60 opacity-0 group-hover/lights:opacity-100 transition-opacity"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
          </button>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm font-semibold text-foreground/80 tracking-wide">{title}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white/40 dark:bg-black/40 overflow-auto relative rounded-b-2xl">
        {children}
      </div>
    </div>
  );
}
