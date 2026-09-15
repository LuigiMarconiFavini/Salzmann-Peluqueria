import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { waLink } from '../config';

function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink pt-16 md:pt-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#d98ca0,transparent_32%),radial-gradient(circle_at_15%_85%,#8a6bae,transparent_28%)]" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <ArrowLeft size={17} /> Volver al inicio
          </Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-rose">Servicios</p>
          <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-white font-medium">
            Tiempo para vos,<br />
            <span className="italic text-lilac-light">pelo con intención.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-white/75">
            Elegimos cada servicio según tu estilo.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-12 md:gap-20">
          {SERVICES.map((service, index) => {
            const { icon: Icon } = service;
            const textOrder = index % 2 === 0 ? 'md:order-1' : 'md:order-2';
            const imageOrder = index % 2 === 0 ? 'md:order-2' : 'md:order-1';

            return (
              <article id={service.id} key={service.id} className="scroll-mt-28 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
                <div className={textOrder}>
                  <div className="h-11 w-11 rounded-full bg-lilac/10 flex items-center justify-center">
                    <Icon className="text-lilac" size={21} strokeWidth={1.5} />
                  </div>
                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-rose">{service.duration}</p>
                  <h2 className="mt-3 text-4xl sm:text-5xl text-ink font-medium">{service.title}</h2>
                  <p className="mt-5 text-lg text-muted leading-relaxed">{service.fullDescription}</p>
                  <ul className="mt-7 space-y-3">
                    {service.steps.map((step) => (
                      <li key={step} className="flex gap-3 text-muted leading-relaxed">
                        <Check className="mt-1 shrink-0 text-lilac" size={17} strokeWidth={2.25} />
                        {step}
                      </li>
                    ))}
                  </ul>
                  <a href={waLink(`Hola! Quiero consultar sobre ${service.title}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-9 bg-lilac text-white px-6 py-3 rounded-full font-semibold hover:bg-lilac-light hover:shadow-lg hover:shadow-lilac/25 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac">
                    Consultar por este servicio <ArrowRight size={17} />
                  </a>
                </div>
                <div className={`${imageOrder} aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/5] overflow-hidden rounded-3xl bg-lilac/10`}>
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
