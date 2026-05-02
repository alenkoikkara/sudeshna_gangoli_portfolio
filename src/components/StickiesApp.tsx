import { useState, useEffect } from 'react';

export function StickiesApp() {
  const [note, setNote] = useState(() => {
    return localStorage.getItem('mac-stickies-note') || 'Scribble your thoughts here...';
  });

  useEffect(() => {
    localStorage.setItem('mac-stickies-note', note);
  }, [note]);

  return (
    <div className="w-full h-full bg-[#fefcbf] dark:bg-[#d4d186] flex flex-col transition-colors duration-300">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="flex-1 w-full h-full bg-transparent resize-none outline-none p-6 text-black/80 text-xl font-medium leading-relaxed font-serif placeholder-black/40"
        placeholder="Type your notes here..."
        spellCheck="false"
      />
    </div>
  );
}
