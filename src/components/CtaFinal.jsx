import Reveal from './Reveal';
import { waLink } from '../config';

function CtaFinal() {
  return (
    <section id="contacto" className="bg-gradient-to-br from-lilac to-rose">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 text-center">
        <Reveal>
          <p className="font-display italic text-xl text-white/90 mb-3">Hablemos</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-tight">
            ¿Te gustó lo que viste?
            <br />
            Contanos <span className="italic">por WhatsApp.</span>
          </h2>

          <a href={waLink('Hola! Me gustó la web de Salzmann y quiero consultar disponibilidad.')} target="_blank" rel="noopener noreferrer" className="inline-block mt-10 bg-white text-lilac px-8 py-4 rounded-full font-semibold text-lg hover:bg-bg hover:scale-[1.03] hover:shadow-xl hover:shadow-ink/20 transition-all duration-200">
            Escribinos por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaFinal;