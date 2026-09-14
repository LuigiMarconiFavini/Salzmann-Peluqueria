import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

// TODO: reemplazar por reseñas reales de clientas antes de publicar.
const TESTIMONIALS = [
  {
    quote: 'Salgo siempre feliz de acá. El trato, la calidez y el resultado son excelentes. Me encanta mi pelo desde que voy a Salzmann.',
    name: 'Sofía G.',
  },
  {
    quote: 'Vine por un corte y me quedé como clienta fija. Acá te tratan como familia.',
    name: 'Clienta de Salzmann Peluquería',
  },
  {
    quote: 'La atención es increíble, siempre escuchan lo que necesitás y te aconsejan lo mejor para vos. Salgo renovada y con una sonrisa.',
    name: 'Martina L.',
  },
  {
    quote: 'El lugar es hermoso, el equipo súper cálido y profesional. Siempre vuelvo porque sé que mi pelo está en las mejores manos.',
    name: 'Cami R.',
  },
  {
    quote: 'No sé qué haría sin mi peluquera de confianza. Recomiendo Salzmann con los ojos cerrados, siempre superan mis expectativas.',
    name: 'Valentina P.',
  },
];

function Testimonial() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    // Wrap-around: pasado el último vuelve al primero, y antes del primero va al último.
    const wrapped = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    const child = container.children[wrapped];
    if (child) child.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActiveIndex(wrapped);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let frame;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const containerLeft = container.getBoundingClientRect().left;
        let closest = 0;
        let closestDist = Infinity;
        Array.from(container.children).forEach((child, i) => {
          const dist = Math.abs(child.getBoundingClientRect().left - containerLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-rose/8 to-lilac/8 overflow-hidden py-24">
      {/* Líneas decorativas */}
      <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute -top-10 -left-10 w-48 h-48 text-rose/25 pointer-events-none">
        <path d="M0 120 C60 120 80 60 160 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 150 C80 150 110 90 190 70" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute -bottom-10 -right-10 w-48 h-48 text-rose/25 pointer-events-none">
        <path d="M200 80 C140 80 120 140 40 160" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M200 50 C120 50 90 110 10 130" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-rose/40" />
            <p className="text-sm font-semibold uppercase tracking-widest text-rose whitespace-nowrap">Lo que dicen nuestras clientas</p>
            <div className="h-px w-10 bg-rose/40" />
          </div>
          <h2 className="text-center font-display text-4xl md:text-5xl text-ink font-medium leading-tight mb-3">
            Tu confianza también
            <br />
            <span className="italic text-rose">es parte de nuestra historia.</span>
          </h2>
          <p className="text-center text-lg text-muted mb-10">Cada visita, una experiencia única. Esto es lo que nos cuentan.</p>
        </Reveal>

        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Ver reseña anterior"
            className="h-11 w-11 rounded-full border border-rose/30 flex items-center justify-center text-rose hover:bg-rose hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Ver siguiente reseña"
            className="h-11 w-11 rounded-full bg-rose text-white flex items-center justify-center hover:bg-lilac transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative flex gap-5 overflow-x-auto pr-6 md:pr-10 pb-2 snap-x snap-mandatory no-scrollbar"
        style={{ paddingLeft: 'max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))' }}
      >
        {TESTIMONIALS.map(({ quote, name }, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={name + index}
              className={`snap-start shrink-0 w-[280px] sm:w-[320px] backdrop-blur-sm rounded-2xl p-7 border transition-colors duration-300 ${
                isActive ? 'bg-rose text-white border-rose' : 'bg-surface/80 text-ink border-ink/8'
              }`}
            >
              <Quote className={isActive ? 'text-white/50' : 'text-rose/40'} size={32} fill="currentColor" strokeWidth={0} />
              <p className={`mt-4 leading-relaxed ${isActive ? 'text-white' : 'text-ink'}`}>{quote}</p>
              <div className={`w-8 h-px my-4 ${isActive ? 'bg-white/30' : 'bg-ink/15'}`} />
              <p className={`text-xs uppercase tracking-widest ${isActive ? 'text-white/80' : 'text-muted'}`}>{name}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Ir a la reseña ${index + 1}`}
            className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-6 bg-rose' : 'w-2 bg-rose/30'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;