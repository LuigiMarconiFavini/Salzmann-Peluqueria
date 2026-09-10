import { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';

function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  const handlePointerDown = () => { dragging.current = true; };
  const handlePointerUp = () => { dragging.current = false; };
  const handlePointerMove = (e) => { if (dragging.current) updatePosition(e.clientX); };

  return (
    <section id="trabajos" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <p className="font-display italic text-lg sm:text-xl text-rose mb-3">Nuestro trabajo</p>
      <h2 className="text-4xl sm:text-5xl text-ink font-medium mb-10 md:mb-12">
        Antes y <span className="italic text-lilac">después</span>
      </h2>

      <div ref={containerRef} onMouseMove={handlePointerMove} onMouseUp={handlePointerUp} onMouseLeave={handlePointerUp} onTouchMove={(e) => updatePosition(e.touches[0].clientX)} className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden select-none">
        <div className="absolute inset-0 bg-gradient-to-br from-lilac-light/40 to-lilac/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose/60 to-rose overflow-hidden" style={{ clipPath: `inset(0 0 0 ${position}%)` }} />
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/80" style={{ left: `${position}%` }}>
          <button onMouseDown={handlePointerDown} onTouchStart={handlePointerDown} onTouchEnd={handlePointerUp} aria-label="Deslizar para comparar" className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
            <MoveHorizontal size={18} className="text-ink" />
          </button>
        </div>
        <span className="absolute top-5 left-5 bg-ink/80 text-white text-xs font-medium tracking-wide px-3 py-1.5 rounded-full">Antes</span>
        <span className="absolute top-5 right-5 bg-ink/80 text-white text-xs font-medium tracking-wide px-3 py-1.5 rounded-full">Después</span>
      </div>

      <p className="text-base text-muted mt-4">Deslizá para ver el resultado — se reemplaza por fotos reales del salón apenas las tengan.</p>
    </section>
  );
}

export default BeforeAfter;