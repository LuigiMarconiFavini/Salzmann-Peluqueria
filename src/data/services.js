import { Droplets, Palette, Scissors, Wind } from 'lucide-react';

export const SERVICES = [
  {
    id: 'peinados',
    icon: Wind,
    title: 'Peinados',
    description: 'Para fiestas, casamientos y eventos. Prueba previa incluida.',
    duration: 'Duración aprox. 45 min a 1 h 15 min',
    image: '/peinados.jpg',
    fullDescription: 'Armamos un peinado que dialogue con tu look y se mantenga impecable durante el evento. La prueba previa permite llegar al día importante sin sorpresas.',
    steps: [
      'Prueba previa para definir el estilo',
      'Preparación y protección del cabello',
      'Armado con técnicas de larga duración',
      'Fijación final con productos profesionales',
    ],
  },
  {
    id: 'corte-color',
    icon: Scissors,
    title: 'Corte & Color',
    description: 'Cortes a medida, tintura y reflejos, de raíz a puntas.',
    duration: 'Duración aprox. 1 h 30 min a 2 h 30 min',
    image: '/cortecolor.jpg',
    fullDescription: 'Un corte que acompaña la forma de tu rostro y tu rutina, combinado con color que resalta tu base natural. Cuidamos la fibra capilar en cada aplicación.',
    steps: [
      'Diagnóstico capilar y charla sobre lo que buscás',
      'Corte a medida, ajustando forma y textura',
      'Aplicación de color o reflejos con productos profesionales',
      'Finalizado con hidratación y brillo',
    ],
  },
  {
    id: 'alisados',
    icon: Palette,
    title: 'Alisados',
    description: 'Tratamientos de alisado cuidando la fibra capilar.',
    duration: 'Duración aprox. 2 h a 3 h según largo y densidad',
    image: '/alisado.jpg',
    fullDescription: 'Tratamientos libres de formol, pensados para dejar tu pelo más liso y manejable sin resignar salud capilar. Ideal para reducir el frizz y el tiempo de peinado diario.',
    steps: [
      'Diagnóstico capilar para elegir el tratamiento adecuado',
      'Limpieza profunda previa',
      'Aplicación del alisado y planchado técnico',
      'Sellado y recomendaciones de cuidado en casa',
    ],
  },
  {
    id: 'tratamientos',
    icon: Droplets,
    title: 'Tratamientos hidratantes',
    description: 'Nutrición profunda para devolverle brillo y salud al pelo.',
    duration: 'Duración aprox. 40 min a 1 h',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85',
    fullDescription: 'Nutrición profunda para devolverle brillo, suavidad y elasticidad a tu cabello. Recomendado para pelo teñido, dañado o que necesita un extra de cuidado.',
    steps: [
      'Diagnóstico del estado del cabello',
      'Aplicación del tratamiento nutritivo indicado',
      'Masaje capilar para potenciar la absorción',
      'Sellado con calor o frío según el producto',
    ],
  },
];
