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
        <span className="font-bold">Sudeshna Gangoli</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Socials</span>
        <span className="cursor-pointer">Contact</span>
      </div>
      <div className="flex items-center gap-6">
        <span className="cursor-default">Chicago, IL</span>
        <span className="cursor-default">{now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
        <span className="cursor-default">{now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
      </div>
    </div>
  );
}
