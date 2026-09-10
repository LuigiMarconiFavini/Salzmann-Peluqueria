import { MessageCircle } from 'lucide-react';
import { waLink } from '../config';

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
    <footer className="border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted">
        <div>
          <p className="text-ink font-medium">Peluquería Salzmann</p>
          <p>Belgrano 627 · San Carlos, Santa Fe</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/salzmannpeluqueria/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:text-lilac hover:border-lilac transition-colors">
            <InstagramIcon width={18} height={18} />
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:text-lilac hover:border-lilac transition-colors">
            <MessageCircle size={18} strokeWidth={1.75} />
          </a>
        </div>

        <p className="text-xs text-muted/70">
          Desarrollado por{' '}
          <a href="https://fiwo-agency.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-lilac transition-colors">
            Fiwo Agency
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;