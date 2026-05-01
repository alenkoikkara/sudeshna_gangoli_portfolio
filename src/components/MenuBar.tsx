import { useState, useEffect } from 'react';

export function MenuBar() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-7 backdrop-blur-md flex items-center px-4 justify-between text-xs font-medium text-foreground z-50 relative">
      <div className="flex items-center gap-6">
        <div className="font-bold">Sudeshna Gangoli</div>
        <div className="group flex items-center cursor-pointer py-1">
          <div>Resume</div>
          <div className="overflow-hidden transition-all duration-300 w-0 opacity-0 group-hover:w-4 group-hover:ml-1 group-hover:opacity-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
          </div>
        </div>

        <div className="relative group flex items-center h-full">
          <div className="cursor-pointer py-1">Socials</div>
          {/* Socials Dropdown Modal */}
          <div className="absolute top-full left-0 pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[-4px] group-hover:translate-y-0 scale-95 group-hover:scale-100 origin-top-left z-50">
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-xl p-2 flex gap-1 min-w-[140px]">
              <a href="#" className="group/social flex items-center gap-3 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/80 transition-all duration-300 group-hover/social:text-[#0a66c2] group-hover/social:animate-shake"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="group/social flex items-center gap-3 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-foreground/80 transition-all duration-300 group-hover/social:text-[#E1306C] group-hover/social:animate-shake"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="group/social flex items-center gap-3 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/80 transition-all duration-300 group-hover/social:text-black dark:group-hover/social:text-white group-hover/social:animate-shake"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="relative group flex items-center h-full">
          <div className="cursor-pointer py-1">Contact</div>
          {/* Contact Dropdown Modal */}
          <div className="absolute top-full left-0 pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[-4px] group-hover:translate-y-0 scale-95 group-hover:scale-100 origin-top-left z-50">
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-xl p-2 flex flex-col gap-1 min-w-[200px]">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('hello@sudeshna.design');
                  const el = document.getElementById('copy-text');
                  if (el) {
                    el.innerHTML = '<div class="text-[10px] font-bold uppercase tracking-wider">Copied!</div>';
                    el.classList.add('text-green-600', 'dark:text-green-400');
                    setTimeout(() => {
                      el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
                      el.classList.remove('text-green-600', 'dark:text-green-400');
                    }, 2000);
                  }
                }}
                className="flex items-center justify-between gap-1 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors text-sm w-full text-left group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2 truncate">
                  <div className="truncate">hello@sudeshna.design</div>
                </div>
                <div id="copy-text" className="text-foreground/40 group-hover/btn:text-foreground/80 transition-colors shrink-0 flex items-center justify-end min-w-[20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="cursor-default">Chicago, IL</div>
        <div className="flex items-center gap-2">
          <div className="cursor-default">{now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
          <div className="cursor-default">{now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
        </div>
      </div>
    </div>
  );
}
