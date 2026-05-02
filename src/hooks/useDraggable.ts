import { useState, useRef, useEffect, type RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useDraggable(
  initialPosition: Position,
  windowRef: RefObject<HTMLDivElement | null>,
  isDisabled: boolean = false
) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isDragging = useRef(false);
  const dragStart = useRef<Position>({ x: 0, y: 0 });
  const initialWindowPos = useRef<Position>({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    
    // Only drag on primary button (left click)
    if (e.button !== 0) return;
    
    // Check if the target is a button or interactive element, if so don't drag
    if ((e.target as HTMLElement).closest('button, a, input, textarea')) return;

    isDragging.current = true;
    setIsDraggingState(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    initialWindowPos.current = { ...position };
    
    // Prevent text selection while dragging
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current || !windowRef.current || isDisabled) return;

      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      let newX = initialWindowPos.current.x + deltaX;
      let newY = initialWindowPos.current.y + deltaY;

      // Apply screen boundaries
      const rect = windowRef.current.getBoundingClientRect();
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      // Don't let the window titlebar go under the menu bar (approx 28px)
      const minX = 0;
      const minY = 28;

      newX = Math.max(minX, Math.min(newX, maxX));
      newY = Math.max(minY, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        setIsDraggingState(false);
        document.body.style.userSelect = '';
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [windowRef, isDisabled]);

  return { position, setPosition, handlePointerDown, isDragging: isDraggingState };
}
