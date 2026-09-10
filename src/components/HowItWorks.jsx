import { Phone, CalendarCheck, Heart } from 'lucide-react';
import Reveal from './Reveal';

const STEPS = [
  { number: '01', icon: Phone, title: 'Escribinos', description: 'Contanos qué servicio querés y consultá disponibilidad.' },
  { number: '02', icon: CalendarCheck, title: 'Coordinamos', description: 'Te confirmamos el día y horario que mejor se adapte a vos.' },
  { number: '03', icon: Heart, title: 'Disfrutá tu momento', description: 'Te esperamos en el salón para que disfrutes tu turno.' },
];

function HowItWorks() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 overflow-hidden">
      {/* Líneas decorativas, arriba a la derecha */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute -top-6 right-0 w-40 h-40 text-rose/30 pointer-events-none"
      >
        <path d="M40 200 C40 100 100 40 200 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 200 C70 130 130 70 200 70" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 200 C100 160 160 100 200 100" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-rose mb-3">¿Cómo funciona?</p>
        <div className="w-6 h-[2px] bg-rose mb-6" />
        <h2 className="text-4xl md:text-5xl font-display text-ink font-medium mb-3">
          Reservá tu turno en 3 simples pasos.
        </h2>
        <p className="text-lg text-muted mb-14">Elegí tu servicio, coordinamos el horario y listo. Te esperamos en el salón.</p>
      </Reveal>

      {/* Fila de íconos + números, conectados por líneas */}
      <Reveal delay={100}>
        <div className="hidden md:flex items-center mb-6">
          {STEPS.map(({ number, icon: Icon }, index) => (
            <div key={number} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-4 shrink-0">
                <div className="h-14 w-14 rounded-full bg-rose/10 flex items-center justify-center">
                  <Icon className="text-rose" size={22} strokeWidth={1.5} />
                </div>
                <span className="font-display text-2xl text-rose">{number}</span>
              </div>
              {index < STEPS.length - 1 && <div className="flex-1 h-px bg-rose/25 mx-6" />}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mobile: cada paso agrupado (ícono + texto juntos) */}
      <div className="md:hidden flex flex-col gap-8">
        {STEPS.map(({ number, icon: Icon, title, description }) => (
          <div key={number} className="flex gap-4">
            <div className="h-14 w-14 rounded-full bg-rose/10 flex items-center justify-center shrink-0">
              <Icon className="text-rose" size={22} strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-display text-lg text-rose block mb-1">{number}</span>
              <h3 className="text-xl text-ink font-medium mb-2">{title}</h3>
              <p className="text-base text-muted leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: texto en grilla debajo de los íconos */}
      <div className="hidden md:grid md:grid-cols-3 gap-10">
        {STEPS.map(({ number, title, description }, index) => (
          <Reveal key={number} delay={index * 120}>
            <div>
              <h3 className="text-xl text-ink font-medium mb-2">{title}</h3>
              <p className="text-base text-muted leading-relaxed">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;