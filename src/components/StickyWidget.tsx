import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

const comebacks = [
  "Hey, I liked it right there!",
  "Please don't touch my stuff...",
  "Nope, it goes back here.",
  "Stop moving my notes! 😡",
  "I'm working on that...",
  "Hands off!",
  "Let's just put this back...",
  "Did I say you could move this?",
  "Ahem. It belongs right here.",
  "My portfolio, my rules. ✨",
  "Nice try, but no.",
  "I spent 10 minutes placing that perfectly!",
  "Are we playing hide and seek?",
  "Excuse me?!",
  "Do you mind?"
];

const editComebacks = [
  "Hey, that's my to-do list!",
  "No editing allowed! 🛑",
  "Get your own sticky notes!",
  "I need those notes...",
  "Please don't delete my ideas!",
  "Are you trying to give me more work?",
  "Hey! I wrote that for a reason."
];

export function StickyWidget({ initialX, initialY, color = 'yellow', defaultText = '', zIndex = 5 }: StickyWidgetProps) {
  const noteRef = useRef<HTMLDivElement>(null);
  
  // Always use default text now, ignore localStorage so visitor can't permanently delete notes
  const [text, setText] = useState(defaultText);
  const textRef = useRef(defaultText);

  const [pos] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        x: Math.min(initialX, window.innerWidth - 280),
        y: Math.min(initialY, window.innerHeight - 280)
      };
    }
    return { x: initialX, y: initialY };
  });

  const [isBeingReturned, setIsBeingReturned] = useState(false);
  const [ghostCursor, setGhostCursor] = useState({ visible: false, x: 0, y: 0, text: '' });
  const prevDragging = useRef(false);
  const isAnimating = useRef(false);
  const typingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { position, setPosition, handlePointerDown, isDragging } = useDraggable(
    pos,
    noteRef,
    isBeingReturned
  );

  useEffect(() => {
    if (prevDragging.current && !isDragging) {
      const dx = position.x - pos.x;
      const dy = position.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > 50 && !isAnimating.current) {
        startReturnAnimation();
      }
    }
    prevDragging.current = isDragging;
  }, [isDragging, position, pos]);

  const startReturnAnimation = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsBeingReturned(true);
    const text = comebacks[Math.floor(Math.random() * comebacks.length)];

    setGhostCursor({ visible: true, x: position.x + 400, y: position.y + 100, text: "" });
    await new Promise(r => setTimeout(r, 50));

    setGhostCursor({ visible: true, x: position.x + 130, y: position.y + 10, text: "" });
    await new Promise(r => setTimeout(r, 700)); 

    setGhostCursor({ visible: true, x: position.x + 130, y: position.y + 10, text });
    await new Promise(r => setTimeout(r, 1400)); 

    setPosition(pos); 
    setGhostCursor({ visible: true, x: pos.x + 130, y: pos.y + 10, text });
    await new Promise(r => setTimeout(r, 700));

    await new Promise(r => setTimeout(r, 600));
    setGhostCursor({ visible: false, x: pos.x + 130, y: pos.y + 10, text: "" });
    
    setIsBeingReturned(false);
    isAnimating.current = false;
  };

  const startEditRevertAnimation = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsBeingReturned(true);
    const text = editComebacks[Math.floor(Math.random() * editComebacks.length)];

    setGhostCursor({ visible: true, x: position.x + 400, y: position.y + 100, text: "" });
    await new Promise(r => setTimeout(r, 50));

    setGhostCursor({ visible: true, x: position.x + 130, y: position.y + 130, text: "" });
    await new Promise(r => setTimeout(r, 700)); 

    setGhostCursor({ visible: true, x: position.x + 130, y: position.y + 130, text });
    
    let currentString = textRef.current;
    
    // Find common prefix
    let prefixLen = 0;
    while (prefixLen < currentString.length && prefixLen < defaultText.length && currentString[prefixLen] === defaultText[prefixLen]) {
      prefixLen++;
    }

    // Find common suffix
    let suffixLen = 0;
    while (
      suffixLen < currentString.length - prefixLen &&
      suffixLen < defaultText.length - prefixLen &&
      currentString[currentString.length - 1 - suffixLen] === defaultText[defaultText.length - 1 - suffixLen]
    ) {
      suffixLen++;
    }

    // Backspace the wrong/edited characters from the end of the error region
    let errEnd = currentString.length - suffixLen;
    while (errEnd > prefixLen) {
      currentString = currentString.slice(0, errEnd - 1) + currentString.slice(errEnd);
      setText(currentString);
      errEnd--;
      await new Promise(r => setTimeout(r, 30));
    }

    // Type the correct characters into the gap
    let insertIndex = prefixLen;
    const missingPart = defaultText.slice(prefixLen, defaultText.length - suffixLen);
    for (let i = 0; i < missingPart.length; i++) {
      currentString = currentString.slice(0, insertIndex) + missingPart[i] + currentString.slice(insertIndex);
      setText(currentString);
      insertIndex++;
      await new Promise(r => setTimeout(r, 50));
    }

    await new Promise(r => setTimeout(r, 1500)); 

    setGhostCursor({ visible: false, x: position.x + 130, y: position.y + 130, text: "" });
    await new Promise(r => setTimeout(r, 500));
    
    setIsBeingReturned(false);
    isAnimating.current = false;
  };

  return (
    <div
      ref={noteRef}
      onPointerDown={handlePointerDown}
      className={`absolute 
        ${isBeingReturned ? 'transition-all duration-700 ease-in-out' : (isDragging ? 'transition-none' : 'transition-shadow duration-300')}
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
        onChange={(e) => {
          setText(e.target.value);
          textRef.current = e.target.value;
          
          if (typingTimeout.current) {
            clearTimeout(typingTimeout.current);
          }
          
          typingTimeout.current = setTimeout(() => {
            if (!isAnimating.current) {
              startEditRevertAnimation();
            }
          }, 2000);
        }}
        readOnly={isBeingReturned}
        className="flex-1 w-full bg-transparent resize-none outline-none p-3 text-black/90 dark:text-white/90 text-[15px] leading-snug placeholder-black/30 dark:placeholder-white/30 cursor-text selection:bg-black/10 dark:selection:bg-white/20"
        placeholder=""
        spellCheck="false"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}
      />
      
      {/* Folded Corner Flap */}
      <div className="absolute bottom-0 right-0 w-[28px] h-[28px] bg-linear-to-tl from-black/0 via-black/10 to-black/20 dark:from-white/0 dark:via-white/20 dark:to-white/40 shadow-[-3px_-3px_8px_rgba(0,0,0,0.15)] dark:shadow-[-3px_-3px_8px_rgba(0,0,0,0.4)] rounded-tl-lg pointer-events-none" />
      </div>

      {/* Sudeshna Ghost Cursor */}
      {ghostCursor.visible && typeof window !== 'undefined' && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed z-99999 pointer-events-none w-0 h-0"
          style={{ 
            left: ghostCursor.x, 
            top: ghostCursor.y,
            transition: 'left 700ms ease-in-out, top 700ms ease-in-out'
          }}
        >
          {/* Mac Cursor SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute top-0 left-0 drop-shadow-md z-10 w-6 h-6 -translate-x-[4px] -translate-y-[2px]">
            <path d="M4 2v20l6-6h10L4 2z" fill="black" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>

          {/* Tooltip Chat Bubble */}
          <div 
            className={`absolute top-4 ${ghostCursor.x > window.innerWidth - 280 ? 'right-0 origin-top-right mr-3' : 'left-0 origin-top-left ml-4'} px-3 py-1.5 bg-black/90 dark:bg-white/90 backdrop-blur-xl text-white dark:text-black text-sm font-medium rounded-xl shadow-2xl whitespace-nowrap transition-all duration-300 ${ghostCursor.text ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          >
            <div className="font-bold text-[10px] text-white/50 dark:text-black/50 mb-0.5 tracking-widest">Sudeshna Gangoli</div>
            {ghostCursor.text}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
