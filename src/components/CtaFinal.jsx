import Reveal from './Reveal';
import { waLink } from '../config';

function CtaFinal() {
  return (
    <section id="contacto" className="bg-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 text-center">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-rose">Reservá tu momento</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-tight">
            ¿Querés que pensemos
            <br />
            tu próximo <span className="italic text-lilac-light">cambio?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/70">Escribinos, contanos qué buscás y coordinamos tu turno.</p>

          <a href={waLink('Hola! Quiero que pensemos mi próximo cambio y consultar disponibilidad.')} target="_blank" rel="noopener noreferrer" className="inline-block mt-10 bg-lilac px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-lilac-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Consultar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaFinal;