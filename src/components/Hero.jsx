import Reveal from './Reveal';
import { waLink } from '../config';

function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden -mt-20 pt-20 md:-mt-24 md:pt-24 min-h-[100svh] md:min-h-0 flex items-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/75 md:bg-gradient-to-r md:from-ink/75 md:via-ink/35 md:to-transparent" />

      <div className="relative w-full px-6 md:px-24 pt-16 md:pt-24 pb-20">
        <Reveal>
          <div className="max-w-xl">
            <p className="font-display italic text-lg sm:text-xl text-rose mb-4">Peluquería · Rosario</p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.1] md:leading-[1.02] text-white font-medium">
              El salón de tu barrio,
              <br />
              <span className="italic text-lilac-light">con oficio de grande.</span>
            </h1>

            <p className="mt-6 md:mt-7 text-lg sm:text-xl text-white/85 max-w-md leading-relaxed">
              Cortes, color, alisados y peinados en un salón donde te conocemos por tu nombre — no como una clienta más.
            </p>

            <div className="mt-8 md:mt-9 flex flex-wrap gap-4">
              <a href={waLink('Hola! Vi la web y quiero reservar un turno.')} target="_blank" rel="noopener noreferrer" className="bg-lilac text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-lilac-light hover:scale-[1.03] hover:shadow-lg hover:shadow-lilac/30 transition-all duration-200">
                Reservá tu turno
              </a>
              <a href="#trabajos" className="border-2 border-white/40 text-white px-6 py-3 rounded-full font-semibold text-base hover:border-white/70 hover:scale-[1.03] hover:shadow-md transition-all duration-200">
                Ver trabajos
              </a>
            </div>

            <div className="mt-12 md:mt-16 flex flex-wrap gap-6 sm:gap-10 border-t border-white/20 pt-8">
              <div>
                <p className="font-display text-2xl sm:text-3xl text-lilac-light">Belgrano 627</p>
                <p className="text-base text-white/70 mt-1">San Carlos, Santa Fe</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl text-lilac-light">Mar a sáb</p>
                <p className="text-base text-white/70 mt-1">15 a 21hs</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;