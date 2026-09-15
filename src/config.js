// Datos de contacto centralizados.
// Si el número cambia, se edita ACÁ y se actualiza en toda la web.
export const WHATSAPP_NUMBER = '5493404446181';

/**
 * Genera un link de WhatsApp con mensaje prellenado.
 * @param {string} message - Mensaje sugerido según el contexto del botón.
 */
export function waLink(message = 'Hola! Vengo de la pagina! Quiero consultar por un turno en Salzmann Peluquería.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}