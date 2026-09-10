import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { waLink } from '../config';

function ServiceModal({ service, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!service) return;

    const raf = requestAnimationFrame(() => {
      setVisible(true);
    });

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', handleKey);
      setVisible(false);
    };
  }, [service, onClose]);

  if (!service) return null;

  const {
    icon: Icon,
    title,
    fullDescription,
    duration,
    steps,
    gradient,
  } = service;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Fondo */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal */}
      <div
        className={`relative bg-surface rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl transition-all duration-200 ${
          visible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
        }`}
      >
        {/* Encabezado */}
        <div
          className={`h-28 bg-gradient-to-br ${gradient} rounded-t-3xl relative`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <X
              size={18}
              className="text-ink"
            />
          </button>

          <div className="absolute -bottom-7 left-7 h-14 w-14 rounded-full bg-surface flex items-center justify-center shadow-md">
            <div className="h-11 w-11 rounded-full bg-lilac/10 flex items-center justify-center">
              <Icon
                className="text-lilac"
                size={22}
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-7 pt-11">
          <h3 className="text-2xl text-ink font-medium mb-1">
            {title}
          </h3>

          {duration && (
            <p className="text-sm text-rose font-medium mb-4">
              {duration}
            </p>
          )}

          <p className="text-base text-muted leading-relaxed mb-6">
            {fullDescription}
          </p>

          {steps?.length > 0 && (
            <>
              <p className="text-sm font-semibold uppercase tracking-widest text-lilac mb-3">
                Cómo lo hacemos
              </p>

              <ul className="space-y-3">
                {steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-muted leading-relaxed"
                  >
                    <span className="font-display text-lilac shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <a
            href={waLink(
              `Hola! Quiero consultar sobre ${title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-lilac text-white px-6 py-3 rounded-full font-semibold hover:bg-lilac-light transition-colors"
          >
            Consultar por este servicio
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;