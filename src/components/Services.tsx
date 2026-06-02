import { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Users, Flame, Sun, Star } from 'lucide-react';

const services = [
  {
    day: 'Terça-feira',
    dayEn: 'Culto de',
    icon: Flame,
    color: 'from-red-700 to-red-600',
    border: 'border-red-600/30',
    glow: 'shadow-red-900/30',
    highlight: true,
    badge: 'Destaque',
    services: [
      {
        name: 'Terça do Vencedor',
        time: '19:30',
        note: 'Culto de avivamento e vitória',
      },
    ],
  },
  {
    day: 'Quarta-feira',
    dayEn: 'Culto de',
    icon: Flame,
    color: 'from-red-700 to-red-600',
    border: 'border-red-600/30',
    glow: 'shadow-red-900/30',
    services: [
      {
        name: 'Discipulado',
        time: '19:30',
        note: 'Venha aprender mais sobre cristo',
      },
    ],
  },
  {
    day: 'Quinta-feira',
    dayEn: 'Células',
    icon: Users,
    color: 'from-red-800 to-red-700',
    border: 'border-red-700/30',
    glow: 'shadow-red-900/20',
    services: [
      {
        name: 'Célula nas casas',
        time: '19:30',
        note: 'comunhão e avivamento nas células, Ano da multiplicação',
      },
    ],
  },
  {
    day: 'Sexta-feira',
    dayEn: 'Culto de',
    icon: Flame,
    color: 'from-red-800 to-red-700',
    border: 'border-red-700/30',
    glow: 'shadow-red-900/20',
    services: [
      {
        name: 'Há poder no nome de Jesus',
        time: '19:30',
        note: 'Culto de cura e libertação',
      },
    ],
  },
  {
    day: 'Sábado',
    dayEn: 'culto de',
    icon: Star,
    color: 'from-gold-700 to-gold-600',
    border: 'border-gold-600/30',
    glow: 'shadow-gold-900/20',
    services: [
      {
        name: 'Rede Atos29',
        time: '19:30',
        note: 'Culto para jovens e adolecentes',
      },
    ],
  },
  {
    day: 'Domingo',
    dayEn: 'culto de ',
    icon: Sun,
    color: 'from-gold-600 to-gold-500',
    border: 'border-gold-500/30',
    glow: 'shadow-gold-900/30',
    services: [
      {
        name: 'Escola Bíblica Dominical - exeto o primeiro domingo de cada mês',
        time: '08:30',
        note: 'Para todas as idades',
      },
      {
        name: 'Culto da Santa ceia',
        time: '07:30, 17:00 e 18:30',
        note: 'Primeiro Domingo do mês',
      },
      {
        name: 'Culto de Primícias',
        time: '07:30, 17:00 e 18:30',
        note: 'Segundo Domingo do mês',
      },
      {
        name: 'Culto de Missões',
        time: '07:30, 17:00 e 18:30',
        note: 'Terceiro Domingo do mês',
      },
      {
        name: 'Encontrão de células',
        time: '07:30, 17:00 e 18:30',
        note: 'Ultimo Domingo do mês',
      },
    ],
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="cultos"
      className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/30 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-red-600/20 border border-red-600/40 rounded-full text-red-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Programação Semanal
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Nossos <span className="text-gold-400">Cultos</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Venha adorar, aprender e crescer junto com a nossa família. Tem um
            culto para cada momento da sua vida.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.day}
                className={`relative rounded-2xl border ${
                  item.border
                } bg-neutral-900/80 backdrop-blur-sm p-6 shadow-xl ${
                  item.glow
                } transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl group ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {item.highlight && (
                  <div className="absolute -top-3 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-400 text-black text-xs font-black rounded-full uppercase tracking-wide shadow-lg">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Day header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/30 text-xs font-bold tracking-widest uppercase">
                      {item.dayEn}
                    </p>
                    <p className="text-white font-black text-xl">{item.day}</p>
                  </div>
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Services list */}
                <div className="flex flex-col gap-4">
                  {item.services.map((svc) => (
                    <div
                      key={svc.name}
                      className="border-t border-white/5 pt-4"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Clock size={13} className="text-gold-400 shrink-0" />
                        <span className="text-gold-300 font-bold text-sm">
                          {svc.time}
                        </span>
                      </div>
                      <p className="text-white font-semibold text-sm leading-snug">
                        {svc.name}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5">{svc.note}</p>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-5 flex items-center gap-1.5 text-white/30">
                  <MapPin size={12} />
                  <span className="text-xs">IEQ Novos Começos</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-white/40 text-sm">
            Todos os cultos são abertos ao público. Traga sua família e amigos!
          </p>
        </div>
      </div>
    </section>
  );
}
