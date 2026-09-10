import { useState } from 'react';
import { Scissors, Palette, Wind, Droplets, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import ServiceModal from './ServiceModal';

const SERVICES = [
  {
    icon: Scissors,
    title: 'Corte & Color',
    description: 'Cortes a medida, tintura y reflejos, de raíz a puntas.',
    gradient: 'from-lilac/25 to-rose/25',
    duration: 'Duración aprox. 1h 30min – 2h 30min',
    fullDescription: 'Un corte que se adapta a la forma de tu rostro y tu rutina diaria, combinado con color que resalta tu base natural. Trabajamos con productos profesionales que cuidan la fibra capilar en cada aplicación.',
    steps: [
      'Diagnóstico capilar y charla sobre lo que buscás',
      'Corte a medida, ajustando forma y textura',
      'Aplicación de color o reflejos con productos profesionales',
      'Finalizado con hidratación y brillo',
    ],
  },
  {
    icon: Wind,
    title: 'Peinados',
    description: 'Para fiestas, casamientos y eventos. Prueba previa incluida.',
    gradient: 'from-rose/25 to-lilac-light/30',
    duration: 'Duración aprox. 45min – 1h 15min (prueba aparte)',
    fullDescription: 'Para que llegues perfecta a cualquier evento. Armamos el peinado según tu look, con prueba previa incluida para que no haya sorpresas el día importante.',
    steps: [
      'Prueba previa para definir el estilo',
      'Preparación y protección del cabello',
      'Armado del peinado con técnicas de larga duración',
      'Fijación final con productos profesionales',
    ],
  },
  {
    icon: Palette,
    title: 'Alisados',
    description: 'Tratamientos de alisado cuidando la fibra capilar.',
    gradient: 'from-lilac-light/30 to-lilac/25',
    duration: 'Duración aprox. 2h – 3h según largo y densidad',
    fullDescription: 'Tratamientos de alisado libres de formol, pensados para dejar tu pelo liso y manejable sin resignar salud capilar. Ideal si buscás reducir el frizz y el tiempo de peinado diario.',
    steps: [
      'Diagnóstico capilar para elegir el tratamiento adecuado',
      'Limpieza profunda previa',
      'Aplicación del alisado y planchado técnico',
      'Sellado y recomendaciones de cuidado en casa',
    ],
  },
  {
    icon: Droplets,
    title: 'Tratamientos hidratantes',
    description: 'Nutrición profunda para devolverle brillo y salud al pelo.',
    gradient: 'from-lilac/20 to-rose/30',
    duration: 'Duración aprox. 40min – 1h',
    fullDescription: 'Nutrición profunda para devolverle brillo, suavidad y elasticidad a tu cabello. Recomendado para pelo teñido, dañado o que necesita un extra de cuidado.',
    steps: [
      'Diagnóstico del estado del cabello',
      'Aplicación de tratamiento nutritivo según necesidad',
      'Masaje capilar para potenciar la absorción',
      'Sellado con calor o frío según el producto',
    ],
  },
];

function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="servicios" className="bg-lilac/6">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <div className="flex items-start justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-rose whitespace-nowrap">Qué hacemos</p>
                <div className="hidden sm:block h-px bg-rose/30 w-16" />
              </div>
              <h2 className="text-4xl sm:text-5xl text-ink font-medium mb-3">
                Servicios pensados <span className="italic text-lilac">para vos</span>
              </h2>
              <p className="text-lg text-muted">Cuidamos tu cabello, realzamos tu belleza.</p>
            </div>

            <p className="hidden lg:block font-display italic text-xl text-rose/70 text-right leading-snug -rotate-2 shrink-0 mt-1">
              Tu pelo,
              <br />
              nuestra pasión ♡
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((service, index) => {
            const { icon: Icon, title, description, gradient } = service;
            return (
              <Reveal key={title} delay={index * 100}>
                <button onClick={() => setSelected(service)} className="w-full text-left bg-surface rounded-2xl border border-ink/8 h-full overflow-hidden flex flex-col sm:flex-row transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:border-lilac/30">
                  <div className={`w-full h-28 sm:w-[38%] sm:h-auto shrink-0 bg-gradient-to-br ${gradient} order-first`} />

                  <div className="flex-1 min-w-0 p-7 flex flex-col">
                    <div className="h-11 w-11 rounded-full bg-lilac/10 flex items-center justify-center">
                      <Icon className="text-lilac" size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl text-ink font-medium mt-5 mb-2">{title}</h3>
                    <p className="text-base text-muted leading-relaxed">{description}</p>

                    <span className="mt-auto pt-6 self-start h-9 w-9 rounded-full bg-lilac text-white flex items-center justify-center shrink-0">
                      <ArrowRight size={16} strokeWidth={2} />
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Services;