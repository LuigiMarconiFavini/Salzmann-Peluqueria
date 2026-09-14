import { MessageCircle, Mail } from 'lucide-react';
import { waLink } from '../config';

const CONTACT_EMAIL = 'ejemplo@gmail.com';
const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent('Consulta desde la web')}`;

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
];

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface">
      <div className="w-full px-6 md:px-24 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                <img src="/logo-salzmann.png" alt="Salzmann Peluquería" className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-xl text-ink">
                Salzmann<span className="text-rose">.</span>
              </span>
            </a>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Belgrano 627 · Rosario, Santa Fe
              <br />
              Martes a sábados, 15 a 21hs
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose mb-5">Secciones</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted hover:text-lilac transition-colors w-fit">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose mb-5">Contacto</p>

            <a href={gmailComposeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-lilac transition-colors w-fit mb-6">
              <Mail size={16} strokeWidth={1.75} />
              {CONTACT_EMAIL}
            </a>

            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/salzmannpeluqueria/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-12 w-12 rounded-full bg-gradient-to-br from-rose to-lilac text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-rose/30 transition-all duration-200">
                <InstagramIcon width={20} height={20} />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-12 w-12 rounded-full bg-lilac text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-lilac/30 transition-all duration-200">
                <MessageCircle size={20} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted/70">
          <p>© {new Date().getFullYear()} Salzmann Peluquería. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{' '}
            <a href="https://fiwo-agency.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-lilac transition-colors">
              Fiwo Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;