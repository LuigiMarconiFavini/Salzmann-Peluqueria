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
  {
    quote: 'Me ayudaron a encontrar un cambio de look que realmente siento mío. Se toman el tiempo de escuchar y eso se nota en el resultado.',
    name: 'Lucía F.',
  },
  {
    quote: 'Siempre me voy contenta. El ambiente es relajado, te hacen sentir cómoda y mi pelo queda hermoso.',
    name: 'Carolina B.',
  },
  {
    quote: 'Fui con muchas dudas y me asesoraron con paciencia. El color quedó natural, brillante y justo como lo imaginaba.',
    name: 'Julieta R.',
  },
  {
    quote: 'Además de trabajar súper bien, tienen una calidez especial. Es mi momento para desconectar y salir renovada.',
    name: 'Florencia D.',
  },
];

function Testimonial() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const wrapped = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    const child = container.children[wrapped];

    if (child) {
      const left = child.offsetLeft - (container.clientWidth - child.offsetWidth) / 2;
      container.scrollTo({ left, behavior: 'smooth' });
    }

    setActiveIndex(wrapped);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frame;

    const handleScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closest = 0;
        let closestDist = Infinity;

        Array.from(container.children).forEach((child, index) => {
          const childRect = child.getBoundingClientRect();
          const childCenter = childRect.left + childRect.width / 2;
          const distance = Math.abs(childCenter - containerCenter);

          if (distance < closestDist) {
            closestDist = distance;
            closest = index;
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
    <section className="relative overflow-hidden bg-gradient-to-br from-rose/8 to-lilac/8 py-24">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -top-10 -left-10 h-48 w-48 text-rose/25"
      >
        <path d="M0 120 C60 120 80 60 160 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 150 C80 150 110 90 190 70" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 text-rose/25"
      >
        <path d="M200 80 C140 80 120 140 40 160" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M200 50 C120 50 90 110 10 130" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-rose/40" />
            <p className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-rose">
              Lo que dicen nuestras clientas
            </p>
            <div className="h-px w-10 bg-rose/40" />
          </div>

          <h2 className="mb-3 text-center font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            Tu confianza también
            <br />
            <span className="italic text-rose">es parte de nuestra historia.</span>
          </h2>

          <p className="mb-10 text-center text-lg text-muted">
            Cada visita, una experiencia única. Esto es lo que nos cuentan.
          </p>
        </Reveal>

        <div className="mb-6 flex justify-end gap-3">
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Ver reseña anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-rose/30 text-rose transition-colors hover:bg-rose hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Ver siguiente reseña"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-rose text-white transition-colors hover:bg-lilac"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative flex gap-5 overflow-x-auto px-[calc((100vw-280px)/2)] pb-2 snap-x snap-mandatory no-scrollbar sm:px-[calc((100vw-320px)/2)] lg:px-10 xl:px-[calc((100vw-72rem)/2+2.5rem)]"
      >
        {TESTIMONIALS.map(({ quote, name }, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={`${name}-${index}`}
              className={`snap-center shrink-0 w-[280px] rounded-2xl border p-7 backdrop-blur-sm transition-colors duration-300 sm:w-[320px] ${
                isActive
                  ? 'border-rose bg-rose text-white'
                  : 'border-ink/8 bg-surface/80 text-ink'
              }`}
            >
              <Quote
                className={isActive ? 'text-white/50' : 'text-rose/40'}
                size={32}
                fill="currentColor"
                strokeWidth={0}
              />

              <p className={`mt-4 leading-relaxed ${isActive ? 'text-white' : 'text-ink'}`}>
                {quote}
              </p>

              <div className={`my-4 h-px w-8 ${isActive ? 'bg-white/30' : 'bg-ink/15'}`} />

              <p className={`text-xs uppercase tracking-widest ${isActive ? 'text-white/80' : 'text-muted'}`}>
                {name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Ir a la reseña ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index ? 'w-6 bg-rose' : 'w-2 bg-rose/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;