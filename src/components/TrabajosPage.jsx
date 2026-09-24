import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { waLink } from '../config';

// TODO: los captions son un placeholder — cambialos por el nombre real de la técnica
// o dejalos vacíos ('') si preferís que las fotos no tengan texto encima.
const WORKS = [
  { image: '/trabajos/trabajo-01.jpg', caption: 'Coloración en canas' },
  { image: '/trabajos/trabajo-02.jpg', caption: 'Ondas naturales' },
  { image: '/trabajos/trabajo-03.jpg', caption: 'Movimiento y brillo' },
  { image: '/trabajos/trabajo-04.jpg', caption: 'Antes y después: balayage' },
  { image: '/trabajos/trabajo-05.jpg', caption: 'Antes y después: brillo intenso' },
  { image: '/trabajos/trabajo-06.jpg', caption: 'Antes y después: rubio luminoso' },
  { image: '/trabajos/trabajo-07.jpg', caption: 'Proceso completo de color' },
  { image: '/trabajos/trabajo-08.jpg', caption: 'Resultado final' },
  { image: '/trabajos/trabajo-09.jpg', caption: 'Luz y textura' },
];

function TrabajosPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink pt-16 md:pt-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#d98ca0,transparent_32%),radial-gradient(circle_at_15%_85%,#8a6bae,transparent_28%)]" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <ArrowLeft size={17} /> Volver al inicio
          </Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-rose">Trabajos</p>
          <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-white font-medium">
            Resultados que <br />
            <span className="italic text-lilac-light">hablan solos.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-white/75">
            Una selección de transformaciones reales, hechas acá en el salón.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
          {WORKS.map(({ image, caption }, index) => (
            <div
              key={image}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-lilac/10"
            >
              <img
                src={image}
                alt={caption || 'Trabajo realizado en Salzmann Peluquería'}
                loading={index < 4 ? 'eager' : 'lazy'}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {caption && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="translate-y-2 p-4 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                    {caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg text-muted mb-5">¿Te gustó lo que viste? Contanos qué tenés pensado para tu pelo.</p>
          <a
            href={waLink('Hola! Vi los trabajos en la web y quiero consultar disponibilidad.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lilac text-white px-6 py-3 rounded-full font-semibold hover:bg-lilac-light hover:shadow-lg hover:shadow-lilac/25 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default TrabajosPage;