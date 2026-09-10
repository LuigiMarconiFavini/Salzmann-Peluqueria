import { MessageCircle } from 'lucide-react';
import { waLink } from '../config';

function WhatsAppButton() {
  return (
    <a href={waLink('Hola! Tengo una consulta.')} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-rose text-white flex items-center justify-center shadow-lg hover:bg-lilac hover:scale-110 hover:shadow-xl hover:shadow-lilac/40 transition-all duration-200">
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </a>
  );
}

export default WhatsAppButton;