import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight,Tag } from 'lucide-react';

const events = [
  {
    image: '/escola-de-sabedoria.jpg',
    category: 'Ensino',
    title: 'Escola de sabedoria',
    description: 'Uma experiência de formação espiritual para quem quer crescer em sabedoria, oração e propósito. São duas noites de ensino prático, adoração e encontros com líderes criativos da igreja.',
    date: '4 e 5 de Junho de  2026 - R$45,00',
    featured: true,
    tag: 'Destaque do Mês',
  },
  {
    image: '/FREQUENCIA.png',
    category: 'Acampamento',
    title: 'Acampamento',
    description: ' Três dias de encontro, adoração, comunhão e ativação para jovens que querem viver na frequência do céu.\n ENDEREÇO: Rua Aracanga, 358 - Bairro do Uriboca, Marituba - PA',
    date: '8, 9 e 10 de Julho - R$100,00',
    featured: false,
    tag: 'Anual',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Events() {
  const { ref, inView } = useInView();

  return (
    <section id="eventos" className="relative bg-neutral-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Decorative */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold-500/15 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Fique por dentro
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Eventos & <span className="text-gold-400">Informativos</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm leading-relaxed">
            Acompanhe tudo que está acontecendo na nossa igreja. Fique por dentro dos próximos eventos.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`group relative rounded-2xl overflow-hidden bg-neutral-800/60 border border-white/5 hover:border-white/10 shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                event.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${event.featured ? 'h-72 lg:h-80' : 'h-56'}`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    event.featured
                      ? 'bg-gold-500 text-black shadow-lg shadow-gold-900/40'
                      : 'bg-red-600/80 text-white backdrop-blur-sm'
                  }`}>
                    <Tag size={10} />
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">{event.category}</span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1 text-white/40 text-xs">
                    <Calendar size={11} />
                    {event.date}
                  </span>
                </div>
                <h3 className={`font-black text-white mb-2 ${event.featured ? 'text-2xl' : 'text-xl'}`}>
                  {event.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {event.description}
                </p>
                <button className="flex items-center gap-2 text-gold-400 text-sm font-semibold hover:gap-3 transition-all duration-200 group/btn">
                  Saiba mais presencialmente
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
