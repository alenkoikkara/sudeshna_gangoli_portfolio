import { useRef, useState, useEffect } from 'react';
import { useDraggable } from '../hooks/useDraggable';

interface StickyWidgetProps {
  id: string;
  initialX: number;
  initialY: number;
  color?: 'yellow' | 'pink' | 'blue' | 'green';
  defaultText?: string;
  zIndex?: number;
}

const colorMap = {
  yellow: 'bg-[#FDF5C9] dark:bg-[#464332]',
  pink: 'bg-[#F8D7DA] dark:bg-[#4F353A]',
  blue: 'bg-[#D6E9FA] dark:bg-[#344453]',
  green: 'bg-[#D4F3D0] dark:bg-[#354936]',
  gray: 'bg-[#EBEBEB] dark:bg-[#3F3F3F]'
};

export function StickyWidget({ id, initialX, initialY, color = 'yellow', defaultText = '', zIndex = 5 }: StickyWidgetProps) {
  const noteRef = useRef<HTMLDivElement>(null);
  
  // Initialize state only once on client
  const [text, setText] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(`sticky-${id}`) || defaultText;
    }
    return defaultText;
  });

  const [pos] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        x: Math.min(initialX, window.innerWidth - 280),
        y: Math.min(initialY, window.innerHeight - 280)
      };
    }
    return { x: initialX, y: initialY };
  });

  useEffect(() => {
    localStorage.setItem(`sticky-${id}`, text);
  }, [text, id]);

  const { position, handlePointerDown, isDragging } = useDraggable(
    pos,
    noteRef,
    false
  );

  return (
    <div
      ref={noteRef}
      onPointerDown={handlePointerDown}
      className={`absolute transition-all
        ${isDragging ? 'drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)] cursor-grabbing scale-[1.02]' : 'drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] cursor-grab'}
      `}
      style={{
        left: position.x,
        top: position.y,
        zIndex
      }}
    >
      <div 
        className={`w-[260px] h-[260px] flex flex-col relative ${colorMap[color]}`}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)' }}
      >
        {/* Top drag bar */}
      <div className="h-[22px] w-full flex items-center justify-between px-2 shrink-0 border-b border-black/5 dark:border-white/5 transition-colors">
        <div className="flex gap-1.5 opacity-0 hover:opacity-100 transition-opacity">
          {/* Fake tiny window controls for authenticity */}
          <div className="w-[9px] h-[9px] bg-black/20 dark:bg-white/20 rounded-[1px]" />
          <div className="w-[9px] h-[9px] bg-black/20 dark:bg-white/20 rounded-[1px]" />
        </div>
      </div>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 w-full bg-transparent resize-none outline-none p-3 text-black/90 dark:text-white/90 text-[15px] leading-snug placeholder-black/30 dark:placeholder-white/30 cursor-text"
        placeholder=""
        spellCheck="false"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}
      />
      
      {/* Folded Corner Flap */}
      <div className="absolute bottom-0 right-0 w-[28px] h-[28px] bg-gradient-to-tl from-black/0 via-black/10 to-black/20 dark:from-white/0 dark:via-white/20 dark:to-white/40 shadow-[-3px_-3px_8px_rgba(0,0,0,0.15)] dark:shadow-[-3px_-3px_8px_rgba(0,0,0,0.4)] rounded-tl-lg pointer-events-none" />
      </div>
    </div>
  );
}
