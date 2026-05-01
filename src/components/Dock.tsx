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
];

export function Dock() {
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
              <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none border border-white/10 shadow-lg">
                {item.label}
              </div>
              
              {/* Icon Container */}
              <button 
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
