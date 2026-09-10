import Reveal from './Reveal';

function Testimonial() {
  return (
    <section className="bg-gradient-to-r from-rose/10 to-lilac/10 border-y border-ink/8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <Reveal>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <blockquote className="font-display text-3xl md:text-4xl text-ink leading-snug">
              "Vine por un corte y me quedé como clienta fija. Acá te tratan como familia."
              <footer className="mt-5 text-base text-muted font-sans not-italic">— Clienta de Salzmann Peluquería</footer>
            </blockquote>

            <p className="text-lg text-muted leading-relaxed">
              Fundado en el barrio, Salzmann Peluquería creció por recomendación boca en boca. Hoy seguimos con la misma filosofía: escuchar lo que necesitás antes de tocarte un solo pelo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonial;