import homeIconDark from '../assets/icons/dark/Home_2.png';
import homeIconLight from '../assets/icons/light/Home_2.png';
import reactIcon from '../assets/react.svg';
import viteIcon from '../assets/vite.svg';
import { useState } from 'react';

const dockItems = [
  { id: 'home', lightImage: homeIconLight, darkImage: homeIconDark, label: 'Home' },
  { id: 'project1', lightImage: reactIcon, darkImage: reactIcon, label: 'OCAD' },
  { id: 'project2', lightImage: viteIcon, darkImage: viteIcon, label: 'Syncro' },
  { id: 'project3', lightImage: reactIcon, darkImage: reactIcon, label: 'Design' },
  { id: 'about', lightImage: reactIcon, darkImage: reactIcon, label: 'About Me' },
];

interface DockProps {
  onOpenApp?: (id: string) => void;
  activeApps?: string[];
}

export function Dock({ onOpenApp, activeApps = [] }: DockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-3 px-4 py-3 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {dockItems.map((item) => {
          const isHovered = hoveredId === item.id;
          
          return (
            <div
              key={item.id}
              className="relative group flex items-end justify-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Tooltip */}
              <div className="absolute -top-14 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 px-3 py-1.5 bg-white/20 dark:bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-foreground text-sm font-medium rounded-xl whitespace-nowrap pointer-events-none flex flex-col items-center">
                {/* Border Mask to hide the line between div and bulge */}
                <div 
                  className="absolute inset-0 rounded-xl border border-white/40 dark:border-white/20 pointer-events-none"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, calc(50% + 10px) 100%, calc(50% + 10px) calc(100% - 4px), calc(50% - 10px) calc(100% - 4px), calc(50% - 10px) 100%, 0% 100%)' }}
                />
                
                <span className="relative z-10">{item.label}</span>
                
                {/* Rounded Arrow Bulge */}
                <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-white/20 dark:bg-black/40 backdrop-blur-2xl border-b border-r border-white/40 dark:border-white/20 rotate-45 rounded-[3px]" />
              </div>
              
              {/* Icon Container */}
              <button 
                onClick={() => onOpenApp && item.id !== 'home' ? onOpenApp(item.id) : null}
                className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-tr from-white/10 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/30 dark:border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <>
                  <img 
                    src={item.lightImage}
                    alt={item.label}
                    className="w-6 h-6 object-contain dark:hidden" 
                  />
                  <img 
                    src={item.darkImage}
                    alt={item.label}
                    className="w-6 h-6 object-contain hidden dark:block" 
                  />
                </>
              </button>
              {/* Active Indicator Dot */}
              <div 
                className={`absolute -bottom-2 w-1 h-1 rounded-full bg-black/40 dark:bg-white/60 transition-opacity duration-300 ${
                  activeApps.includes(item.id) ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
