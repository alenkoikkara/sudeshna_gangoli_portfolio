import { useState, useEffect } from 'react';

export function MacBootScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate boot progress
    const duration = 2000; // 2 seconds boot time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setShowText(true);
        
        // Wait for 1.5 seconds to show the text, then fade out screen
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete();
          }, 800); // 800ms fade out duration matches the transition duration
        }, 1500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-100 bg-black flex flex-col items-center justify-center transition-opacity duration-[800ms] ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className={`absolute flex items-center justify-center transition-all duration-500 ${showText ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        {/* Progress Bar Container */}
        <div className="w-48 h-1 bg-[#333333] rounded-full overflow-hidden">
          {/* Progress Bar Fill */}
          <div 
            className="h-full bg-white rounded-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`absolute flex items-center justify-center transition-all duration-700 delay-200 ${showText ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <span className="text-white font-bold text-3xl sm:text-4xl tracking-tight">
          Sudeshna Gangoli.
        </span>
      </div>
    </div>
  );
}
