import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { SERVICES } from '../data/services';

function Services() {
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
            const { icon: Icon, title, description, image, id } = service;
            return (
              <Reveal key={title} delay={index * 100}>
                <Link to={`/servicios#${id}`} className="w-full text-left bg-surface rounded-2xl border border-ink/8 h-full overflow-hidden flex flex-col sm:flex-row transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:border-lilac/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac">
                  <img src={image} alt="" className="w-full h-28 sm:w-[38%] sm:h-auto shrink-0 object-cover order-first" />

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
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Link to="/servicios" className="inline-flex items-center gap-2 border border-lilac text-lilac px-6 py-3 rounded-full font-semibold hover:bg-lilac hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac">
              Ver todos los servicios <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
