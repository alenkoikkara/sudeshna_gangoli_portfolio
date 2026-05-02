import { useEffect, useRef } from 'react';

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Track mouse
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    
    // Config
    const spacing = 24;
    const baseRadius = .1;
    const maxRadius = 1;
    const bulgeRadius = 250;
    const maxPush = 20; // How much dots are pushed away to create the 3D bulge

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', onResize);

    let animationFrameId: number;

    const render = () => {
      // Lerp mouse for smoothness
      mouseX += (targetMouseX - mouseX) * 0.15;
      mouseY += (targetMouseY - mouseY) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Check dark mode
      const isDark = document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)';

      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;
      
      const offsetX = (width % spacing) / 2;
      const offsetY = (height % spacing) / 2;

      ctx.beginPath();

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          let cx = i * spacing + offsetX;
          let cy = j * spacing + offsetY;

          const dx = cx - mouseX;
          const dy = cy - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let r = baseRadius;
          let drawX = cx;
          let drawY = cy;

          if (dist < bulgeRadius) {
            // Calculate bulge effect intensity
            const factor = 1 - dist / bulgeRadius;
            // Sine easing for a smooth, rounded lens shape
            const ease = Math.sin(factor * Math.PI / 2);
            
            r = baseRadius + (maxRadius - baseRadius) * ease;
            
            // Displacement (push outward from center to simulate 3D sphere surface)
            const push = maxPush * ease; 
            if (dist > 0) {
              drawX += (dx / dist) * push;
              drawY += (dy / dist) * push;
            }
          }

          ctx.moveTo(drawX + r, drawY);
          ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
        }
      }
      
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
